"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Slider,
  OutlinedInput,
  Button,
} from "@mui/material";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const FundingEventPage: React.FC = () => {
  // Mock data
  const currentFunding = 20831;
  const totalFundingGoal = 100000;
  const numberOfDonors = 46;

  const [sliderValue, setSliderValue] = useState<number>(5);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const percentageAchieved = (currentFunding / totalFundingGoal) * 100;

  return (
    <main className="ml-20 mr-20" style={{ color: "#1b1042" }}>
      <Box className="flex flex-col justify-center items-center gap-4 py-5 bg-gray-100">
        <Typography
          sx={{ color: "white", padding: "5px", background: "#482bab" }}
          className="w-full font-semibold text-center"
        >
          {"Funding with".toUpperCase()}
        </Typography>
        <Box
          component="img"
          className="rounded-full"
          sx={{ width: "150px", height: "150px" }}
          src="https://media.istockphoto.com/id/1159749549/vector/summer-poster-event-template.jpg?s=612x612&w=0&k=20&c=IvaGQLYhGiqhzaRXBk_5h17fAY9xndeP7KpYuEvhcUw="
        />
        <Typography variant="h5" className="font-semibold">
          CASSINI Hackathons Environment and Green Transition
        </Typography>

        <Box
          className="flex flex-rows justify-around mt-2 "
          sx={{ width: "90%" }}
        >
          <Typography>
            {currentFunding}
            <span className="font-semibold" style={{ color: "#482bab" }}>
              ฿
            </span>{" "}
            of {totalFundingGoal}
            <span className="font-semibold" style={{ color: "#482bab" }}>
              ฿
            </span>
          </Typography>
          <Typography>
            Total Donors:{" "}
            <span className="font-semibold" style={{ color: "#482bab" }}>
              {numberOfDonors}
            </span>
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={percentageAchieved}
          className="rounded-full mb-2 "
          sx={{
            width: "60%",
            backgroundColor: "#9b9b9c",
            height: "12px",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#8451f1",
              height: "100%",
            },
          }}
        />
      </Box>

      <Box className="flex flex-col justify-center items-center gap-4 mt-3">
        <FormControl sx={{ m: 1, width: "40%" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">฿</InputAdornment>}
            placeholder="THB"
            label="Amount"
          />
        </FormControl>

        <Box sx={{ width: "40%" }}>
          <Typography id="input-slider" gutterBottom>
            Tip our service
          </Typography>
          <Box className="flex">
            <Slider
              size="small"
              value={sliderValue}
              onChange={handleSliderChange}
              aria-label="Small"
              valueLabelDisplay="auto"
              sx={{
                "& .MuiSlider-track": {
                  backgroundColor: "#8451f1",
                },
                "& .MuiSlider-thumb": {
                  backgroundColor: "#8451f1",
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: "inherit",
                  },
                },
                "& .MuiSlider-thumb.Mui-active": {
                  backgroundColor: "#9b9b9c",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#d0d0d0",
                },
              }}
            />
            <Input
              sx={{ width: "10%", ml: 1 }}
              value={`${sliderValue}%`}
              margin="dense"
              inputProps={{
                "aria-label": "Tip percentage",
              }}
            />
          </Box>

          <Box className="mt-4">
            <Typography variant="h6">Your Donation</Typography>
            <Box className="flex justify-between">
              <Typography>Your Outcome</Typography>
              <Typography>xx {"฿"}</Typography>
            </Box>

            <Box className="flex justify-between">
              <Typography>Tip to Eventgenda</Typography>
              <Typography>xx {"฿"}</Typography>
            </Box>

            <Box className="flex justify-center mt-3 gap-2">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4629a7",
                  "&:hover": {
                    backgroundColor: "#4629a7",
                  },
                }}
              >
                <MonetizationOnIcon className="p-1" />
                Pay with Coins
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#084370",
                  "&:hover": {
                    backgroundColor: "#084370",
                  },
                }}
              >
                <QrCode2Icon className="p-1" />
                Pay Via Promptpay
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default FundingEventPage;
