import './Input.css';

const InputField = ({
    ...props
}) => {

    return (

        <div className="input-group">
            <div className="input-label">
                {props.label}
            </div >
            <div >
                <input name={props.name} type={props.type} className={props.class} placeholder={props.placeholder} />
            </div>
        </div >


    )
}

export default InputField