
import './Dashboard.css';
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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import TransactionHistory from '../TransactionHistory/TransactionHistory';

const Dashboard = () => {

    const userDetails = {
        firstname: localStorage.getItem("firstname"),
        lastname: localStorage.getItem("lastname"),
        phoneNumber: localStorage.getItem("phoneNumber"),
        username: localStorage.getItem("username"),
        id: localStorage.getItem("id"),
        avatar: localStorage.getItem("avatar")
    }

    return (
        <>
            <div>
                <ToastContainer />
            </div>
            <NavBarDashboard className="container-fluid" uploadUrl={userDetails.avatar} firstname={userDetails.firstname} />
            <div className="dashboard container-fluid">
                <div className="container-fluid backdrop d-none d-md-block">
                </div>
                <div className="row dashboard-card mt-3">
                    <div className=" col-xs-12 col-md-6 dashboard-card-padding p-md-5">
                        <div className="dashboard-box col-12">
                            <div className="dashboard-heading-text">
                                Dashboard
                            </div>
                            <div class="wallet-section col-12">
                                <div class="wallet-card">
                                    <div class="wallet-details">
                                        <div class="wallet-balance">
                                            Wallet balance
                                        </div>
                                        <div class="wallet-balance-amount">
                                            N21,350.00
                                        </div>
                                    </div>
                                    <div class="account-status">
                                        <div class="account-is-active">
                                            Account is active
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                            <Tabs
                                defaultActiveKey="sell-airtime"
                                id="dashboard-tabs"
                                className="mb-3"
                                fill
                            >
                                <Tab eventKey="sell-airtime" title="Sell airtime">
                                    
                                </Tab>
                                <Tab eventKey="withdraw-balance" title="Withdraw balance">
                                    
                                </Tab>
                                <Tab eventKey="manage-bank-account" title="Manage bank account">
                                   
                                </Tab>
                                <Tab eventKey="transaction-history" title="Transaction history">
                                    <TransactionHistory />
                                </Tab>
                            </Tabs>
                        </div>

                        </div>
                        
                    </div>
                  
                </div>
            </div>

        </>
    )
}

export default Dashboard
