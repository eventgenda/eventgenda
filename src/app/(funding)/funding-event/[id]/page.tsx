'use client';

import RankingTable from '@/components/Table/RankingTable';
import { useAuth } from '@/hooks/useAuth';
import { useEvent } from '@/hooks/useEvent';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  LinearProgress,
  OutlinedInput,
  Slider,
  Typography,
} from '@mui/material';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';

const FundingEventPage: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const { id } = useParams();
  const { event, donateEventMutation, fundingEventMutation } = useEvent(id);
  const { refetch, userProfile } = useAuth();

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleDonateEvent = async (id: string) => {
    try {
      if (
        userProfile?.data.role === 'organizer' ||
        userProfile?.data.role === 'admin'
      ) {
        await fundingEventMutation.mutateAsync({
          id,
          fundingEventDto: { amount: amount + (amount * sliderValue) / 100 },
        });
      } else {
        await donateEventMutation.mutateAsync({
          id,
          fundingEventDto: { amount: amount + (amount * sliderValue) / 100 },
        });
      }
      refetch();
      setAmount(0);
      setSliderValue(0);

      await Swal.fire({
        title: 'Success',
        text: 'Your donation has been successfully made!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
      });
    } catch (error) {
      await Swal.fire({
        title: 'Error',
        text: error as string,
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
      });
    }
  };

  return (
    <main className='ml-20 mr-20' style={{ color: '#1b1042' }}>
      <Box className='flex flex-col justify-center items-center gap-4 py-5 bg-gray-100'>
        <Typography
          sx={{ color: 'white', padding: '5px', background: '#482bab' }}
          className='w-full font-semibold text-center'
        >
          {event?.categories.map((category) => category.name)}
        </Typography>
        <Box
          component='img'
          className='rounded-full'
          sx={{ width: '150px', height: '150px' }}
          src={event?.thumbnail}
        />
        <Typography variant='h5' className='font-semibold'>
          {event?.title}
        </Typography>

        <Box
          className='flex flex-rows justify-around mt-2 '
          sx={{ width: '90%' }}
        >
          <Typography>
            {event?.amountRaised}
            <span className='font-semibold' style={{ color: '#482bab' }}>
              ฿
            </span>{' '}
            of {event?.amountRequired}
            <span className='font-semibold' style={{ color: '#482bab' }}>
              ฿
            </span>
          </Typography>
          <Typography>
            Total Donators:{' '}
            <span className='font-semibold' style={{ color: '#482bab' }}>
              {event?.sponsors && event.sponsors.length}
            </span>
          </Typography>
        </Box>

        <LinearProgress
          variant='determinate'
          value={
            ((event?.amountRaised ?? 0) / (event?.amountRequired ?? 1)) * 100 >
            100
              ? 100
              : ((event?.amountRaised ?? 0) / (event?.amountRequired ?? 1)) *
                100
          }
          className='rounded-full mb-2 '
          sx={{
            width: '60%',
            backgroundColor: '#9b9b9c',
            height: '12px',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#8451f1',
              height: '100%',
            },
          }}
        />
      </Box>

      <Box className='flex flex-col justify-center items-center gap-4 mt-3'>
        <FormControl sx={{ m: 1, width: '40%' }}>
          <InputLabel htmlFor='outlined-adornment-amount'>Amount</InputLabel>
          <OutlinedInput
            id='outlined-adornment-amount'
            startAdornment={<InputAdornment position='start'>฿</InputAdornment>}
            placeholder='THB'
            label='Amount'
            type='number'
            value={amount}
            onChange={(e) => {
              const value = Math.max(0, Number(e.target.value));
              setAmount(value);
            }}
            onKeyPress={(e) => {
              if (e.key === '-') {
                e.preventDefault();
              }
            }}
          />
        </FormControl>

        <Box sx={{ width: '40%' }}>
          <Typography id='input-slider' gutterBottom>
            Tip our service
          </Typography>
          <Box className='flex'>
            <Slider
              size='small'
              value={sliderValue}
              onChange={handleSliderChange}
              aria-label='Small'
              valueLabelDisplay='auto'
              sx={{
                '& .MuiSlider-track': {
                  backgroundColor: '#8451f1',
                },
                '& .MuiSlider-thumb': {
                  backgroundColor: '#8451f1',
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: 'inherit',
                  },
                },
                '& .MuiSlider-thumb.Mui-active': {
                  backgroundColor: '#9b9b9c',
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#d0d0d0',
                },
              }}
            />
            <Input
              sx={{ width: '10%', ml: 1 }}
              value={`${sliderValue}%`}
              margin='dense'
              inputProps={{
                'aria-label': 'Tip percentage',
              }}
            />
          </Box>
        </Box>

        <Box className='mt-4'>
          <Typography variant='h6'>Your Donation</Typography>
          <Box className='flex justify-between'>
            <Typography>Your Outcome</Typography>
            <Typography>{amount + (amount * sliderValue) / 100} ฿</Typography>
          </Box>

          <Box className='flex justify-center mt-3 gap-2'>
            <Button
              variant='outlined'
              sx={{
                color: '#4629a7',
                borderColor: '#4629a7',
                '&:hover': {
                  backgroundColor: '#4629a7',
                  color: 'white',
                },
              }}
              onClick={() => handleDonateEvent(id as string)}
            >
              <MonetizationOnIcon className='p-1' />
              Pay with Coins
            </Button>
            <Button
              variant='outlined'
              sx={{
                color: '#084370',
                borderColor: '#084370',
                '&:hover': {
                  backgroundColor: '#084370',
                  color: 'white',
                },
              }}
            >
              <QrCode2Icon className='p-1' />
              Pay Via Promptpay
            </Button>
          </Box>
        </Box>
        <Box>
          {event?.sponsors && <RankingTable sponsors={event?.sponsors} />}
        </Box>
      </Box>
    </main>
  );
};

export default FundingEventPage;
