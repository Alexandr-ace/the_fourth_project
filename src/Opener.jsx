import React from "react";
import "./styles/styles.css";
import { Link } from "react-router-dom";

const Opener = (props) => {
    return (
        <div>
            <div className="containe">
                <div className="containe-left">
                    <div className="containe-left-up">
                        Название фильма {props.stimul[0]}
                    </div>
                    <div className="containe-left-down">
                        <img src={props.stimul[1]} alt="pictur" />
                    </div>
                </div>
                <div className="containe-right">
                    <div className="containe-right1">
                        Год выпуска:{props.stimul[2]}
                    </div>
                    <div className="containe-right2">
                        Длительность:{props.stimul[3]}
                    </div>
                    <div className="containe-right3">
                        Жанр:{props.stimul[4]}
                    </div>
                    <div className="containe-right4">
                        Описание:{props.stimul[5]}
                    </div>
                    <div className="containe-right5">
                        <Link to="/">Вернуться на главную</Link>
                    </div>
                    <div>
                        <Link
                            onClick={() => {
                                props.unitCount(props.stimul[1]);
                                props.unitNameCount(props.stimul[0]);
                            }}
                            to="/"
                        >
                            Перенести сериал на главную страницу и вернуться на
                            главную
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opener;
