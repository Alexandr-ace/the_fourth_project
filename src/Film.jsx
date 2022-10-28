import React from "react";

import { Link } from "react-router-dom";

const Film = (props) => {
    const pictur = props.seri.show.image
        ? props.seri.show.image.medium
        : "https://www.amdcable.ru/img/300.jpg";
    const name = props.seri.show.name;
    const img = props.seri.show.image
        ? props.seri.show.image.original
        : "https://aistenok76.ru/upload/iblock/0a7/0a730de109ba1c74cfdad9b20049fb56.jpg";
    const premiered = props.seri.show.premiered;
    const runtime = props.seri.show.runtime;
    const genres = props.seri.show.genres.toString();
    const summary = props.seri.show.summary;
    const gen = [name, img, premiered, runtime, genres, summary];

    return (
        <div className="site-container-middle-film">
            <div className="site-container-middle-film-up">
                <img src={pictur} alt="pictures" />
            </div>
            <div className="site-container-middle-film-middle">
                {props.seri.show.name}
            </div>
            <div className="site-container-middle-film-down-down">
                <div className="site-container-middle-film-down-down-logintofollow">
                    <Link
                        onClick={() => {
                            props.stimulFunctionAll(gen);
                            localStorage.setItem("gen", gen);
                        }}
                        to="/open"
                    >
                        Open
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Film;
