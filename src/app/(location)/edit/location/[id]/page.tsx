"use client";

import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import { Button, IconButton, MenuItem, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function EditLocationPage() {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format
    return today;
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const [previewProfile, setPreviewProfile] = useState<string>("");

  const categories = [
    {
      value: "Category 1",
      label: "Category 1",
    },
    {
      value: "Category 2",
      label: "Category 2",
    },
    {
      value: "Category 3",
      label: "Category 3",
    },
    {
      value: "Category 4",
      label: "Category 4",
    },
  ];
  const uploadImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (type === "picture-profile") {
        const objectUrl = URL.createObjectURL(file);
        setPreviewProfile(objectUrl);
      }
    }
  };
  return (
    <div className="w-full p-12 h-screen">
      <div className="flex flex-row h-full drop-shadow-lg border rounded-xl">
        <div className="w-full h-full basis-5/12 bg-gray-100 flex items-end justify-center  pb-6">
          {previewProfile ? (
            <div className="relative w-full h-full">
              <Image
                src={previewProfile}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
                width={3000}
                height={3060}
              />
              <div className="absolute top-2 right-2">
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => setPreviewProfile("")}
                >
                  <DeleteOutlineRoundedIcon
                    sx={{
                      color: "#fff",
                      backgroundColor: "#4f46e5",
                      borderRadius: "50%",
                      padding: "5px",
                      fontSize: "32px",
                    }}
                  />
                </IconButton>
              </div>
            </div>
          ) : (
            <label className="w-64 flex justify-center items-center px-4 py-6 bg-indigo-600 text-blue rounded-lg shadow-lg tracking-wide cursor-pointer mb-6">
              <CameraAltRoundedIcon className="text-white" />
              <span className="text-white text-base leading-normal">
                อัปโหลดรูปภาพ
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => uploadImage(e, "picture-profile")}
              />
            </label>
          )}
        </div>
        <div className="flex flex-col w-7/12 break-words p-5 py-0 flex-grow-1 mb-4">
          <div className="flex justify-center items-center mb-3 text-left text-xl p-3 mt-5 rounded-xl">
            <span>Edit Location</span>
          </div>
          <div className="overflow-x-hidden  border my-3 text-left p-3 rounded-xl flex flex-col">
            <div className="flex flex-row justify-center mt-2">
              <DescriptionRoundedIcon sx={{ color: "#4b5563", marginX: 1 }} />
              <label>Description</label>
            </div>
            <TextField fullWidth label="Location Name" className="mt-6 mb-2 " />
            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <TextField
                  label="Prices"
                  className="mt-6 mb-2 "
                  fullWidth
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </div>

              <TextField
                fullWidth
                label="Location Address"
                className="mt-6 mb-2"
                multiline
                maxRows={4}
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="mt-6 mb-2">Location Created Date</label>
                <TextField
                  fullWidth
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="mt-6 mb-2 mx-2">Updated Date</label>
                <TextField
                  fullWidth
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2 my-5">
            <Button variant="outlined" startIcon={<SaveAsRoundedIcon />}>
              Update Location
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
