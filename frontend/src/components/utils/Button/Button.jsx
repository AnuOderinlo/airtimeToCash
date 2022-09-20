/* Code generated with AutoHTML for Figma */
import './Button.css';
import { Link } from 'react-router-dom';
export const Button = ({
    type, text, clickFunction, to
}) => {

    return (
        <button onClick={clickFunction} type={type} className="button" >
            <div className="button-text">
                {text}
            </div>
        </button>
    )
}