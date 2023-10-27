import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="h-full flex items-center justify-center ">
            <div className="w-3/12 p-10 shadow-xl">
                <h1 className="text-4xl mb-10">Login</h1>
                <div className="px-4">
                    <div className="">
                        <h2>Username</h2>
                        <input type="text" className="border-2 border-solid border-black w-full"/>
                    </div>
                    <div className="mt-4">
                        <h2>Password</h2>
                        <input type="password" className="border-2 border-solid border-black w-full"/>
                    </div>
                    <div className='bg-blue-700 w-full text-center mt-4 py-1'>
                    <Link to="/home" className=" text-white text-lg ">
                        Sign In
                        </Link>
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-slate-300">Forgot Password?</a>
                        <Link to="/signup" className="text-slate-300">Sign up</Link>
                    </div>

                    <div className="mt-10 text-center">
                        or sign in with
                    </div>
                    <div className="w-full flex justify-center mt-4">
                        <div className="justify-around flex items-center w-1/2">
                            <GoogleIcon/>
                            <GitHubIcon/>
                            <FacebookIcon/>
                            <MoreHorizIcon/>
                        </div>
                    </div>

                </div>
            </div>
        </div>   
    )
}
export default Login;