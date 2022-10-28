import React from "react";
import "./styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Opener from "./Opener";
import Super from "./Super";
import { useState, useEffect } from "react";

function App() {
    const arr = [
        {
            score: 0.9033122,
            show: {
                id: 4458,
                url: "https://www.tvmaze.com/shows/4458/spider-man",
                name: "Spider-Man",
                type: "Animation",
                language: "English",
                genres: ["Action", "Adventure", "Science-Fiction"],
                status: "Ended",
                runtime: 30,
                averageRuntime: 30,
                premiered: "2003-07-11",
                ended: "2003-09-12",
                officialSite: null,
                schedule: {
                    time: "",
                    days: ["Friday"],
                },
                rating: {
                    average: 6.8,
                },
                weight: 83,
                network: {
                    id: 22,
                    name: "MTV",
                    country: {
                        name: "United States",
                        code: "US",
                        timezone: "America/New_York",
                    },
                    officialSite: null,
                },
                webChannel: null,
                dvdCountry: null,
                externals: {
                    tvrage: null,
                    thetvdb: 78416,
                    imdb: "tt0290983",
                },
                image: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/20/51873.jpg",
                    original:
                        "https://static.tvmaze.com/uploads/images/original_untouched/20/51873.jpg",
                },
                summary:
                    "<p><b>Spider-Man</b> continues where the successful live action feature film of the same name left off. The series follows the adventures of superhero Peter Parker and his friends, Harry Osborne and Mary Jane Watson, during their first year of college at Empire State University. Parker must juggle academics, a job as a Web designer/photographer for the Daily Bugle and an on-again, off-again relationship with the love of his life, all while fighting to protect the world from super-villains.</p>",
                updated: 1648305073,
                _links: {
                    self: {
                        href: "https://api.tvmaze.com/shows/4458",
                    },
                    previousepisode: {
                        href: "https://api.tvmaze.com/episodes/289631",
                    },
                },
            },
        },
        {
            score: 0.9000375,
            show: {
                id: 1611,
                url: "https://www.tvmaze.com/shows/1611/spider-man",
                name: "Spider-Man",
                type: "Animation",
                language: "English",
                genres: ["Action", "Adventure", "Science-Fiction"],
                status: "Ended",
                runtime: 30,
                averageRuntime: 30,
                premiered: "1994-11-19",
                ended: "1998-01-31",
                officialSite: null,
                schedule: {
                    time: "10:00",
                    days: ["Saturday"],
                },
                rating: {
                    average: 8.1,
                },
                weight: 81,
                network: {
                    id: 4,
                    name: "FOX",
                    country: {
                        name: "United States",
                        code: "US",
                        timezone: "America/New_York",
                    },
                    officialSite: "https://www.fox.com/",
                },
                webChannel: null,
                dvdCountry: null,
                externals: {
                    tvrage: 5294,
                    thetvdb: 73750,
                    imdb: "tt0112175",
                },
                image: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/8/21945.jpg",
                    original:
                        "https://static.tvmaze.com/uploads/images/original_untouched/8/21945.jpg",
                },
                summary:
                    "<p><b>Spider-Man</b> (1994) tells the story of a 19-year-old Peter Parker in his first year at Empire State University, and his alter-ego Spider-Man. The show features Spider-Man's classic villains, including the Kingpin, the Green Goblin, the Lizard, the Scorpion, Doctor Octopus, Mysterio, the Rhino, the Shocker, The Vulture and the Chameleon, as well as more recent villains such as Venom, Carnage and the Hobgoblin.</p>",
                updated: 1657945295,
                _links: {
                    self: {
                        href: "https://api.tvmaze.com/shows/1611",
                    },
                    previousepisode: {
                        href: "https://api.tvmaze.com/episodes/141696",
                    },
                },
            },
        },
        {
            score: 0.8777552,
            show: {
                id: 4107,
                url: "https://www.tvmaze.com/shows/4107/spider-man",
                name: "Spider-Man",
                type: "Animation",
                language: "English",
                genres: ["Action", "Adventure", "Children"],
                status: "Ended",
                runtime: 30,
                averageRuntime: 30,
                premiered: "1967-09-09",
                ended: "1970-06-14",
                officialSite: null,
                schedule: {
                    time: "",
                    days: ["Sunday"],
                },
                rating: {
                    average: 7.2,
                },
                weight: 49,
                network: {
                    id: 72,
                    name: "Syndication",
                    country: {
                        name: "United States",
                        code: "US",
                        timezone: "America/New_York",
                    },
                    officialSite: null,
                },
                webChannel: null,
                dvdCountry: null,
                externals: {
                    tvrage: 5295,
                    thetvdb: 72739,
                    imdb: "tt0061301",
                },
                image: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/19/49914.jpg",
                    original:
                        "https://static.tvmaze.com/uploads/images/original_untouched/19/49914.jpg",
                },
                summary:
                    "<p>First airing on the ABC television network in 1967, the series revolves around the scientific-minded teenager Peter Parker who, after being bitten by a radioactive spider, develops amazing strength and spider-like powers. He decides to become a crime-fighting, costumed superhero; all the while dealing with his personal problems and the insecurities resulting from being a teenager.</p>",
                updated: 1600506974,
                _links: {
                    self: {
                        href: "https://api.tvmaze.com/shows/4107",
                    },
                    previousepisode: {
                        href: "https://api.tvmaze.com/episodes/262692",
                    },
                },
            },
        },
        {
            score: 0.86432946,
            show: {
                id: 32686,
                url: "https://www.tvmaze.com/shows/32686/spider-man",
                name: "Spider-Man",
                type: "Animation",
                language: "English",
                genres: ["Action", "Adventure", "Science-Fiction"],
                status: "Ended",
                runtime: 22,
                averageRuntime: 22,
                premiered: "1981-09-12",
                ended: "1982-03-06",
                officialSite: null,
                schedule: {
                    time: "",
                    days: ["Saturday"],
                },
                rating: {
                    average: null,
                },
                weight: 38,
                network: {
                    id: 72,
                    name: "Syndication",
                    country: {
                        name: "United States",
                        code: "US",
                        timezone: "America/New_York",
                    },
                    officialSite: null,
                },
                webChannel: null,
                dvdCountry: null,
                externals: {
                    tvrage: null,
                    thetvdb: 77686,
                    imdb: "tt0081938",
                },
                image: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/131/328110.jpg",
                    original:
                        "https://static.tvmaze.com/uploads/images/original_untouched/131/328110.jpg",
                },
                summary:
                    "<p>The web slinging superhero battles crime in New York City.</p>",
                updated: 1607536297,
                _links: {
                    self: {
                        href: "https://api.tvmaze.com/shows/32686",
                    },
                    previousepisode: {
                        href: "https://api.tvmaze.com/episodes/1331449",
                    },
                },
            },
        },
        {
            score: 0.84815645,
            show: {
                id: 41312,
                url: "https://www.tvmaze.com/shows/41312/spider-man",
                name: "Spider-Man",
                type: "Scripted",
                language: "Japanese",
                genres: ["Action", "Adventure", "Science-Fiction"],
                status: "Ended",
                runtime: 30,
                averageRuntime: 30,
                premiered: "1978-05-17",
                ended: "1979-03-14",
                officialSite: null,
                schedule: {
                    time: "19:30",
                    days: ["Wednesday"],
                },
                rating: {
                    average: null,
                },
                weight: 29,
                network: {
                    id: 76,
                    name: "TV Tokyo",
                    country: {
                        name: "Japan",
                        code: "JP",
                        timezone: "Asia/Tokyo",
                    },
                    officialSite: null,
                },
                webChannel: null,
                dvdCountry: null,
                externals: {
                    tvrage: null,
                    thetvdb: 147681,
                    imdb: "tt0185116",
                },
                image: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/187/468372.jpg",
                    original:
                        "https://static.tvmaze.com/uploads/images/original_untouched/187/468372.jpg",
                },
                summary:
                    "<p>Motorcycle racer Takuya Yamashiro gains amazing abilities from the last survivor of the planet Spider and uses them and the giant robot Leopardon to battle Professor Monster and his evil Iron Cross Army as Spider-man!</p>",
                updated: 1605906077,
                _links: {
                    self: {
                        href: "https://api.tvmaze.com/shows/41312",
                    },
                    previousepisode: {
                        href: "https://api.tvmaze.com/episodes/1620912",
                    },
                },
            },
        },
        {
            score: 0.7400511,
            show: {
                id: 18515,
                url: "https://www.tvmaze.com/shows/18515/spider-woman",
                name: "Spider-Woman",
                type: "Animation",
                language: "English",
                genres: ["Action", "Adventure"],
                status: "Ended",
                runtime: 30,
                averageRuntime: 30,
                premiered: "1979-09-22",
                ended: "1980-01-03",
                officialSite: null,
                schedule: {
                    time: "11:00",
                    days: ["Friday"],
                },
                rating: {
                    average: null,
                },
                weight: 52,
                network: {
                    id: 3,
                    name: "ABC",
                    country: {
                        name: "United States",
                        code: "US",
                        timezone: "America/New_York",
                    },
                    officialSite: "https://abc.com/",
                },
                webChannel: null,
                dvdCountry: null,
                externals: {
                    tvrage: null,
                    thetvdb: 77843,
                    imdb: "tt0197911",
                },
                image: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/63/157988.jpg",
                    original:
                        "https://static.tvmaze.com/uploads/images/original_untouched/63/157988.jpg",
                },
                summary:
                    "<p><b>Spider-Woman</b> was an animated series based on the Marvel Comics character. The series aired on ABC from 1979-1980.</p>",
                updated: 1621301524,
                _links: {
                    self: {
                        href: "https://api.tvmaze.com/shows/18515",
                    },
                    previousepisode: {
                        href: "https://api.tvmaze.com/episodes/841254",
                    },
                },
            },
        },
        {
            score: 0.69840217,
            show: {
                id: 21928,
                url: "https://www.tvmaze.com/shows/21928/marvels-spider-man",
                name: "Marvel's Spider-Man",
                type: "Animation",
                language: "English",
                genres: ["Drama", "Action", "Science-Fiction"],
                status: "Ended",
                runtime: 60,
                averageRuntime: 33,
                premiered: "2017-08-19",
                ended: "2020-10-25",
                officialSite: "https://disneynow.com/shows/marvels-spider-man",
                schedule: {
                    time: "21:00",
                    days: ["Sunday"],
                },
                rating: {
                    average: 7.6,
                },
                weight: 89,
                network: {
                    id: 25,
                    name: "Disney XD",
                    country: {
                        name: "United States",
                        code: "US",
                        timezone: "America/New_York",
                    },
                    officialSite: null,
                },
                webChannel: null,
                dvdCountry: null,
                externals: {
                    tvrage: null,
                    thetvdb: 329456,
                    imdb: "tt6135682",
                },
                image: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/245/614463.jpg",
                    original:
                        "https://static.tvmaze.com/uploads/images/original_untouched/245/614463.jpg",
                },
                summary:
                    "<p><b>Marvel's Spider-Man</b> tells the story of an unsure (but courageous) teen who has to figure out how to be a super hero from the very beginning.</p>",
                updated: 1644275899,
                _links: {
                    self: {
                        href: "https://api.tvmaze.com/shows/21928",
                    },
                    previousepisode: {
                        href: "https://api.tvmaze.com/episodes/1941829",
                    },
                },
            },
        },
        {
            score: 0.69640386,
            show: {
                id: 1529,
                url: "https://www.tvmaze.com/shows/1529/spider-man-unlimited",
                name: "Spider-Man Unlimited",
                type: "Animation",
                language: "English",
                genres: ["Action", "Adventure", "Science-Fiction"],
                status: "Ended",
                runtime: 30,
                averageRuntime: 30,
                premiered: "1999-10-02",
                ended: "2001-03-31",
                officialSite: null,
                schedule: {
                    time: "",
                    days: ["Saturday"],
                },
                rating: {
                    average: null,
                },
                weight: 83,
                network: {
                    id: 1457,
                    name: "Fox Kids",
                    country: {
                        name: "United States",
                        code: "US",
                        timezone: "America/New_York",
                    },
                    officialSite: null,
                },
                webChannel: null,
                dvdCountry: null,
                externals: {
                    tvrage: 5299,
                    thetvdb: 73560,
                    imdb: "tt0207120",
                },
                image: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/8/21324.jpg",
                    original:
                        "https://static.tvmaze.com/uploads/images/original_untouched/8/21324.jpg",
                },
                summary:
                    "<p>Believed to be dead after saving a life in a fire, Peter Parker uses this shroud to embark on a mission to retrieve John Jameson on Counter-Earth! Strap in to your seats and experience Spider-Man Unlimited!</p>",
                updated: 1607722745,
                _links: {
                    self: {
                        href: "https://api.tvmaze.com/shows/1529",
                    },
                    previousepisode: {
                        href: "https://api.tvmaze.com/episodes/139127",
                    },
                },
            },
        },
        {
            score: 0.6061883,
            show: {
                id: 3114,
                url: "https://www.tvmaze.com/shows/3114/marvels-ultimate-spider-man",
                name: "Marvel's Ultimate Spider-Man",
                type: "Animation",
                language: "English",
                genres: ["Action", "Adventure", "Science-Fiction"],
                status: "Ended",
                runtime: 30,
                averageRuntime: 27,
                premiered: "2012-04-01",
                ended: "2017-01-07",
                officialSite: null,
                schedule: {
                    time: "20:00",
                    days: ["Saturday"],
                },
                rating: {
                    average: 7.5,
                },
                weight: 88,
                network: {
                    id: 25,
                    name: "Disney XD",
                    country: {
                        name: "United States",
                        code: "US",
                        timezone: "America/New_York",
                    },
                    officialSite: null,
                },
                webChannel: {
                    id: 83,
                    name: "DisneyNOW",
                    country: {
                        name: "United States",
                        code: "US",
                        timezone: "America/New_York",
                    },
                    officialSite: null,
                },
                dvdCountry: null,
                externals: {
                    tvrage: 27587,
                    thetvdb: 257645,
                    imdb: "tt1722512",
                },
                image: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/17/43035.jpg",
                    original:
                        "https://static.tvmaze.com/uploads/images/original_untouched/17/43035.jpg",
                },
                summary:
                    "<p>Spider-Man has learned what it means to be the ultimate hero. He's fought alongside the Avengers and led a team of heroes at S.H.I.E.L.D. Academy. But now that Spider-Man's greatest enemies, Doc Ock, Hydra, and the Sinister Six, are working together to destroy him and S.H.I.E.L.D., Spider-Man requires a special new team: a team of Spider put together by Spider-Man himself including Agent Venom, Iron Spider, Kid Arachnid, and Scarlet Spider! Spider-Man will need all his power, and his knowledge, and all his friends to stop the Sinister Six and Hydra.</p>",
                updated: 1643130612,
                _links: {
                    self: {
                        href: "https://api.tvmaze.com/shows/3114",
                    },
                    previousepisode: {
                        href: "https://api.tvmaze.com/episodes/1010879",
                    },
                },
            },
        },
        {
            score: 0.60533524,
            show: {
                id: 4490,
                url: "https://www.tvmaze.com/shows/4490/the-spectacular-spider-man",
                name: "The Spectacular Spider-Man",
                type: "Animation",
                language: "English",
                genres: ["Action", "Adventure", "Science-Fiction"],
                status: "Ended",
                runtime: 30,
                averageRuntime: 30,
                premiered: "2008-03-08",
                ended: "2009-11-18",
                officialSite: null,
                schedule: {
                    time: "10:00",
                    days: ["Wednesday"],
                },
                rating: {
                    average: 7.4,
                },
                weight: 85,
                network: {
                    id: 5,
                    name: "The CW",
                    country: {
                        name: "United States",
                        code: "US",
                        timezone: "America/New_York",
                    },
                    officialSite: "https://www.cwtv.com/",
                },
                webChannel: null,
                dvdCountry: null,
                externals: {
                    tvrage: 15237,
                    thetvdb: 81494,
                    imdb: "tt0976192",
                },
                image: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/20/51967.jpg",
                    original:
                        "https://static.tvmaze.com/uploads/images/original_untouched/20/51967.jpg",
                },
                summary:
                    "<p>The line of Super Villains determined to take down Spidey seems never ending. There's Venom, Electro, Dr. Octopus, Sandman and Rhino - just to name a few. These criminals are almost more than he can handle and the stress would be enough to send a lesser Super Hero over the edge, but it's all in a day's work for <b>The Spectacular Spider-Man</b>.</p>",
                updated: 1652905295,
                _links: {
                    self: {
                        href: "https://api.tvmaze.com/shows/4490",
                    },
                    previousepisode: {
                        href: "https://api.tvmaze.com/episodes/291180",
                    },
                },
            },
        },
    ];

    const [stroke, strokeCount] = useState("spider-man");
    const [count, funCount] = useState([]);
    const [unit, unitCount] = useState("");
    const [stimul, stimulCount] = useState([]);
    const [unitName, unitNameCount] = useState("");
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${stroke}`)
            .then((response) => {
                return response.json();
            })
            .then((fin) => {
                console.log(fin);
                funCount(fin);
                unitCount(fin[0].show.image.original);
                unitNameCount(fin[0].show.name);
            })
            .catch(() => {
                console.log(count);
                funCount(arr);
                unitCount(arr[0].show.image.original);
                unitNameCount("Ничего не найдено");
            });
    }, [stroke]);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Super
                            strokeFunction={strokeCount}
                            stimulCount={stimulCount}
                            count={count}
                            unit={unit}
                            unitName={unitName}
                        />
                    }
                />
                <Route
                    path="/open"
                    element={
                        <Opener
                            stimul={stimul}
                            unitCount={unitCount}
                            unitNameCount={unitNameCount}
                        />
                    }
                />
                <Route
                    path="*"
                    element={
                        <Super
                            strokeFunction={strokeCount}
                            stimulCount={stimulCount}
                            count={count}
                            unit={unit}
                            unitName={unitName}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
