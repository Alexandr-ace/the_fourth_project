import React from "react";
import Film from "./Film";

const Serials = (props) => {
    return (
        <div className="site-container-middle">
            {props.serial.map((seri, index) => {
                return (
                    <Film
                        stimulFunctionAll={props.stimulFunction}
                        seri={seri}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default Serials;
