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
import { usePathname } from "next/navigation";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Link from "next/link";

const mockData = [
  {
    event: "Login",
    user: "John Doe",
    createdDate: new Date("2024-01-01").toLocaleDateString(),
    updatedDate: new Date("2024-01-02").toLocaleDateString(),
  },
  {
    event: "File Upload",
    user: "Jane Smith",
    createdDate: new Date("2024-02-10").toLocaleDateString(),
    updatedDate: new Date("2024-02-11").toLocaleDateString(),
  },
  {
    event: "Profile Update",
    user: "Alice Johnson",
    createdDate: new Date("2024-03-15").toLocaleDateString(),
    updatedDate: new Date("2024-03-16").toLocaleDateString(),
  },
  {
    event: "Password Reset",
    user: "Bob Lee",
    createdDate: new Date("2024-04-20").toLocaleDateString(),
    updatedDate: new Date("2024-04-21").toLocaleDateString(),
  },
];

export default function ProfilePage() {
  const { userProfile } = useAuth();
  const pathname = usePathname();
  const isOverviewPage = pathname === "/profile";
  const isHistoryPage = pathname === "/histories";

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
                <Link href="/profile">Overview</Link>
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
              <HistoryIcon
                className="history-icon"
                sx={{ color: isHistoryPage ? "#4329a6" : "#c7c8d1" }}
              />
              <Typography
                className="ml-2 history-text"
                sx={{
                  fontWeight: isHistoryPage ? 600 : "normal",
                  color: isHistoryPage ? "#4329a6" : "",
                }}
              >
                History
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
              {userProfile?.data.fullName.split(" ").map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < userProfile?.data.fullName.split(" ").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
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
          <Grid item xs={9}>
            <TableContainer
              component={Paper}
              className="ml-4 "
              style={{ width: "100%" }}
            >
              <Table style={{ width: "100%" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Event</strong>
                    </TableCell>
                    <TableCell>
                      <strong>User</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Created Date</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Updated Date</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.event}</TableCell>
                      <TableCell>{row.user}</TableCell>
                      <TableCell>{row.createdDate}</TableCell>
                      <TableCell>{row.updatedDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        <Box sx={{ width: "full-content" }}>
          <hr className="border-t-2 mt-5 mb-32" />
        </Box>
      </main>
    </>
  );
}
