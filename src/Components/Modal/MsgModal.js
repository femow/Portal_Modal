import classes from './Modal.module.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../UI/Card'
import Button from '../UI/Button'

const BackModal = props => {
    return <div className={classes.modal_back} onClick={props.onOkModal} />
}

const FrontModal = props => {
    return <Card className={classes.modal_front}>
        <header>
            <h1>{props.title}</h1>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <Button className={classes.modal_button} onClick={props.onOkModal}>Ok</Button>
        </footer>
    </Card>
    
}

const MsgModal = props => {


    return (
        <React.Fragment>
            { ReactDOM.createPortal(<BackModal onOkModal={props.onOkModal}/>, document.getElementById('portal-modal-back'))}
            { ReactDOM.createPortal(<FrontModal title={props.title} message={props.message} onOkModal={props.onOkModal}/>, document.getElementById('portal-modal-front'))}
        </React.Fragment>
    )
}

export default MsgModal;