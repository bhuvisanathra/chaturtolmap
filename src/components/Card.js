import React, { useState } from 'react';
import CustomDialog from './CustomDialog';
import './Card.css';

const Card = ({ heading, imageUrl, buttonText, onButtonClick, price, weight }) => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleButtonClick = () => {
        setDialogOpen(true);
        onButtonClick();
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div className="card">
            <div className="image-container">
                <img src={imageUrl} alt={heading} />
            </div>
            <h2>{heading}</h2>
            <p className="price">Price: {price}</p>
            <div className="button-container">
                <button onClick={handleButtonClick}>{buttonText}</button>
            </div>
            <CustomDialog isOpen={isDialogOpen} onClose={handleCloseDialog} item={{ heading, price, weight }} />
        </div>
    );
};

export default Card;
