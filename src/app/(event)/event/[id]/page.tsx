"use client";

import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import EmojiEventsSharpIcon from "@mui/icons-material/EmojiEventsSharp";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import SubjectIcon from "@mui/icons-material/Subject";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function EventDetailPage() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src="https://taikai.network/static/images/default-cover.svg"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s"
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
            <Tab icon={<SubjectIcon />} label="OVERVIEW" iconPosition="start" />
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
            />
          </Tabs>
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ p: { xs: 2, md: 8 } }}>
        <Grid item xs={12} md={3} className="flex flex-col gap-1">
          <Typography
            variant="h4"
            sx={{ color: "#1b1042", fontWeight: "bold" }}
          >
            CASSINI Hackathons Environment and Green Transition
          </Typography>
          <Typography sx={{ color: "gray", mt: 1 }}>
            Create innovative solutions for the environment & green transition
            with EU space technologies.
          </Typography>
          <Box sx={{ width: "100%", mt: 3 }}>
            <hr className="border-t-2" />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ textTransform: "uppercase", fontWeight: "600" }}>
              Timeline
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: "300", mt: 1 }}>
              Hackathon Weekend starts 13 Sep, 2024 - 23:00
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: "300", mt: 1 }}>
              The Final Sprint 15 Sep, 2024 - 15:00
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <PeopleSharpIcon sx={{ color: "#4b5563" }} />
            <Typography sx={{ fontWeight: "bold", ml: 1 }}>871</Typography>
            <Typography sx={{ ml: 1 }}>Participants</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s"
              alt="avatar"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />
            <Box sx={{ ml: 2 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                CASSINI Hackathons & Mentoring
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "gray" }}>
                Brussels, Belgium
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box className="flex flex-col gap-7 mb-12">
            <Typography
              sx={{ fontWeight: "600", fontSize: { xs: "20px", md: "26px" } }}
            >
              7th CASSINI Hackathon: Environment & Green Transition
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Dive into some of the critical challenges faced by millions of
              people...
            </Typography>
          </Box>

          <Box className="flex flex-col gap-7 mb-12">
            <Typography
              sx={{ fontWeight: "600", fontSize: { xs: "20px", md: "23px" } }}
            >
              1. REGISTER
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Hit the orange button ⚡ LOG IN TO JOIN or ⚡ JOIN HACKATHON...
            </Typography>
          </Box>

          <Box className="flex flex-col gap-7 mb-12">
            <Typography
              sx={{ fontWeight: "600", fontSize: { xs: "20px", md: "23px" } }}
            >
              2. PRIZES
            </Typography>
            <Typography sx={{ color: "gray" }}>
              You are in luck! At the CASSINI Hackathons...
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}
