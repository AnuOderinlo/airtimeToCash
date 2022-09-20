
import './Update.css';
import { useEffect, useState } from 'react';
import Logo from '../Utils/Logo/Logo';
import InputField from '../Utils/Input/Input';
import { Button } from '../Utils/Button/Button';
import FileUpload from '../Utils/FileUpload/FileUpload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBarDashboard } from '../NavBarDashboard/NavBarDashboard';
import React from 'react';
import { mainAxios } from '../Axios/Axios';


import Modal from 'react-modal';
import '../Utils/Modal/ModalUtil.css'
import { ModalUtil } from '../Utils/Modal/ModalUtil';
import 'bootstrap/dist/css/bootstrap.css';

export const Update = () => {

    const url = process.env.REACT_APP_CLOUDINARY_URL;
    const preset = process.env.REACT_APP_UPLOAD_PRESET;

    const fakeDetails = {
        firstname: "Chidi",
        lastname: "Okeke",
        phoneNumber: "0803677652",
        username: "cio",
        id: "1857a304-93c7-4e93-95db-8e6a56c3937a",
        avatar: "https://res.cloudinary.com/dmwycbibg/image/upload/v1663631634/logo_g3tmuq.png"
    }
    const fakeDetailsObj = {
        firstname: "Chidi",
        lastname: "Okeke",
        phoneNumber: "0803677652",
        username: "cio"
    }

    const [uploadUrl, setUploadUrl] = useState(fakeDetails.avatar)
    const [userData, setUserData] = useState(fakeDetailsObj);
    const [toggleModal, setToggleModal] = useState(false);


    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const toastErrorMessage = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
        console.log(userData);
    }


    const handleUpload = async (e) => {

        e.preventDefault()
        try {
            const file = document.getElementById('image-upload').files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", preset);

            fetch(url, {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.secure_url !== '') {
                        setUploadUrl(data.secure_url);
                        mainAxios.patch(`users/users/${fakeDetails.id}`, {
                            avatar: data.secure_url
                        }).then(res => {
                            if (res.data.status === "Success") {
                                toastSuccessMessage('Successfully updated!');
                                setToggleModal(false)
                            } else {
                                toastErrorMessage('Update Failed!');
                            }
                        });

                    }
                })
                .catch(err => console.error(err))

        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const checkEmpty = (element) => {
            return element === '';
        }

        try {

            const empty = Object.values(userData).every(checkEmpty)

            if (empty) {
                toastErrorMessage('Fields empty... please enter a value');
            } else {
                const res = await mainAxios.patch(`users/users/${fakeDetails.id}`, {
                    ...(userData.firstname ? { firstname: userData.firstname } : {}),
                    ...(userData.lastname ? { lastname: userData.lastname } : {}),
                    ...(userData.phoneNumber ? { phoneNumber: userData.phoneNumber } : {}),
                    ...(userData.username ? { username: userData.username } : {}),
                    ...(uploadUrl ? { avatar: uploadUrl } : {})
                });
                if (res.data.status === "Success") {
                    toastSuccessMessage('Successfully updated!');
                } else {
                    toastErrorMessage('Update failed!');
                }
            }
        } catch (err) {
            toastErrorMessage(err.response.data.Message);
            console.log(err)
        }
    }

    return (
        <>
            <div>
                <ToastContainer />
            </div>
            <NavBarDashboard className="container-fluid" setToggleModal={setToggleModal} uploadUrl={uploadUrl} firstname={fakeDetails.firstname} />
            <div className="login container-fluid">
                <div className="container-fluid backdrop d-none d-md-block">
                </div>
                <div className="row login-card mt-3">
                    <div className=" col-xs-12 col-md-6 login-card-padding">
                        <div className="login-box">
                            <div className="login-heading">
                                <Logo />
                            </div>
                            <form onSubmit={handleSubmit} className="update-form" >
                                <div className="">
                                    <InputField childDefaultValue={fakeDetails.firstname} handleChange={handleChange} name="firstname" type="text" childClass="input" label="Firstname" placeholder="Enter your first name" />
                                </div>
                                <div className="">
                                    <InputField childDefaultValue={fakeDetails.lastname} handleChange={handleChange} name="lastname" type="text" childClass="input" label="Lastname" placeholder="Enter your last name" />
                                </div>
                                <div className="">
                                    <InputField childDefaultValue={fakeDetails.phoneNumber} handleChange={handleChange} name="phoneNumber" type="text" childClass="input" label="Phone number" placeholder="Enter your phone number" />
                                </div>
                                <div className="">
                                    <InputField childDefaultValue={fakeDetails.username} handleChange={handleChange} name="username" type="text" childClass="input" label="Username" placeholder="Enter your username" />
                                </div>
                                <div className="">
                                    <ModalUtil form={FileUpload} handleChange={handleChange} toggleModal={toggleModal} setToggleModal={setToggleModal} handleUpload={handleUpload} />
                                </div>
                                <div className="">
                                    <Button type={"submit"} text="Update" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


