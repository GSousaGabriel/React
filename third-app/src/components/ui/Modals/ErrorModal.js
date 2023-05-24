import Card from '../Card'
import Button from '../button/Button'
import classes from './ErrorModal.module.css'
import { createPortal } from 'react-dom';

const Backdrop= props=>{
    return <div className={classes.backdrop} onClick={props.hideError}></div>
}

const ModalOvelay= props=>{
    return (
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>
                {props.title}
            </h2>
        </header>
        <div className={classes.content}>
            <p>
                {props.message}
            </p>
        </div>
        <footer className={classes.actions}>
            <Button type="button" onClick={props.hideError}>Okay</Button>
        </footer>
    </Card>
    )
}

const ErrorModal = props => {
    return (
        <>
            {createPortal(<Backdrop hideError={props.hideError}/>, document.getElementById("backdrop-root"))}            
            {createPortal(<ModalOvelay hideError={props.hideError} title={props.title} message={props.message}/>, document.getElementById("overlay-root"))}
        </>
    )
}

export default ErrorModal