import './Signup.css';
import Logo from '../utils/Logo/Logo';
import InputField from '../utils/Input/Input';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubmitButton from "../utils/SubmitButton/SubmitButton";
import axios from 'axios';
import { useState } from 'react';


export const Signup = ({
    ...props
}) => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmpassword: ""
    })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.firstname === "" || user.lastname === "" || user.username === "" || user.email === "" || user.phoneNumber === "" || user.password === "" || user.confirm_password === "") {
            toast.error("All fields are required", {
                position: "top-center",
            });
        }
        try {
            const res = await axios.post('http://localhost:4000/users/users', {
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber,
                password: user.password,
                confirm_password: user.confirm_password
            });
            console.log("RESPONSE", res);
            toast.success("User created successfully", {
                position: "top-center",
            });


        } catch (error) {
            toast.error("All fields are required", {
                position: "top-center",
            });
        }

    }

    return (

        <div className="signup">
            <div className="signup-card">
                    <div className="logo-heading">
                        <center>  <Logo /> </center>
                       
                    </div>
                    <button href='/' className=''>
                        <IoIosArrowRoundBack /> Go back
                    </button>

                    <div className=" frame9">
                        <ToastContainer />
                        <span>Create an account</span>
                    </div>

                    <div className="frame10">
                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <InputField 
                                name="firstname" 
                                type="text" 
                                class="input" 
                                label="firstname"
                                value={user.firstname} change={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" 
                                    placeholder="Enter your first name" />
                            </div>
                            <div className="">
                                <InputField 
                                name="lastname" 
                                type="text" 
                                class="input" 
                                label="lastname"
                                    value={user.lastname} 
                                    change={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" 
                                    placeholder="Enter your last name" />
                            </div>
                            <div className="">
                                <InputField 
                                name="username" 
                                type="text" 
                                class="input" 
                                label="username"
                                    value={user.username} 
                                    change={handleChange} 
                                    placeholder="Enter your user name" />
                            </div>
                            <div className="">
                                <InputField 
                                name="email" 
                                type="email" 
                                class="input" 
                                label="Email"
                                    value={user.email} 
                                    change={handleChange}
                                    placeholder="Enter your email" />
                            </div>
                            <div className="">
                                <InputField 
                                name="phoneNumber" 
                                type="text" 
                                class="input" 
                                label="Phone Number"
                                    value={user.phoneNumber} 
                                    change={handleChange}
                                    placeholder="Enter your Phone number" />
                            </div>
                            <div className="">
                                <InputField 
                                name="password" 
                                type="password" 
                                class="input" 
                                label="Password"
                                    value={user.password}
                                     change={handleChange}
                                    placeholder="Enter your password" />
                            </div>
                            <div className="">
                                <InputField 
                                name="confirm_password" 
                                type="password" 
                                class="input" 
                                label="Confirm Password"
                                    value={user.confirm_password} 
                                    change={handleChange}
                                    placeholder="Confirm password" />
                            </div>

                            <div className="">
                                <SubmitButton text="Login" onClick={handleSubmit} />
                            </div>
                                {/* <button type='submit'>Signup</button> */}

                        </form>
                        <div className='sign_container'>
                            Already have an account?<a href='/' className='sign_in'> Sign in</a>
                        </div>
                    </div>


                </div>
        </div>

    )
}