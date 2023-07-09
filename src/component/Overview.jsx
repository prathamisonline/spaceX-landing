import React from 'react';

const Overview = () => {
    return (
        <div className="overview-container">
            <div >
                <h2 className="Overview-title">Falcon Heavy <br/> Overview</h2>
                <div className="overview-details">
                    <div >
                        <p className="subtitle">HEIGHT</p>
                        <p className="subtitle">DIAMETER</p>
                        <p className="subtitle">MASS</p>
                        <p className="subtitle">PAYLOAD TO LEO</p>
                        <p className="subtitle">PAYLOAD TO GTO</p>
                        <p className="subtitle">PAYLOAD TO MARS</p>
                    </div>
                    <div >
                        <p className="subtitle">70 m / 229.6 ft</p>
                        <p className="subtitle">12.2 m / 39.9 ft</p>
                        <p className="subtitle">1,420,788 kg / 3,125,735 lb</p>
                        <p className="subtitle">63,800 kg / 140,660 lb</p>
                        <p className="subtitle">26,700 kg / 58,860 lb</p>
                        <p className="subtitle">16,800 kg / 37,040 lb</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="Overview-title">UNMATCHED  <br/>  PERFORMANCE</h2>
                <p className="overview-desc">
                    With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.
                </p>
            </div>
        </div>
    );
};

export default Overview;
