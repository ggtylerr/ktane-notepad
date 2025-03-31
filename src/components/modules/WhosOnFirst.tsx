import React, { useEffect, useState } from "react";

const WhosOnFirst: React.FC = () => {
    return (<>
        <h1>Who's on First</h1>
        <span className="inner">
            <span>
                <table>
                    <tr>
                        <td></td>
                        <td>BL</td>
                    </tr>
                    <tr>
                        <td>BLANK</td>
                        <td>MR</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>TR</td>
                    </tr>
                    <tr>
                        <td>CEE</td>
                        <td>BR</td>
                    </tr>
                    <tr>
                        <td>DISPLAY</td>
                        <td>BR</td>
                    </tr>
                    <tr>
                        <td>FIRST</td>
                        <td>TR</td>
                    </tr>
                    <tr>
                        <td>HOLD ON</td>
                        <td>BR</td>
                    </tr>
                    <tr>
                        <td>LEAD</td>
                        <td>BR</td>
                    </tr>
                    <tr>
                        <td>LED</td>
                        <td>ML</td>
                    </tr>
                    <tr>
                        <td>LEED</td>
                        <td>BL</td>
                    </tr>
                    <tr>
                        <td>NO</td>
                        <td>BR</td>
                    </tr>
                    <tr>
                        <td>NOTHING</td>
                        <td>ML</td>
                    </tr>
                    <tr>
                        <td>OKAY</td>
                        <td>TR</td>
                    </tr>
                    <tr>
                        <td>READ</td>
                        <td>MR</td>
                    </tr>
                    <tr>
                        <td>RED</td>
                        <td>MR</td>
                    </tr>
                    <tr>
                        <td>REED</td>
                        <td>BL</td>
                    </tr>
                    <tr>
                        <td>SAYS</td>
                        <td>BR</td>
                    </tr>
                    <tr>
                        <td>SEE</td>
                        <td>BR</td>
                    </tr>
                    <tr>
                        <td>THEIR</td>
                        <td>MR</td>
                    </tr>
                    <tr>
                        <td>THERE</td>
                        <td>BR</td>
                    </tr>
                    <tr>
                        <td>THEY ARE</td>
                        <td>ML</td>
                    </tr>
                    <tr>
                        <td>THEY'RE</td>
                        <td>BL</td>
                    </tr>
                    <tr>
                        <td>UR</td>
                        <td>TL</td>
                    </tr>
                    <tr>
                        <td>YES</td>
                        <td>ML</td>
                    </tr>
                    <tr>
                        <td>YOU</td>
                        <td>MR</td>
                    </tr>
                    <tr>
                        <td>YOU ARE</td>
                        <td>BR</td>
                    </tr>
                    <tr>
                        <td>YOU'RE</td>
                        <td>MR</td>
                    </tr>
                    <tr>
                        <td>YOUR</td>
                        <td>MR</td>
                    </tr>
                </table>
            </span>
            <span>
                <table>
                    <tr>
                        <td>BLANK</td>
                        <td>WAIT, RIGHT, OKAY, MIDDLE, BLANK</td>
                    </tr>
                    <tr>
                        <td>DONE</td>
                        <td>SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE</td>
                    </tr>
                    <tr>
                        <td>FIRST</td>
                        <td>LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST</td>
                    </tr>
                    <tr>
                        <td>HOLD</td>
                        <td>YOU ARE, U, DONE, UH UH, HOLD, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD</td>
                    </tr>
                    <tr>
                        <td>LEFT</td>
                        <td>RIGHT, LEFT</td>
                    </tr>
                    <tr>
                        <td>LIKE</td>
                        <td>YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE</td>
                    </tr>
                    <tr>
                        <td>MIDDLE</td>
                        <td>BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE</td>
                    </tr>
                    <tr>
                        <td>NEXT</td>
                        <td>WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT</td>
                    </tr>
                    <tr>
                        <td>NO</td>
                        <td>BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO</td>
                    </tr>
                    <tr>
                        <td>NOTHING</td>
                        <td>UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING</td>
                    </tr>
                    <tr>
                        <td>OKAY</td>
                        <td>MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY</td>
                    </tr>
                    <tr>
                        <td>PRESS</td>
                        <td>RIGHT, MIDDLE, YES, READY, PRESS</td>
                    </tr>
                    <tr>
                        <td>READY</td>
                        <td>YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY</td>
                    </tr>
                    <tr>
                        <td>RIGHT</td>
                        <td>YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT</td>
                    </tr>
                    <tr>
                        <td>SURE</td>
                        <td>YOU ARE, DONE, LIKE, YOU’RE, YOU, HOLD, UH HUH, UR, SURE</td>
                    </tr>
                    <tr>
                        <td>U</td>
                        <td>UH HUH, SURE, NEXT, WHAT?, YOU’RE, UR, UH UH, DONE, U</td>
                    </tr>
                    <tr>
                        <td>UH HUH</td>
                        <td>UH HUH</td>
                    </tr>
                    <tr>
                        <td>UH UH</td>
                        <td>UR, U, YOU ARE, YOU’RE, NEXT, UH UH</td>
                    </tr>
                    <tr>
                        <td>UHHH</td>
                        <td>READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH</td>
                    </tr>
                    <tr>
                        <td>UR</td>
                        <td>DONE, U, UR</td>
                    </tr>
                    <tr>
                        <td>WAIT</td>
                        <td>UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT</td>
                    </tr>
                    <tr>
                        <td>WHAT</td>
                        <td>UHHH, WHAT</td>
                    </tr>
                    <tr>
                        <td>WHAT?</td>
                        <td>YOU, HOLD, YOU’RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?</td>
                    </tr>
                    <tr>
                        <td>YES</td>
                        <td>OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES</td>
                    </tr>
                    <tr>
                        <td>YOU ARE</td>
                        <td>YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU’RE, SURE, UR, YOU ARE</td>
                    </tr>
                    <tr>
                        <td>YOU</td>
                        <td>SURE, YOU ARE, YOUR, YOU’RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU</td>
                    </tr>
                    <tr>
                        <td>YOUR</td>
                        <td>UH UH, YOU ARE, UH HUH, YOUR</td>
                    </tr>
                    <tr>
                        <td>YOU'RE</td>
                        <td>YOU, YOU’RE</td>
                    </tr>
                </table>
            </span>
        </span>

        <style jsx>{`
            #m th, #m td {
                padding: 0.5rem;
                vertical-align: top;
            }
            #m h4 { margin: 0; }
            #m table td:first-child { font-weight: bold; }
        `}</style>
    </>)
};

export default WhosOnFirst;