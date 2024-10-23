import { CreateEventDto, UpdateEventDto } from "@/common/dto/event.dto";
import { apiController } from "@/controllers/api.controller";
import { EventResponseType, EventsResponseType } from "@/types/event.type";

export const eventService = {
  getEvents: async (): Promise<EventsResponseType> => {
    return await apiController("/api/event", "get");
  },
  getEvent: async (id: string): Promise<EventResponseType> => {
    return await apiController(`/api/event/${id}`, "get");
  },
  createEvent: async (event: CreateEventDto): Promise<EventResponseType> => {
    return await apiController("/api/event", "post", event);
  },
  joinEvent: async (id: string): Promise<EventResponseType> => {
    return await apiController(`/api/event/${id}/join`, "post");
  },
  exitEvent: async (id: string): Promise<EventResponseType> => {
    return await apiController(`/api/event/${id}/exit`, "post");
  },
  updateEvent: async (
    id: string,
    event: UpdateEventDto,
  ): Promise<EventResponseType> => {
    return await apiController(`/api/event/${id}`, "put", event);
  },
  deleteEvent: async (id: string): Promise<EventResponseType> => {
    return await apiController(`/api/event/${id}`, "delete");
  },
};
