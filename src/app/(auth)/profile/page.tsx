"use client";
import { ProfileAvatarURLs } from "@/enums/profile.enum";
import { useAuth } from "@/hooks/useAuth";
import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import StarsIcon from "@mui/icons-material/Stars";
import SubjectIcon from "@mui/icons-material/Subject";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ProfilePage() {
  const { userProfile } = useAuth();
  const pathname = usePathname();
  const isOverviewPage = pathname === "/profile";

  return (
    <>
      <main className="ml-20 mr-20" style={{ color: "#1b1042" }}>
        <Box
          className="p-5"
          sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
        >
          <Box
            component={"img"}
            width={18}
            height={"fit-content"}
            src="https://seeklogo.com/images/T/twitter-x-logo-577BCAE525-seeklogo.com.png"
          />
          <Box
            component={"img"}
            width={18}
            height={"fit-content"}
            src="https://www.svgrepo.com/show/341809/facebook-f.svg"
          />
          <Box
            component={"img"}
            width={18}
            height={"fit-content"}
            src="https://seeklogo.com/images/L/linkedin-icon-logo-32AA14A009-seeklogo.com.png"
          />
        </Box>

        <Box sx={{ position: "relative", width: "100%" }}>
          <Box
            component={"img"}
            className="w-full"
            src="https://taikai.network/static/images/default-cover.svg"
            sx={{
              objectFit: "cover",
              height: "250px",
              width: "100%",
            }}
          />
          <Box
            component={"img"}
            src={userProfile?.data.profileImage || ProfileAvatarURLs.PROFILE}
            className="rounded-full border-4 border-red-[#e4e4ec]"
            sx={{
              width: "150px",
              position: "absolute",
              bottom: "-75px",
              left: "6.6%",
              transform: "translateX(-50%)",
              zIndex: "2",
            }}
          />
        </Box>

        <Box sx={{ marginLeft: "180px", marginBottom: "50px" }}>
          <Box className="mt-6 flex">
            <Box
              className="flex mr-8"
              sx={{
                "&:hover": {
                  "& .overview-icon": {
                    color: "#4329a6",
                  },
                  "& .overview-text": {
                    color: "#4329a6",
                  },
                },
              }}
            >
              <SubjectIcon
                className="overview-icon"
                sx={{ color: isOverviewPage ? "#4329a6" : "#c7c8d1" }}
              />
              <Typography
                className="ml-2 overview-text"
                sx={{
                  fontWeight: isOverviewPage ? 600 : "normal",
                  color: isOverviewPage ? "#4329a6" : "",
                }}
              >
                Overview
              </Typography>
            </Box>

            <Box
              className="flex font-normal"
              sx={{
                "&:hover": {
                  "& .history-icon": { color: "#4329a6" },
                  "& .history-text": {
                    color: "#4329a6",
                  },
                },
              }}
            >
              <HistoryIcon className="history-icon" sx={{ color: "#c7c8d1" }} />
              <Typography
                className="ml-2 history-text"
                sx={{ fontWeight: "400" }}
              >
                <Link href="/histories">History</Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={3} className="p-8">
          <Grid item xs={3} className="flex flex-col gap-1">
            <Typography
              variant="h4"
              className="font-medium"
              sx={{ color: "#1b1042" }}
            >
              {userProfile?.data.fullName}
              <a
                href="/edit-profile"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  border: "2px solid #9ca3af",
                  background: "none",
                  textDecoration: "none",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
                onClick={() => {
                  /* Handle link click */
                }}
              >
                <EditIcon
                  style={{ fontSize: "16px" }}
                  className="text-gray-400"
                />
              </a>
            </Typography>

            <Box className="flex flex-col gap-1">
              <Box>{userProfile?.data.email}</Box>
              <Box className="text-gray-400">{userProfile?.data.userName}</Box>
            </Box>

            <Box sx={{ width: "280px" }}>
              <hr className="border-t-2 mt-8 mb-3" />
            </Box>

            <div style={{ textTransform: "uppercase", display: "flex" }}>
              <PersonIcon className="m-1" />
              <div className="p-1 font-semibold">{userProfile?.data.role}</div>
            </div>

            <div style={{ display: "flex" }}>
              <MonetizationOnIcon className="m-1" />
              <div className="p-1">
                <span className="font-semibold">{userProfile?.data.coin}</span>
                <span> Coins</span>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <StarsIcon className="m-1" />
              <div className="p-1">
                <span className="font-semibold">
                  {userProfile?.data.reward}
                </span>
                <span> Rewards</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Box className="flex flex-col gap-7 mb-12">
              <Typography className="" sx={{ fontWeight: "600" }}>
                Biography
                <a
                  href="/edit-profile"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    border: "2px solid #9ca3af",
                    background: "none",
                    textDecoration: "none",
                    cursor: "pointer",
                    padding: "0",
                    marginLeft: "5px",
                  }}
                  onClick={() => {
                    /* Handle link click */
                  }}
                >
                  <EditIcon
                    style={{ fontSize: "16px" }}
                    className="text-gray-400"
                  />
                </a>
              </Typography>
              <Typography className="text-gray-400">
                For now you might just find this users biography on Wikipedia.
              </Typography>
            </Box>
            <Box className="flex flex-col gap-7 mb-12">
              <Typography className="" sx={{ fontWeight: "600" }}>
                Projects
              </Typography>
              <Typography className="text-gray-400">
                This user is working hard to get his first project on TAIKAI.
              </Typography>
            </Box>
            <Box className="flex flex-col gap-7 mb-12">
              <Typography className="" sx={{ fontWeight: "600" }}>
                Hackathons
              </Typography>
              <Typography className="text-gray-400">
                This user may need to be challenged to participate in a
                hackathon.
              </Typography>
            </Box>

            <Box className="flex flex-col gap-7 ">
              <Typography className="" sx={{ fontWeight: "600" }}>
                Education
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    border: "2px solid #9ca3af",
                    background: "none",
                    textDecoration: "none",
                    cursor: "pointer",
                    padding: "0",
                    marginLeft: "5px",
                  }}
                  onClick={() => {
                    /* Handle link click */
                  }}
                >
                  <EditIcon
                    style={{ fontSize: "16px" }}
                    className="text-gray-400"
                  />
                </a>
              </Typography>
              <Typography className="text-gray-400">
                This user dont have any academic experience 🎓
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ width: "full-content" }}>
          <hr className="border-t-2 mt-5 mb-32" />
        </Box>
      </main>
    </>
  );
}
