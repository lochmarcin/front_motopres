import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import "./todoMain.css"


import { ReactComponent as InfoNotifi } from '../../svg/info-svgrepo-com.svg'

const ToastNotifi = (props) => {

    return (
        <ToastContainer id='ToastContainer'>
            <Toast onClose={() => props.setShowInfoToast(false)} show={props.showInfoToast} delay={5000} autohide> 
                <Toast.Header>
                    <InfoNotifi id='InfoNotifi'/>
                    <strong className="me-auto">{props.info}</strong>
                </Toast.Header>
            </Toast>
        </ToastContainer>

    );
}

export default ToastNotifi;