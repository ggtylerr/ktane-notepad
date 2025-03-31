import React from "react";

const Keypad: React.FC = () => {
    return (<>
        <h1>Keypad</h1>
        <span className="inner">
            <table>
                <tr>
                    <td>ϙ</td>
                    <td>Ӭ</td>
                    <td className="red">©</td>
                    <td className="green">б</td>
                    <td>Ψ</td>
                    <td className="green">б</td>
                </tr>
                <tr>
                    <td className="red">Ѧ</td>
                    <td>ϙ</td>
                    <td className="red">ѽ</td>
                    <td>¶</td>
                    <td>ټ</td>
                    <td>Ӭ</td>
                </tr>
                <tr>
                    <td>λ</td>
                    <td>Ͽ</td>
                    <td>Ҩ</td>
                    <td>Ѣ</td>
                    <td>Ѣ</td>
                    <td className="red">҂</td>
                </tr>
                <tr>
                    <td className="red">ϟ</td>
                    <td>Ҩ</td>
                    <td>Җ</td>
                    <td>Ѭ</td>
                    <td className="red">Ͼ</td>
                    <td className="red">æ</td>
                </tr>
                <tr>
                    <td>Ѭ</td>
                    <td>☆</td>
                    <td className="red">Ԇ</td>
                    <td>Җ</td>
                    <td>¶</td>
                    <td>Ψ</td>
                </tr>
                <tr>
                    <td className="special">ϗ</td>
                    <td className="special">ϗ</td>
                    <td>λ</td>
                    <td>¿</td>
                    <td className="red">Ѯ</td>
                    <td className="red">Ҋ</td>
                </tr>
                <tr>
                    <td>Ͽ</td>
                    <td>¿</td>
                    <td>☆</td>
                    <td>ټ</td>
                    <td className="red">★</td>
                    <td className="red">Ω</td>
                </tr>
            </table>
        </span>
        <style jsx>{`
            #m .inner {
                display: flex;
                width: 100%;
                justify-content: center;
            }
            #m table {
                font-size: 1.5rem;
                text-align: center;
            }
            #m td {
                padding: 1rem;
            }
            #m .special {
                font-family: Arial, sans-serif;
            }
        `}</style>
    </>)
};

export default Keypad;