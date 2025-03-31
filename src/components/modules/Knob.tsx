import React from "react";

const Knob: React.FC = () => {
    return (<>
        <h1>Knob</h1>
        <span className="inner">
            <h3>Up</h3>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                    <th className="top">3</th>
                    <th></th>
                    <th></th>
                    <th className="top">6</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="border">X</td>
                    <td></td>
                    <td>X</td>
                    <td className="border">X</td>
                </tr>
                <tr>
                    <td>X</td>
                    <td>X</td>
                    <td className="border">X</td>
                    <td>X</td>
                    <td></td>
                    <td className="border">X</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                    <th className="top">3</th>
                    <th></th>
                    <th className="top">5</th>
                    <th></th>
                </tr>
                <tr>
                    <td>X</td>
                    <td></td>
                    <td className="border">X</td>
                    <td></td>
                    <td className="border">X</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>X</td>
                    <td className="border">X</td>
                    <td></td>
                    <td className="border">X</td>
                    <td>X</td>
                </tr>
            </table>
            <h3>Down</h3>
            <table>
                <tr>
                    <th></th>
                    <th className="top">2</th>
                    <th className="top">3</th>
                    <th></th>
                    <th></th>
                    <th className="top">6</th>
                </tr>
                <tr>
                    <td></td>
                    <td className="border">X</td>
                    <td className="border">X</td>
                    <td></td>
                    <td></td>
                    <td className="border">X</td>
                </tr>
                <tr>
                    <td>X</td>
                    <td className="border">X</td>
                    <td className="border">X</td>
                    <td>X</td>
                    <td></td>
                    <td className="border">X</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>&zwnj;</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td>X</td>
                    <td></td>
                    <td>X</td>
                    <td></td>
                    <td>X</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>X</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>X</td>
                </tr>
            </table>
            <h3>Left</h3>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className="top">5</th>
                    <th></th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="border">X</td>
                    <td></td>
                </tr>
                <tr>
                    <td>X</td>
                    <td></td>
                    <td></td>
                    <td>X</td>
                    <td className="border">X</td>
                    <td>X</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className="top">5</th>
                    <th></th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="border">X</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>X</td>
                    <td className="border">X</td>
                    <td></td>
                </tr>
            </table>
            <h3>Right</h3>
            <table>
                <tr>
                    <th className="top">1</th>
                    <th></th>
                    <th className="top">3</th>
                    <th></th>
                    <th className="top">5</th>
                    <th></th>
                </tr>
                <tr>
                    <td className="border">X</td>
                    <td></td>
                    <td className="border">X</td>
                    <td>X</td>
                    <td className="border">X</td>
                    <td>X</td>
                </tr>
                <tr>
                    <td className="border">X</td>
                    <td>X</td>
                    <td className="border">X</td>
                    <td></td>
                    <td className="border">X</td>
                    <td></td>
                </tr>
            </table>
            <table>
                <tr>
                    <th className="top">1</th>
                    <th></th>
                    <th className="top">3</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td className="border">X</td>
                    <td></td>
                    <td className="border">X</td>
                    <td>X</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="border">X</td>
                    <td>X</td>
                    <td className="border">X</td>
                    <td></td>
                    <td>X</td>
                    <td></td>
                </tr>
            </table>
        </span>

        <style jsx>{`
            #m .inner {
                flex-wrap: wrap;
                text-align: center;
            }
            #m h3 {
                flex-basis: 100%;
                margin: 0;
            }
            #m table {
                width: calc(50% - 1em);
                table-layout: fixed;
            }
            #m th { border: none; }
            #m .top { color: var(--clr-green); }
            #m td:has(+.border) { border-right: var(--clr-green); }
            #m .border { border-color: var(--clr-green); }
        `}</style>
    </>)
};

export default Knob;