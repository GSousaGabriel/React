import classes from './input.module.css'

const Input = props => {
    return (
        <div className={`${classes.input} ${props.input}`}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}></input>
        </div>
    )
}

export default Input