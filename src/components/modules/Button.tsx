import React, { useEffect, useState } from "react";
import { edge, type EdgeData } from "../../scripts/store";

const Button: React.FC  = () => {
    const [data, setData] = useState<EdgeData | null>(null);

    useEffect(() => {
        const sub = edge.subscribe((val: EdgeData) => {
            setData(val);
        });
        return () => sub();
    }, []);

    const batts = data ? data.batteries.aa + data.batteries.d : 0;
    const class2B = batts > 1 ? "greenBG" : "redBG";
    const classCar = data && data.indicators.car.lit ? "greenBG" : "redBG";
    const class3B = batts > 2 ? "greenBG" : "redBG";
    const classFrk = data && data.indicators.frk.lit ? "greenBG" : "redBG";

    return ( <>
        <h1>The Button</h1>
        <div className="inner">
            <ol>
                <li><span className="red">Red</span> & "HOLD": Tap</li>
                <li><span className={class2B}>2+ Batts</span> & "Detonate": Tap</li>
                <li><span className="blue">Blue</span> & "ABORT": Hold</li>
                <li><span className="white">White</span> & <span className={classCar}>Lit CAR</span>: Hold</li>
                <li><span className={class3B}>3+ Batts</span> & <span className={classFrk}>Lit FRK</span>: Tap</li>
                <li>else: Hold</li>
            </ol>
            <span>
            Releasing:
                <ul>
                    <li><span className="blue">Blue</span>: 4</li>
                    <li><span className="yellow">Yellow</span>: 5</li>
                    <li>else 1</li>
                </ul>
            </span>
        </div>
    </>)
};

export default Button;