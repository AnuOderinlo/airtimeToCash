import './NavBar.css';
export const NavBar = ({
  ...props
}) => {

  return (
    <div className="navbar">
    <div className="rectangle-1">

    </div>
    <div className="frame-8591">
        <div className="frame-8589">
            <svg className="larkef-x-rareblocks-_-logo--31-1" width="40" height="70" viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3_395)" filter="url(#filter0_ddd_3_395)">
                    <path d="M38.125 14.595L24.865 0L0 27.7H26.36L38.125 14.595Z" fill="url(#paint0_linear_3_395)" />
                    <path d="M13.255 42.3L1.48999 55.4L14.75 70L39.615 42.3H13.255Z" fill="url(#paint1_linear_3_395)" />
                    <path d="M13.255 42.3L25.445 28.715L26.36 27.7H0L13.255 42.3Z" fill="url(#paint2_linear_3_395)" />
                    <path d="M13.255 42.3H39.615L26.36 27.7L25.445 28.715L13.255 42.3Z" fill="url(#paint3_linear_3_395)" />
                </g>
                <defs>
                    <filter id="filter0_ddd_3_395" x="-4" y="0" width="48" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_395" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_3_395" result="effect2_dropShadow_3_395" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect2_dropShadow_3_395" result="effect3_dropShadow_3_395" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_3_395" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_3_395" x1="31.93" y1="7.945" x2="4.89998" y2="33.215" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFE770" />
                        <stop offset="1" stop-color="#FFAA4F" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_3_395" x1="7.47" y1="62.175" x2="34.71" y2="37.045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F55684" />
                        <stop offset="1" stop-color="#CF2D5D" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_3_395" x1="6.63" y1="34.995" x2="21.5599" y2="21.83" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F0764A" />
                        <stop offset="1" stop-color="#FFAA4F" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_3_395" x1="32.975" y1="35.01" x2="18.755" y2="47.935" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#911C4B" />
                        <stop offset="1" stop-color="#CF2D5D" />
                    </linearGradient>
                    <clipPath id="clip0_3_395">
                        <rect width="40" height="70" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div className="airtime2cash">
                <span><span className="airtime2cash-span">Airtime</span><span className="airtime2cash-span2">2Cash</span></span>
            </div>
        </div>
        <div className="frame-8590">
            <div className="home">
                Home
            </div>
            <div className="about-us">
                About Us
            </div>
            <div className="products">
                Products
            </div>
            <div className="contact-us">
                Contact Us
            </div>
            <div className="frame-8560">
                <div className="login-btn">
                    Login
                </div>
            </div>
        </div>
    </div>
</div>
    )
}