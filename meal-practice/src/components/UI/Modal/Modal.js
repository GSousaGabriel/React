import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
const BackDrop = props => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<BackDrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal