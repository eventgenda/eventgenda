'use client';

import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { SetStateAction, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

interface EventProps {
  target: {
    value: SetStateAction<string>;
  };
}

export default function SignUpPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  const { registerMutation } = useAuth();

  const handleRegister = async () => {
    try {
      await registerMutation.mutateAsync({
        fullName,
        userName,
        email,
        password,
        age,
      });
      const result = await Swal.fire({
        title: 'Success',
        text: 'Your account has been successfully registered!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
      });

      if (result.isConfirmed) {
        router.push("/");
      }
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
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-5xl'>
        <div
          className='hidden bg-cover lg:block lg:w-1/2'
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=1380&t=st=1725283334~exp=1725283934~hmac=0ff5ac73c76db9105062cc90a16fdae3c42909024a1ad7efe7e71b7c94d7d254')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <Image
              className='w-auto h-7 sm:h-8'
              src='https://merakiui.com/images/logo.svg'
              alt=''
              width={1000}
              height={1000}
            />
          </div>

          <p className='mt-3 text-xl text-center text-gray-600'>
            Welcome back!
          </p>

          <div className='mt-4 space-x-4 flex'>
            <FormControl sx={{ width: '50%' }} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>
                Fullname
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                type='text'
                label='Fullname'
                value={fullName}
                onChange={(e: EventProps) => setFullName(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ width: '50%' }} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>
                Username
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                type='text'
                label='Username'
                value={userName}
                onChange={(e: EventProps) => setUserName(e.target.value)}
              />
            </FormControl>
          </div>

          <div className='mt-4'>
            <FormControl sx={{ width: '100%' }} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>Age</InputLabel>
              <OutlinedInput
                type='number'
                label='Age'
                value={age}
                onChange={(e: EventProps) => setAge(Number(e.target.value))}
                inputProps={{ min: 0 }}
              />
            </FormControl>
          </div>

          <div className='mt-4'>
            <FormControl sx={{ width: '100%' }} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>
                Email
              </InputLabel>
              <OutlinedInput
                type='email'
                label='Email'
                value={email}
                onChange={(e: EventProps) => setEmail(e.target.value)}
              />
            </FormControl>
          </div>

          <div className='mt-4'>
            <FormControl sx={{ width: '100%' }} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>
                Password
              </InputLabel>
              <OutlinedInput
                type='password'
                label='Password'
                value={password}
                onChange={(e: EventProps) => setPassword(e.target.value)}
              />
            </FormControl>
          </div>

          <div className='mt-6'>
            <button
              onClick={() => {
                handleRegister();
              }}
              className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
            >
              Sign In
            </button>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b md:w-1/4'></span>

            <Link
              href='/sign-in'
              className='text-xs text-gray-500 uppercase hover:underline'
            >
              or sign in
            </Link>

            <span className='w-1/5 border-b md:w-1/4'></span>
          </div>
        </div>
      </div>
    </Box>
  );
}
