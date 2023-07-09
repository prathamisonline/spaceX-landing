import React from 'react';
import Overview from "./Overview.jsx";

const SpaceX = () => {
    return (
        <div className="spaceX-container">
            <Overview />
            <img  src="./media/spaceCraft.png" alt="spaceCraft" />
        </div>
    );
};

export default SpaceX;
