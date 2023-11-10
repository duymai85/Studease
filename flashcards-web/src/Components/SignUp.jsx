import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { userService } from '../services';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const checkUser = async (username) => {
    let flag = false;

    await userService
      .checkExistUser(username)
      .then((res) => {
        if (res.data.length) {
          flag = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return flag;
  };

  const onSubmit = async (data) => {
    const isExistUser = await checkUser(data.username);
    const dataUser = {
      id: uuidv4(),
      name: data.username || '',
      phone: '',
      ...data,
    };
    delete dataUser.confirmPassword;
    if (!isExistUser) {
      await userService
        .register(dataUser)
        .then((res) => {
          if (res.data) {
            toast.success('Register account successfully.');
            navigate('/login');
          } else {
            toast.error('Register account failed.');
          }
        })
        .catch((error) => {
          toast.error('Register account failed.');
        });
    } else {
      toast.error('Account already exists..');
    }
  };

  return (
    <div className='h-full flex items-center justify-center '>
      <div className='w-3/12 p-10 shadow-xl max-lg:w-9/12'>
        <h1 className='text-4xl mb-10'>Sign Up</h1>
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
              <h2>Email</h2>
              <input
                type='email'
                className='border-2 border-solid border-black w-full'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email?.message && (
                <span className='text-red-600 text-xs'>
                  {errors.email?.message}
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
            <div className='mt-4'>
              <h2>Re-enter Password</h2>
              <input
                type='password'
                className='border-2 border-solid border-black w-full'
                {...register('confirmPassword', {
                  required: 'Re-enter password is required',
                  validate: (val) => {
                    if (watch('password') !== val) {
                      return 'Your passwords do no match';
                    }
                  },
                })}
              />
              {errors.confirmPassword?.message && (
                <span className='text-red-600 text-xs'>
                  {errors.confirmPassword?.message}
                </span>
              )}
            </div>
            <button className='bg-blue-700 w-full text-white text-lg mt-4 py-1'>
              Sign Up
            </button>
          </form>
          <div className='flex justify-between items-center'>
            <a href='#' className='text-slate-300'>
              Forgot Password?
            </a>
            <Link to='/login' className='text-slate-300'>
              Log in
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
export default SignUp;
