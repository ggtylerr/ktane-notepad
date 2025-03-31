import React, { useState } from "react";

const Memory: React.FC  = () => {
    const [data, setData] = useState({
        p: ["S1", "S2",   "",   ""],
        l: ["S1", "S2", "S3", "S4"]
    });
    const [selected, setSelected] = useState({
        p: new Array(4).fill(5),
        l: new Array(4).fill(5)
    });
    const click = (s: number, x: "p" | "l", i: number) => {
        const nsel = { ...selected, [x]: [...selected[x]] };
        const nd8a = { ...data, [x]: [...data[x]] };

        nsel[x][s] = (nsel[x][s] === i) ? 5 : i;
        if (nsel[x][s] !== 5) nd8a[x][s] = `[${i+1}]`;
        else nd8a[x][s] = `S${s+1}`; // this will set P S3 and S4 to not be empty, but this is unused so it'll be fine

        setSelected(nsel); setData(nd8a);
    };
    const clSet = (s: number, x: "p" | "l", i: number) =>
        selected[x][s] === i ? "selected" : "";

    const p = "p"; const l = "l"; // yes I'm using 2 vars for clean code, shush.

    return (<>
        <h1>Memory</h1>
        <p>Click on the cells to select them. Middle column is the position, third is label.</p>
        <span className="outer">
            <span className="inner">
                <table>
                    <tr>
                        <th colSpan={3}>Stage 1</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td onClick={() => click(0,p,0)} className={clSet(0,p,0)}>2</td>
                        <td onClick={() => click(0,l,0)} className={clSet(0,l,0)}></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td onClick={() => click(0,p,1)} className={clSet(0,p,1)}>2</td>
                        <td onClick={() => click(0,l,1)} className={clSet(0,l,1)}></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td onClick={() => click(0,p,2)} className={clSet(0,p,2)}>3</td>
                        <td onClick={() => click(0,l,2)} className={clSet(0,l,2)}></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td onClick={() => click(0,p,3)} className={clSet(0,p,3)}>4</td>
                        <td onClick={() => click(0,l,3)} className={clSet(0,l,3)}></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th colSpan={3}>Stage 2</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td onClick={() => click(1,p,0)} className={clSet(1,p,0)}></td>
                        <td onClick={() => click(1,l,0)} className={clSet(1,l,0)}>4</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td onClick={() => click(1,p,1)} className={clSet(1,p,1)}>{data.p[0]}</td>
                        <td onClick={() => click(1,l,1)} className={clSet(1,l,1)}></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td onClick={() => click(1,p,2)} className={clSet(1,p,2)}>1</td>
                        <td onClick={() => click(1,l,2)} className={clSet(1,l,2)}></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td onClick={() => click(1,p,3)} className={clSet(1,p,3)}>{data.p[0]}</td>
                        <td onClick={() => click(1,l,3)} className={clSet(1,l,3)}></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th colSpan={3}>Stage 3</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td onClick={() => click(2,p,0)} className={clSet(2,p,0)}></td>
                        <td onClick={() => click(2,l,0)} className={clSet(2,l,0)}>{data.l[1]}</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td onClick={() => click(2,p,1)} className={clSet(2,p,1)}></td>
                        <td onClick={() => click(2,l,1)} className={clSet(2,l,1)}>{data.l[0]}</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td onClick={() => click(2,p,2)} className={clSet(2,p,2)}>3</td>
                        <td onClick={() => click(2,l,2)} className={clSet(2,l,2)}></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td onClick={() => click(2,p,3)} className={clSet(2,p,3)}></td>
                        <td onClick={() => click(2,l,3)} className={clSet(2,l,3)}>4</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th colSpan={3}>Stage 4</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td onClick={() => click(3,p,0)} className={clSet(3,p,0)}>{data.p[0]}</td>
                        <td onClick={() => click(3,l,0)} className={clSet(3,l,0)}></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td onClick={() => click(3,p,1)} className={clSet(3,p,1)}>1</td>
                        <td onClick={() => click(3,l,1)} className={clSet(3,l,1)}></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td onClick={() => click(3,p,2)} className={clSet(3,p,2)}>{data.p[1]}</td>
                        <td onClick={() => click(3,l,2)} className={clSet(3,l,2)}></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td onClick={() => click(3,p,3)} className={clSet(3,p,3)}>{data.p[1]}</td>
                        <td onClick={() => click(3,l,3)} className={clSet(3,l,3)}></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th colSpan={3}>Stage 5</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td></td>
                        <td>{data.l[0]}</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td></td>
                        <td>{data.l[1]}</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td></td>
                        <td>{data.l[3]}</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td></td>
                        <td>{data.l[2]}</td>
                    </tr>
                </table>
            </span>
            <span className="inner">
                <button onClick={
                    () => {
                        setSelected({
                            p: new Array(4).fill(5),
                            l: new Array(4).fill(5)
                        });
                        setData({
                            p: ["S1", "S2", "S3", "S4"],
                            l: ["S1", "S2", "S3", "S4"]
                        });
                    }
                }><span>Reset</span></button>
            </span>
        </span>

        <style jsx>{`
            #m .outer {
                display: flex;
                flex-direction: column;
                gap: 1em;
                align-items: center;
                justify-content: center;
            }
            #m th {
                padding: 0.5em;
                min-width: max-content;
            }
            #m tr > td {
                text-align: center;
                width: 1.5em;
            }
            #m td {
                padding: 0 1em;
            }
            #m .selected {
                background-color: var(--clr-yellow);
                color: var(--clr-bg);
            }
        `}</style>
    </>);
};

export default Memory;