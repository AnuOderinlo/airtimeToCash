
import './Dashboard.css';
import { useState } from 'react';
import BackArrow from '../../assets/icon/BackArrow.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBarDashboard } from '../NavBarDashboard/NavBarDashboard';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import LoremIpsum from './LoremIpsum';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const Dashboard = () => {

    const userDetails = {
        firstname: localStorage.getItem("firstname"),
        lastname: localStorage.getItem("lastname"),
        phoneNumber: localStorage.getItem("phoneNumber"),
        username: localStorage.getItem("username"),
        id: localStorage.getItem("id"),
        avatar: localStorage.getItem("avatar")
    }

    const [key, setKey] = useState('sell-airtime');

    return (
        <>
            <div>
                <ToastContainer />
            </div>
            <NavBarDashboard className="container-fluid" uploadUrl={userDetails.avatar} firstname={userDetails.firstname} />
            <div className="dashboard container-fluid p-0">
                <div className="container-fluid backdrop d-none d-md-block">
                </div>
                <div className="row dashboard-card mt-3">
                    <div className=" col-xs-12 col-md-6 dashboard-card-padding p-md-5">
                        <div className="dashboard-box col-12">
                            {
                                (key === "sell-airtime" || key === "withdraw-balance") && <DashboardHeader />
                            }
                            {
                                (key === "manage-bank-account") &&
                                <>
                                    <div className='heading-with-arrow container'>
                                        <img className='float-start' src={BackArrow} />
                                        <div className="mx-auto dashboard-heading-text">
                                            Manage Account
                                        </div>
                                    </div>

                                </>
                            }
                            {
                                (key === "transaction-history") &&
                                <div className="dashboard-heading-text">
                                    Transactions
                                </div>
                            }

                            <div className="">
                                <Tabs
                                    defaultActiveKey="sell-airtime"
                                    id="dashboard-tabs"
                                    className="mb-3"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    fill
                                >
                                    <Tab eventKey="sell-airtime" title="Sell airtime">
                                        <LoremIpsum />
                                    </Tab>
                                    <Tab eventKey="withdraw-balance" title="Withdraw balance">
                                        <LoremIpsum />
                                    </Tab>
                                    <Tab eventKey="manage-bank-account" title="Manage bank account">
                                        <LoremIpsum />
                                    </Tab>
                                    <Tab eventKey="transaction-history" title="Transaction history">
                                        <LoremIpsum />
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
