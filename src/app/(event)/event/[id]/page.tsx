"use client";

import LocationCard from "@/components/Card/LocationCard";
import ParticipantCard from "@/components/Card/ParticipantCard";
import EventRuleContainer from "@/components/Containers/EventRuleContainer";
import LoadingOverlay from "@/components/Loading/LoadingOverlay";
import { useAuth } from "@/hooks/useAuth";
import { useEvent } from "@/hooks/useEvent";
import { formatDate } from "@/utils/day";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EmojiEventsSharpIcon from "@mui/icons-material/EmojiEventsSharp";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import LocalOfferIcon from "@mui/icons-material/LocalOffer"; // <-- Merged from HEAD
import LogoutIcon from "@mui/icons-material/Logout"; // <-- Merged from incoming
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import SubjectIcon from "@mui/icons-material/Subject";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Fragment, useState } from "react";

export default function EventDetailPage() {
  const { userProfile } = useAuth();
  const [value, setValue] = useState<number>(0);
  const { id } = useParams();
  const { event, joinEventMutation, exitEventMutation } = useEvent(
    id as string,
  );
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleJoinEvent = async () => {
    try {
      await joinEventMutation.mutateAsync(id as string);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLeaveEvent = async () => {
    try {
      await exitEventMutation.mutateAsync(id as string);
    } catch (error) {
      console.error(error);
    }
  };

  const redirect = (path: string) => {
    router.push(path);
  };

  return (
    <Fragment>
      {event ? (
        <Fragment>
          <Box sx={{ position: "relative", width: "100%" }}>
            <Box
              component="img"
              src={event?.thumbnail as string}
              sx={{
                objectFit: "cover",
                height: { xs: "150px", md: "250px" },
                width: "100%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "10px", md: "30px" },
                left: { xs: "8px", md: "16px" },
                zIndex: 1,
              }}
            >
              <Image
                src={event?.createdBy.organization?.profileImage as string}
                alt="avatar"
                width={96}
                height={96}
                className="w-24 h-24 rounded-full"
              />
            </Box>

            <Box sx={{ paddingLeft: { xs: "0px", md: "120px" }, mt: 2 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
                sx={{
                  ml: { xs: "0", md: "25px" },
                  mb: "20px",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Tab
                  icon={<SubjectIcon />}
                  label="OVERVIEW"
                  iconPosition="start"
                />
                <Tab
                  icon={<AccessTimeRoundedIcon />}
                  label="TIMELINE"
                  iconPosition="start"
                />
                <Tab
                  icon={<FindInPageRoundedIcon />}
                  label="Rules"
                  iconPosition="start"
                />
                <Tab
                  icon={<EmojiEventsSharpIcon />}
                  label="PRIZES"
                  iconPosition="start"
                />
                <Tab
                  icon={<PeopleSharpIcon />}
                  label="PARTICIPANTS"
                  iconPosition="start"
                />
                <Tab
                  icon={<LocalOfferIcon />}
                  label="Categories"
                  iconPosition="start"
                />{" "}
                {/* From HEAD */}
              </Tabs>
            </Box>
          </Box>

          <Grid container spacing={3} sx={{ p: { xs: 2, md: 8 } }}>
            <Grid item xs={12} md={3} className="flex flex-col gap-1">
              <Typography
                variant="h4"
                sx={{ color: "#1b1042", fontWeight: "bold" }}
              >
                {event?.title}
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }}>
                {event?.description}
              </Typography>
              <Box sx={{ width: "100%", mt: 3 }}>
                <hr className="border-t-2" />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{ textTransform: "uppercase", fontWeight: "600" }}
                >
                  Timeline
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "300", mt: 1 }}>
                  Registered: {formatDate(event?.registrationStartDate)} -{" "}
                  {formatDate(event?.registrationEndDate)}
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "300", mt: 1 }}>
                  Event Date: {formatDate(event?.eventStartDate)} -{" "}
                  {formatDate(event?.eventEndDate)}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <PeopleSharpIcon sx={{ color: "#4b5563" }} />
                <Typography sx={{ fontWeight: "bold", ml: 1 }}>
                  {event?.participants.length}
                </Typography>
                <Typography sx={{ ml: 1 }}>Participants</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Image
                  src={event?.createdBy.profileImage as string}
                  alt="avatar"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <Box sx={{ ml: 2 }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                    {event?.createdBy.fullName}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    By {event?.createdBy.organization?.name}
                  </Typography>
                </Box>
              </Box>

              {userProfile?.data._id === event?.createdBy._id && (
                <Button
                  variant="outlined"
                  startIcon={<AddCircleIcon />}
                  sx={{ mt: 3 }}
                  onClick={() => redirect(`/event-rule/create/${id}`)}
                >
                  Add Event Rule
                </Button>
              )}

              {event?.participants?.some(
                (participant) => participant._id === userProfile?.data._id,
              ) ? (
                <Button
                  variant="outlined"
                  startIcon={<LogoutIcon />} // <-- From incoming
                  sx={{ mt: 3 }}
                  onClick={handleLeaveEvent}
                >
                  Leave Event
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  startIcon={<AddCircleIcon />}
                  sx={{ mt: 3 }}
                  onClick={handleJoinEvent}
                >
                  Join Event
                </Button>
              )}
            </Grid>

            <Grid item xs={12} md={9}>
              <Box className="flex flex-col gap-7 mb-12">
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "20px", md: "26px" },
                  }}
                >
                  {event?.title}
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  {event?.description}
                </Typography>
              </Box>

              <Box className="flex flex-col gap-7 mb-12">
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "20px", md: "26px" },
                  }}
                >
                  Location
                </Typography>
                {event?.location && <LocationCard location={event.location} />}
              </Box>

              {event?.rules ? (
                event?.rules.map((rule, index) => (
                  <EventRuleContainer
                    key={index}
                    event={event}
                    eventRule={rule}
                    index={index}
                  />
                ))
              ) : (
                <Typography
                  sx={{ color: "gray", textAlign: "center", fontSize: "32px" }}
                >
                  No rules found for this event
                </Typography>
              )}

              <Box className="flex flex-col gap-7 mb-12">
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "20px", md: "26px" },
                  }}
                >
                  Participants
                </Typography>
                {event.participants && event.participants.length > 0 ? (
                  event.participants.map((participant, index) => (
                    <ParticipantCard key={index} participant={participant} />
                  ))
                ) : (
                  <Typography
                    sx={{
                      color: "gray",
                      textAlign: "center",
                      fontSize: "32px",
                    }}
                  >
                    No participants found for this event
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Fragment>
      ) : (
        <LoadingOverlay />
      )}
    </Fragment>
  );
}
