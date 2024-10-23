"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { ProfileAvatarURLs } from "@/enums/profile.enum";
import { useAuth } from "@/hooks/useAuth";
import { useState, ChangeEvent } from "react";
import EditIcon from "@mui/icons-material/Edit"; // Material UI Edit Icon
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const { userProfile } = useAuth();
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newProfileImage = e.target?.result as string;
        setPreviewImage(newProfileImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log("Updated");
  };

  const handleCancle = () => {
    router.push("/profile");
  };

  return (
    <>
      <main
        className="ml-20 mr-20 overflow-x-hidden"
        style={{ color: "#1b1042" }}
      >
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
          <Typography variant="h4" className="ml-44 w-full p-2">
            Edit User Details
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "150px",
              height: "150px",
              marginBottom: "-75px",
              left: "6.6%",
              transform: "translateX(-50%) translateY(-90%)",

              cursor: "pointer",
            }}
            onClick={() => document.getElementById("fileUpload")?.click()} // Trigger the file input on click
          >
            {/* Profile Image */}
            <Box
              component={"img"}
              src={
                previewImage ||
                userProfile?.data.profileImage ||
                ProfileAvatarURLs.PROFILE
              }
              className="rounded-full border-4 border-red-[#e4e4ec]"
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: "1",
                objectFit: "cover",
              }}
            />

            {/* Overlay on hover */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent gray overlay
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                zIndex: "2",
                transition: "opacity 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  opacity: 1, // Show overlay on hover
                },
              }}
            >
              <EditIcon sx={{ color: "#fff", fontSize: 30 }} />{" "}
              {/* Edit icon */}
            </Box>
          </Box>

          {/* Hidden File Input for Uploading the New Image */}
          <input
            id="fileUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Box>

        <Grid container spacing={2} sx={{ marginTop: "-120px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              defaultValue={userProfile?.data.fullName}
              InputLabelProps={{
                shrink: true,
                style: { color: "#4329a6" }, // Label color
              }}
              InputProps={{
                style: { color: "black" }, // Input text color
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#4329a6", // Border color when not focused
                  },
                  "&:hover fieldset": {
                    borderColor: "#4329a6", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#4329a6", // Border color when focused
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Username"
              defaultValue={userProfile?.data.userName}
              InputLabelProps={{
                shrink: true,
                style: { color: "#4329a6" }, // Label color
              }}
              InputProps={{
                style: { color: "black" }, // Input text color
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#4329a6", // Border color when not focused
                  },
                  "&:hover fieldset": {
                    borderColor: "#4329a6", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#4329a6", // Border color when focused
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              defaultValue={userProfile?.data.email}
              InputLabelProps={{
                shrink: true,
                style: { color: "#4329a6" }, // Label color
              }}
              InputProps={{
                style: { color: "black" }, // Input text color
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#4329a6", // Border color when not focused
                  },
                  "&:hover fieldset": {
                    borderColor: "#4329a6", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#4329a6", // Border color when focused
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="filled-textarea"
              fullWidth
              multiline
              rows={4}
              label="Biography"
              placeholder="For now you might just find this users biography on Wikipedia."
              InputLabelProps={{
                shrink: true,
                style: { color: "#4329a6" }, // Label color
              }}
              InputProps={{
                style: { color: "black" }, // Input text color
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#4329a6", // Border color when not focused
                  },
                  "&:hover fieldset": {
                    borderColor: "#4329a6", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#4329a6", // Border color when focused
                  },
                },
              }}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            textAlign: "center",
            marginTop: 4,
            marginBottom: 4,
            gap: "10px",
          }}
        >
          <Button
            variant="contained"
            onClick={handleCancle}
            className="bg-white border-solid text-gray-500 border-gray-500 hover:bg-gray-100 hover:border-gray-600"
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
            className="bg-[#4329a6] hover:bg-[#36238f]"
          >
            Save
          </Button>
        </Box>
      </main>
    </>
  );
}
