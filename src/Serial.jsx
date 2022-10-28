import React from "react";
import pic from "./picture/logo.png";
import Search from "./Search";

const Serial = (props) => {
    return (
        <div className="site-container-up">
            <div className="site-container-up-left">
                <div className="site-container-up-left-1">
                    <img src={pic} alt="pic" />
                </div>
                <div className="site-container-up-left-2">
                    <span className="site-container-up-left-2-text1">
                        Любимые сериалы на любой вкус
                    </span>
                </div>
                <Search strokeFunction={props.strokeFunction} />
            </div>
            <div className="site-container-up-right">
                <img
                    className="site-container-up-right-picture"
                    src={props.sim}
                    alt="pictures"
                />
                <div className="site-container-up-right-timeb">
                    <div className="site-container-up-right-timeb-up">
                        <div className="site-container-up-right-timeb-up1">
                            Любимые сериалы
                        </div>
                        <div className="site-container-up-right-timeb-up2">
                            Смотрите когда и где угодно
                        </div>
                    </div>
                </div>
                <div className="site-container-up-right-timef">{props.som}</div>
            </div>
        </div>
    );
};

export default Serial;
