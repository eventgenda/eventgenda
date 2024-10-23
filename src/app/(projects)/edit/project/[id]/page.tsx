"use client";

import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import { Button, TextField } from "@mui/material";

export default function EditProjectPage() {
  return (
    <div className="w-full p-12">
      <div className="flex flex-row h-full drop-shadow-lg border rounded-xl">
        <div className="flex flex-col w-full break-words p-5 py-0 flex-grow-1 ">
          <div className="flex justify-center items-center mb-3 text-left text-xl p-3 mt-5 rounded-xl">
            <span>Edit Project</span>
          </div>
          <div className="flex flex-row justify-center mt-2">
            <DescriptionRoundedIcon sx={{ color: "#4b5563", marginX: 1 }} />
            <label>Description</label>
          </div>
          <TextField
            fullWidth
            label="Project Name"
            className="mt-6 mb-2 mx-2"
          />
          <TextField
            fullWidth
            label="Project Description"
            className="mt-6 mb-2 mx-2"
          />
          <TextField
            fullWidth
            label="Project Link"
            className="mt-6 mb-2 mx-2"
          />
          <TextField
            fullWidth
            label="Project Demo"
            className="mt-6 mb-2 mx-2"
          />

          <div className="flex justify-end mt-2 my-5">
            <Button variant="outlined" startIcon={<SaveAsRoundedIcon />}>
              Edit Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
67;
