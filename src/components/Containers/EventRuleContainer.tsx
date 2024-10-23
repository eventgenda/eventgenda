import { UpdateEventRuleDto } from "@/common/dto/event-rule.dto";
import { UpdateEventDto } from "@/common/dto/event.dto";
import { useEvent } from "@/hooks/useEvent";
import { useEventRule } from "@/hooks/useEventRule";
import { EventRuleType } from "@/types/event-rule.type";
import { EventType } from "@/types/event.type";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

type Props = {
  event: EventType;
  eventRule: EventRuleType;
  index: number;
};

export default function EventRuleContainer({ event, eventRule, index }: Props) {
  const deleteEventRuleMutation = useEventRule().deleteEventRuleMutation;
  const { updateEventMutation } = useEvent(event._id);

  const handleDeleteEventRule = async () => {
    try {
      await deleteEventRuleMutation.mutateAsync(eventRule._id);
      const updateEventDto: UpdateEventDto = {
        title: event.title,
        description: event.description,
        limit: event.limit,
        categories: event.categories.map((category) => category._id),
        eventStartDate: event.eventStartDate.toLocaleString(),
        eventEndDate: event.eventEndDate.toLocaleString(),
        registrationStartDate: event.registrationStartDate.toLocaleString(),
        registrationEndDate: event.registrationEndDate.toLocaleString(),
        prizes: event.prizes,
        thumbnail: event.thumbnail,
        location: event.location._id,
        amountRequired: event.amountRequired,
        rules: event.rules
          .filter((rule) => rule._id !== eventRule._id)
          .map((rule) => rule._id),
        status: event.status,
      };
      await updateEventMutation.mutateAsync({
        id: event._id,
        event: updateEventDto,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box className="flex flex-col gap-7 mb-12">
      <Typography
        sx={{ fontWeight: "600", fontSize: { xs: "20px", md: "23px" } }}
      >
        <div className="flex items-center">
          {index + 1}. {eventRule.name}
          <IconButton aria-label="delete" onClick={handleDeleteEventRule}>
            <DeleteIcon />
          </IconButton>
        </div>
      </Typography>
      <Typography sx={{ color: "gray" }}>{eventRule.description}</Typography>
    </Box>
  );
}
