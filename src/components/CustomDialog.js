import React from 'react';
import './CustomDialog.css';

const CustomDialog = ({ isOpen, onClose, item }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="custom-dialog-overlay">
            <div className="custom-dialog">
                <h2>{item.heading}</h2>
                <p>Weight: {item.weight}</p>
                <p>Price: {item.price}</p>
                <button onClick={onClose}>Pay</button>
            </div>
        </div>
    );
};

export default CustomDialog;