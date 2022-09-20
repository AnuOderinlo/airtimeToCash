
import './Login.css';
import Logo from '../Utils/Logo/Logo';
import InputField from '../Utils/Input/Input';
import { Button } from '../Utils/Button/Button';

export const Login = ({
    ...props
}) => {

    return (
        <div className="login">
            <div className="login-card">
                <div className="login-card-padding">
                    <div className="login-box">
                        <div className="login-heading">
                            <Logo />
                        </div>
                        <div className="">
                            <InputField name="email" type="input" class="input" label="Login" placeholder="Enter your email" />
                        </div>
                        <div className="">
                            <InputField name="password" type="password" class="input" label="Password" placeholder="Enter your password" />
                        </div>

                        <div className="">
                            <Button text="Login" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}