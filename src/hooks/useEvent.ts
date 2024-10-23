import { CreateEventDto, UpdateEventDto } from "@/common/dto/event.dto";
import { eventService } from "@/services/event.service";
import { useEventStore } from "@/stores/event.store";
import { EventType } from "@/types/event.type";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useEvent = (eventId?: string | string[]) => {
  const queryClient = useQueryClient();
  const { filterEvents } = useEventStore();

  const eventsQuery = useQuery<{ data: EventType[] }, Error>(
    "events",
    async () => await eventService.getEvents(),
    {
      staleTime: 1000 * 60 * 5,
    },
  );
  const eventQuery = useQuery<{ data: EventType } | null, Error>(
    ["event", eventId],
    async () => {
      if (!eventId) {
        return null;
      }
      return await eventService.getEvent(eventId as string);
    },
    {
      enabled: !!eventId,
    },
  );

  const createEventMutation = useMutation(
    (event: CreateEventDto) => eventService.createEvent(event),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
      },
    },
  );

  const updateEventMutation = useMutation(
    ({ event, id }: { event: UpdateEventDto; id: string }) =>
      eventService.updateEvent(id, event),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        queryClient.invalidateQueries(["event", eventId]);
      },
    },
  );

  const joinEventMutation = useMutation(
    (id: string) => eventService.joinEvent(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        queryClient.invalidateQueries(["event", eventId]);
      },
    },
  );

  const exitEventMutation = useMutation(
    (id: string) => eventService.exitEvent(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
        queryClient.invalidateQueries(["event", eventId]);
      },
    },
  );

  const deleteEventMutation = useMutation(
    (id: string) => eventService.deleteEvent(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("events");
      },
    },
  );

  const filteredEvents = eventsQuery.data?.data
    ? filterEvents(eventsQuery.data.data)
    : [];

  return {
    events: filteredEvents,
    event: eventQuery.data?.data,
    isLoading: eventsQuery.isLoading,
    isError: eventsQuery.isError,
    error: eventsQuery.error,
    eventQuery,
    createEventMutation,
    updateEventMutation,
    deleteEventMutation,
    joinEventMutation,
    exitEventMutation,
  };
};
