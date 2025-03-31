import React, { useEffect, useState } from "react";
import { edge, type EdgeData } from "../../scripts/store";

const ComplicatedWires: React.FC  = () => {
    const [data, setData] = useState<EdgeData | null>(null);

    useEffect(() => {
        const sub = edge.subscribe((val: EdgeData) => {
            setData(val);
        });
        return () => sub();
    }, []);

    const classBatt =
        (data && (data.batteries.aa + data.batteries.d) > 1)
        ? "greenBG" : "redBG";
    const snMatch = data ? data.sn.match(/\d+/g) : false;
    const classSN =
        (snMatch && parseInt(snMatch[snMatch.length - 1], 10) % 2 === 0)
        ? "greenBG" : "redBG";
    const classParallel =
        (data && data.ports.parallel > 0)
        ? "greenBG" : "redBG";


    return (<>
        <h1>Complicated Wires</h1>
        <p>
            Based off of{" "}
            <a href="https://ktane.timwi.de/HTML/Complicated%20Wires%20ruleseeded%20optimized%20(TheFIZZYnator%20%26%20mathgeniuszach).html">
                TheFIZZYnator &amp; mathgeniuszach's optimized manual
            </a>{" "}
            (+ some SVGs from them.)
        </p>
        <span className="inner">
            <table>
                <tr>
                    <td colSpan={2} className="corner"></td>
                    <th colSpan={2} className="led borderRight">
                        <svg width="24" height="24">
                            <circle cx="12" cy="12" r="11" className="fillText"/>
                            <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                    </th>
                    <th colSpan={2} className="led">
                        <svg width="24" height="24">
                            <defs>
                                <radialGradient id="grad" cx="10" cy="10" r="9"
                                                gradientTransform="matrix(1.222 0 0 1.222 -.2222 -.2222)"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#ec0" stop-opacity="0" offset=".3"></stop>
                                    <stop stop-color="#ec0" stop-opacity=".75" offset=".8"></stop>
                                    <stop stop-color="#ec0" stop-opacity=".1" offset="1"></stop>
                                </radialGradient>
                            </defs>
                            <circle cx="12" cy="12" r="11" className="fillWhite"/>
                            <circle cx="12" cy="12" r="9" fill="none" className="strokeBlack"/>
                            <circle cx="12" cy="12" r="11" fill="url(#grad)"/>
                        </svg>
                    </th>
                </tr>
                <tr>
                    <td className="color"></td>
                    <th className="color">
                        <svg height="100%" viewBox="4 0 18 24">
                            <rect x="6" y="1" width="12" height="22" className="fillWhite strokeBlack"/>
                        </svg>
                    </th>
                    <td className="yes">✓</td>
                    <td className="yes">✓</td>
                    <td className="no">×</td>
                    <td className={classBatt}>B</td>
                </tr>
                <tr>
                    <th className="color">
                        <svg height="100%" viewBox="4 0 16 24">
                            <rect x="6" y="1" width="12" height="22" className="fillWhite"/>
                            <path d="M 12.289063,22.5 6.5,12.851563 v 6.912109 L 8.140625,22.5 Z"
                                  className="fillRed"></path>
                            <path d="M 7.984375,1.5 H 6.5 V 5.9375 L 16.435547,22.5 H 17.5 v -5.140625 z"
                                  className="fillRed"></path>
                            <path d="M 17.5,10.445313 V 3.53125 L 16.28125,1.5 h -4.148437 z" className="fillRed"></path>
                            <rect x="6" y="1" width="12" height="22" fill="none" className="strokeBlack"/>
                        </svg>
                    </th>
                    <th className="color">
                        <svg height="100%" viewBox="4 0 18 24">
                            <rect x="6" y="1" width="12" height="22" className="fillRed strokeBlack"/>
                        </svg>
                    </th>
                    <td className={classSN}>S</td>
                    <td className="yes">✓</td>
                    <td className={classBatt}>B</td>
                    <td className={classBatt}>B</td>
                </tr>
                <tr>
                    <th className="color">
                        <svg height="100%" viewBox="4 0 16 24">
                            <rect x="6" y="1" width="12" height="22" className="fillWhite"/>
                            <path d="M 12.289063,22.5 6.5,12.851563 v 6.912109 L 8.140625,22.5 Z"
                                  className="fillBlue"></path>
                            <path d="M 7.984375,1.5 H 6.5 V 5.9375 L 16.435547,22.5 H 17.5 v -5.140625 z"
                                  className="fillBlue"></path>
                            <path d="M 17.5,10.445313 V 3.53125 L 16.28125,1.5 h -4.148437 z" className="fillBlue"></path>
                            <rect x="6" y="1" width="12" height="22" fill="none" className="strokeBlack"/>
                        </svg>
                    </th>
                    <th className="color">
                        <svg height="100%" viewBox="4 0 18 24">
                            <rect x="6" y="1" width="12" height="22" className="fillBlue strokeBlack"/>
                        </svg>
                    </th>
                    <td className={classSN}>S</td>
                    <td className="no">×</td>
                    <td className={classParallel}>P</td>
                    <td className={classParallel}>P</td>
                </tr>
                <tr>
                    <th className="color"/>
                    <th className="color">
                        <svg height="100%" viewBox="4 0 18 24">
                            <rect x="6" y="1" width="12" height="22" className="fillBlue"></rect>
                            <path d="M 12.289063,22.5 6.5,12.851563 v 6.912109 L 8.140625,22.5 Z"
                                  className="fillRed"></path>
                            <path d="M 7.984375,1.5 H 6.5 V 5.9375 L 16.435547,22.5 H 17.5 v -5.140625 z"
                                  className="fillRed"></path>
                            <path d="M 17.5,10.445313 V 3.53125 L 16.28125,1.5 h -4.148437 z" className="fillRed"></path>
                            <rect x="6" y="1" width="12" height="22" fill="none" className="strokeBlack"></rect>
                        </svg>
                    </th>
                    <td className={classSN}>S</td>
                    <td className={classParallel}>P</td>
                    <td className={classSN}>S</td>
                    <td className="no">×</td>
                </tr>
                <tr>
                    <td colSpan={2} className="corner"></td>
                    <td className="star borderRight"></td>
                    <td className="star borderRight">★</td>
                    <td className="star borderRight"></td>
                    <td className="star">★</td>
                </tr>
            </table>
            <table className="key">
                <tr>
                    <th colSpan={2}>Key</th>
                </tr>
                <tr>
                    <th className="yes">✓</th>
                    <td>Cut</td>
                </tr>
                <tr>
                    <th className="no">×</th>
                    <td>Don't cut</td>
                </tr>
                <tr>
                    <th className={classSN}>S</th>
                    <td>Cut if SN even</td>
                </tr>
                <tr>
                    <th className={classParallel}>P</th>
                    <td>Cut if parallel</td>
                </tr>
                <tr>
                    <th className={classBatt}>B</th>
                    <td>Cut if 2+ batteries</td>
                </tr>
            </table>
        </span>

        <style jsx>{`
            #m tr {
                height: auto;
            }
            #m .inner {
                display: flex;
                justify-content: space-evenly;
                gap: 1em;
            }
            #m .corner { border: none !important; }
            #m .color {
                padding: 0;
                line-height: 0;
                min-width: 0;
                border: none !important;
            }
            #m .led, #m .star { border: none; }
            #m .borderRight {
                border-right: 1px solid var(--clr-overlay);
            }
            #m .yes {
                background-color: var(--clr-green);
                font-size: 2.5em;
            }
            #m .no {
                background-color: var(--clr-red);
                font-size: 2em;
            }
            #m .yes, #m .no {
                color: var(--clr-black);
                line-height: 0;
            }
            #m .inner {
                display: flex;
                justify-content: space-evenly;
                gap: 1em;
            }
            #m table { box-sizing: border-box; }
            #m th, #m td {
                min-height: 45px;
                min-width: 45px;
                height: 45px;
                font-size: 1.5em;
                padding: .03em .14em;
                text-align: center;
                font-weight: bold;
            }
            #m .key td {
                font-size: 1em;
            }
            #m .fillBlack { fill: var(--clr-black); }
            #m .fillWhite { fill: var(--clr-white); }
            #m .fillRed { fill: var(--clr-red); }
            #m .fillBlue { fill: var(--clr-blue); }
            #m .strokeBlack { stroke: var(--clr-black); }
        `}</style>
    </>)
}

export default ComplicatedWires;