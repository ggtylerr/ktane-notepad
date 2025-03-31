import React from "react";

const Password: React.FC = () => {
    return (<>
        <h1>Password</h1>
        <table>
            <tr>
                <td>3rd never contains:</td>
                <td>B, C, D, F, J, K, M, N, P, Q, S, W, X, Y, Z</td>
            </tr>
            <tr>
                <td>5th never contains:</td>
                <td>A, B, C, F, I, J, M, O, P, Q, S, U, V, X, Z</td>
            </tr>
        </table>
        <br/>
        <table>
            <tr>
                <th>3rd</th>
                <th>5th</th>
                <th>Words</th>
            </tr>
            <tr>
                <td rowSpan={4}>A</td>
                <td>E</td>
                <td>PLACE</td>
            </tr>
            <tr>
                <td>N</td>
                <td>AGAIN, LEARN</td>
            </tr>
            <tr>
                <td>L</td>
                <td>SMALL</td>
            </tr>
            <tr>
                <td>T</td>
                <td>PLANT</td>
            </tr>
            <tr>
                <td rowSpan={5}>E</td>
                <td>E</td>
                <td>THESE, THERE, WHERE</td>
            </tr>
            <tr>
                <td>L</td>
                <td>SPELL</td>
            </tr>
            <tr>
                <td>R</td>
                <td>THEIR</td>
            </tr>
            <tr>
                <td>T</td>
                <td>GREAT</td>
            </tr>
            <tr>
                <td>Y</td>
                <td>EVERY</td>
            </tr>
            <tr>
                <td>G</td>
                <td>T</td>
                <td>RIGHT</td>
            </tr>
            <tr>
                <td>H</td>
                <td>R</td>
                <td>OTHER</td>
            </tr>
            <tr>
                <td rowSpan={6}>I</td>
                <td>E</td>
                <td>WRITE</td>
            </tr>
            <tr>
                <td>G</td>
                <td>THING</td>
            </tr>
            <tr>
                <td>H</td>
                <td>WHICH</td>
            </tr>
            <tr>
                <td>K</td>
                <td>THINK</td>
            </tr>
            <tr>
                <td>L</td>
                <td>STILL</td>
            </tr>
            <tr>
                <td>T</td>
                <td>POINT</td>
            </tr>
            <tr>
                <td>L</td>
                <td>W</td>
                <td>BELOW</td>
            </tr>
            <tr>
                <td>O</td>
                <td>T</td>
                <td>ABOUT</td>
            </tr>
            <tr>
                <td rowSpan={3}>R</td>
                <td>D</td>
                <td>WORLD</td>
            </tr>
            <tr>
                <td>E</td>
                <td>LARGE, THREE</td>
            </tr>
            <tr>
                <td>T</td>
                <td>FIRST</td>
            </tr>
            <tr>
                <td>T</td>
                <td>R</td>
                <td>AFTER, WATER</td>
            </tr>
            <tr>
                <td rowSpan={3}>U</td>
                <td>D</td>
                <td>COULD, FOUND, SOUND, WOULD</td>
            </tr>
            <tr>
                <td>E</td>
                <td>HOUSE</td>
            </tr>
            <tr>
                <td>Y</td>
                <td>STUDY</td>
            </tr>
            <tr>
                <td>V</td>
                <td>R</td>
                <td>NEVER</td>
            </tr>
        </table>

        <style jsx>{`
            #m table { width: 100%; }
            #m th, #m td {
                text-align: center;
                vertical-align: center;
            }
            #m td:first-child, #m td:nth-child(2) {
                padding: 0 1.5em;
            }
        `}</style>
    </>)
};

export default Password;