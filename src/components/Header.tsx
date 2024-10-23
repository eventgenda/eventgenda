"use client";

import { ProfileAvatarURLs } from "@/enums/profile.enum";
import { useAuth } from "@/hooks/useAuth";
import { useAuthStore } from "@/stores/auth.store";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import StarsIcon from "@mui/icons-material/Stars";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const pages = ["Events", "Funding-Event", "Hackathons", "Blogs", "Rewards"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const { userProfile, logout: authLogout } = useAuth();
  const { user, action } = useAuthStore();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const navigateToSignIn = localStorage.getItem("navigateToSignIn");

    if (navigateToSignIn === "true") {
      // Remove the flag to avoid repeated navigation
      localStorage.removeItem("navigateToSignIn");
      // Navigate to the Sign In page
      router.push("/sign-in");
    }
  }, [router]);

  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out of your account!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, log out",
        cancelButtonText: "No, cancel",
      });

      if (result.isConfirmed) {
        action.logout(); // Perform your logout action
        // Set flag to handle the redirect after page refresh
        localStorage.setItem("navigateToSignIn", "true");
        // Refresh the browser
        window.location.reload();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleMenuItemClick = (setting: string) => {
    if (setting === "Logout") {
      handleLogout();
    } else if (setting === "Profile") {
      handleCloseUserMenu();
      router.push("/profile");
    } else {
      handleCloseUserMenu();
    }
  };

  return (
    <AppBar
      color="inherit"
      position="fixed"
      className="bg-gray-100 backdrop-blur-sm bg-opacity-70 border border-b-1 shadow-none"
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <Box
              component="img"
              src="/img/logo.png"
              alt="Eventgenda Logo"
              sx={{
                mr: 2,
                width: 180,
                height: "auto",
                marginLeft: "50px",
              }}
            />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "30px",
              marginLeft: "-100px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Link href={`/${page.toLowerCase()}`}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </Link>
              </Button>
            ))}
          </Box>

          {userProfile ? (
            <Box
              sx={{ flexGrow: 0, marginRight: "60px", border: "solid 1 gray" }}
            >
              <Tooltip title={userProfile?.data.userName}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Box sx={{ color: "black" }}>
                    <div className="flex">
                      <Box
                        component="img"
                        className="rounded-circle article-img w-11"
                        src={
                          userProfile?.data.profileImage ||
                          ProfileAvatarURLs.PROFILE
                        }
                        id="img"
                        alt="Profile Image"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                  </Box>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <div className="font-bold ml-4 mr-4">
                  {userProfile?.data.fullName}
                </div>

                <div className="p-2">
                  <div style={{ textTransform: "uppercase", display: "flex" }}>
                    <PersonIcon className="m-1" />
                    <div className="p-1 font-semibold">
                      {userProfile?.data.role}
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <MonetizationOnIcon className="m-1" />
                    <div className="p-1">
                      <span className="font-semibold">
                        {userProfile?.data.coin}
                      </span>
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
                  <hr className="mt-3 mb-3" />
                </div>
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleMenuItemClick(setting)}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        cursor: setting === "Logout" ? "pointer" : "default",
                      }}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, marginRight: "60px" }}>
              <Typography variant="h6" noWrap sx={{ mr: 2, color: "#4329a6" }}>
                <Typography
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/sign-in");
                  }}
                >
                  Sign In
                </Typography>
              </Typography>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
