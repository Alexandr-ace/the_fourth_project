import React from "react";
import Serial from "./Serial";
import Serials from "./Serials";
import "./styles/styles.css";

const Super = (props) => {
    return (
        <div className="site-container">
            <Serial
                strokeFunction={props.strokeFunction}
                sim={props.unit}
                som={props.unitName}
            />
            <Serials stimulFunction={props.stimulCount} serial={props.count} />
        </div>
    );
};

export default Super;
