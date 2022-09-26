import React from 'react'

function DashboardHeader() {
    return (
        <>
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
        </>
    )
}

export default DashboardHeader