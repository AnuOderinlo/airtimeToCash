import './Signup.css';
import Logo from '../Utils/Logo/Logo';
import InputField from '../Utils/Input/Input';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubmitButton from "../Utils/SubmitButton/SubmitButton";
import axios from 'axios';
import { useState } from 'react';
import { Button } from '../Utils/Button/Button';
import 'bootstrap/dist/css/bootstrap.css';


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
                position: "top-right",
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
            // console.log("RESPONSE", res);
            console.log("TOKEN", res.data.token);
            toast.success("User created successfully", {
                position: "top-right",
            });


        } catch (error) {
            toast.error(error.response.data.message, {
                position: "top-right",
            });
        }

    }

    return (

        <div className="login container-fluid">
            <div className="row login-card mt-3">
                <div className=" col-xs-12 col-md-8 login-card-padding">
                    <div className="login-box">
                        <div className="login-heading">
                            <Logo />
                        </div>
                        <a href="/" className='col-md-6 rounded-button btn rounded-pill'>   
                            <IoIosArrowRoundBack /> Go back
                        </a>

                        <div className=" frame9">
                            <ToastContainer />
                            <span>Create an account</span>
                        </div>
                        <form onSubmit={handleSubmit} className="update-form" >
                            <div className="">
                                <InputField  childDefaultValue={user.firstname} handleChange={handleChange} name="firstname" type="text" childClass="input" label="Firstname" placeholder="Enter your first name" />
                            </div>
                            <div className="">
                                <InputField childDefaultValue={user.lastname} handleChange={handleChange} name="lastname" type="text" childClass="input" label="Lastname" placeholder="Enter your last name" />
                            </div>
                            <div className="">
                                <InputField childDefaultValue={user.username} handleChange={handleChange} name="username" type="text" childClass="input" label="Username" placeholder="Enter your username" />
                            </div>
                            <div className="">
                                <InputField childDefaultValue={user.email} handleChange={handleChange} name="email" type="email" childClass="input" label="Email" placeholder="Enter your email" />
                            </div>
                            <div className="">
                                <InputField childDefaultValue={user.phoneNumber} handleChange={handleChange} name="phoneNumber" type="text" childClass="input" label="Phone number" placeholder="Enter your phone number" />
                            </div>
                            <div className="">
                                 <InputField name="password" type="password" childClass="input" label="Password" childDefaultValue={user.password} handleChange={handleChange} placeholder="Enter your password" />
                            </div>
                            <div className="">
                                <InputField name="confirm_password" type="password" childClass="input" label="Confirm Password" childDefaultValue={user.confirmpassword} handleChange={handleChange} placeholder="Confirm password" />
                            </div>
                            <div className="">
                                <Button type={"submit"} text="Signup" />
                            </div>
                        </form>
                        <div className='sign_container'>
                             Already have an account?<a href='/login' className='sign_in'> Sign in</a>
                         </div>
                    </div>
                </div>
            </div>
        </div>

    )
}