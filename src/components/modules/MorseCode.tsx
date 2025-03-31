import React from "react";

const MorseCode: React.FC = () => {
    return (<>
        <h1>Morse Code</h1>
        <table>
            <tr>
                <th className="normal">#1</th>
                <th className="normal">#2</th>
                <th className="normal">#3</th>
                <th className="normal">Word</th>
                <th className="normal">Frequency</th>
            </tr>
            <tr>
                <th rowSpan={6}>-...<br/>B</th>
                <th>.<br/>E</th>
                <th></th>
                <td>beats</td>
                <td>3.600</td>
            </tr>
            <tr>
                <th>..<br/>I</th>
                <th></th>
                <td>bistro</td>
                <td>3.552</td>
            </tr>
            <tr>
                <th rowSpan={2}>---<br/>O</th>
                <th>--<br/>M</th>
                <td>bombs</td>
                <td>3.565</td>
            </tr>
            <tr>
                <th>-..-<br/>X</th>
                <td>boxes</td>
                <td>3.535</td>
            </tr>
            <tr>
                <th rowSpan={2}>.-.<br/>R</th>
                <th>.<br/>E</th>
                <td>break</td>
                <td>3.572</td>
            </tr>
            <tr>
                <th>..<br/>I</th>
                <td>brick</td>
                <td>3.575</td>
            </tr>
            <tr>
                <th>..-.<br/>F</th>
                <th></th>
                <th></th>
                <td>flick</td>
                <td>3.555</td>
            </tr>
            <tr>
                <th>....<br/>H</th>
                <th></th>
                <th></th>
                <td>halls</td>
                <td>3.515</td>
            </tr>
            <tr>
                <th>.-..<br/>L</th>
                <th></th>
                <th></th>
                <td>leaks</td>
                <td>3.542</td>
            </tr>
            <tr>
                <th rowSpan={5}>...<br/>S</th>
                <th>....<br/>H</th>
                <th></th>
                <td>shell</td>
                <td>3.505</td>
            </tr>
            <tr>
                <th>.-..<br/>L</th>
                <th></th>
                <td>slick</td>
                <td>3.522</td>
            </tr>
            <tr>
                <th rowSpan={3}>-<br/>T</th>
                <th>.<br/>E</th>
                <td>steak</td>
                <td>3.582</td>
            </tr>
            <tr>
                <th>..<br/>I</th>
                <td>sting</td>
                <td>3.592</td>
            </tr>
            <tr>
                <th>.-.<br/>R</th>
                <td>strobe</td>
                <td>3.545</td>
            </tr>
            <tr>
                <th>-<br/>T</th>
                <th></th>
                <th></th>
                <td>trick</td>
                <td>3.532</td>
            </tr>
            <tr>
                <th>...-<br/>V</th>
                <th></th>
                <th></th>
                <td>vector</td>
                <td>3.595</td>
            </tr>
        </table>

        <style jsx>{`
            #m table { width: 100%; }
            #m table * { padding: 0.5em 1.5em; }
            #m td { text-align: center; }
            #m th:not(.normal) {
                font-family: monospace;
                font-size: 1.5em;
            }
        `}</style>
    </>)
};

export default MorseCode;