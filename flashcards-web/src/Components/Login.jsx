import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { userService } from '../services';
import { KEY_LS } from '../utils/constant';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await userService
      .login(data)
      .then((res) => {
        if (res.data.length) {
          toast.success('Login successfully.');
          localStorage.setItem(KEY_LS.USER_INFO, JSON.stringify(res.data[0]));
          navigate('/');
        } else {
          toast.error('Account does not exist.');
        }
      })
      .catch((error) => {
        toast.error('Login failed.');
      });
  };

  return (
    <div className='h-full flex items-center justify-center '>
      <div className='w-3/12 p-10 shadow-xl max-lg:w-9/12'>
        <h1 className='text-4xl mb-10'>Login</h1>
        <div className='px-4'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=''>
              <h2>Username</h2>
              <input
                type='text'
                className='border-2 border-solid border-black w-full'
                {...register('username', { required: true })}
              />
              {errors.username && (
                <span className='text-red-600 text-xs'>
                  Username is required
                </span>
              )}
            </div>
            <div className='mt-4'>
              <h2>Password</h2>
              <input
                type='password'
                className='border-2 border-solid border-black w-full'
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className='text-red-600 text-xs'>
                  Password is required
                </span>
              )}
            </div>
            <div className='bg-blue-700 w-full text-center mt-4 py-1'>
              <button type='submit' className='text-white text-lg'>
                Sign In
              </button>
            </div>
          </form>
          <div className='flex justify-between items-center'>
            <a href='#' className='text-slate-300'>
              Forgot Password?
            </a>
            <Link to='/signup' className='text-slate-300'>
              Sign up
            </Link>
          </div>

          <div className='mt-10 text-center'>or sign in with</div>
          <div className='w-full flex justify-center mt-4'>
            <div className='justify-around flex items-center w-1/2'>
              <GoogleIcon />
              <GitHubIcon />
              <FacebookIcon />
              <MoreHorizIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
