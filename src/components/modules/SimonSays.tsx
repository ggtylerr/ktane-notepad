import React, { useEffect, useState } from "react";
import { edge } from "../../scripts/store";

const SimonSays: React.FC = () => {
    type Display = "0V" | "1V" | "2V" | "0N" | "1N" | "2N";
    const [displayId, setDisplayId] = useState<Display | null>(null);

    useEffect(() => {
        const sub = edge.subscribe((val) => {
            const sn = val.sn;
            const strikes = val.strikes
            const vowel = /[AEIOU]/.test(sn);

            let out: Display;
            if (vowel) {
                switch (strikes) {
                    case 0:  out = "0V"; break;
                    case 1:  out = "1V"; break;
                    default: out = "2V"; break;
                }
            } else {
                switch (strikes) {
                    case 0:  out = "0N"; break;
                    case 1:  out = "1N"; break;
                    default: out = "2N"; break;
                }
            }
            setDisplayId(out);
        });
        return () => sub();
    },[]);

    return ( <>
        <h1>Simon Says</h1>
        <p>
            Images from the
            <a href="https://ktane.timwi.de/HTML/Simon%20Says%20ruleseeded%20optimized%20(Blananas2%20%26%20mathgeniuszach).html"> Blananas2 & mathgeniuszach's ruleseeded optimized manual.</a>
        </p>
        {displayId == "0V" && (
            <div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSIjYmYwMDAwIiBkPSJNIDQ3LDUzIDk0LDEwMCA0NywxNDcgMCwxMDAgWiIvPjxwYXRoIGZpbGw9IiMwMDFjYmYiIGQ9Ik0gMTAwLDAgMTQ3LDQ3IDEwMCw5NCA1Myw0NyBaIi8+PHBhdGggZmlsbD0iIzM5YmYwMCIgZD0ibSAxMDAsMTA2IDQ3LDQ3IC00Nyw0NyAtNDcsLTQ3IHoiLz48cGF0aCBmaWxsPSIjYmZiZjAwIiBkPSJtIDE1Myw1MyA0Nyw0NyAtNDcsNDcgLTQ3LC00NyB6Ii8+PHBhdGggZD0ibTkzIDU0LTM5IDM5IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Im01MyA5NCAzLTEwIDcgN3oiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0ibTk0IDUzLTEwIDMgNyA3eiIgc3Ryb2tlPSIjZmZmIiBmaWxsPSIjZmZmIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJtMTQ2IDEwNy0zOSAzOSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJtMTA2IDE0NyAxMC0zLTctN3oiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0ibTE0NyAxMDYtMyAxMC03LTd6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==" />
                <p>Double Mirror</p>
            </div>
        )}
        {displayId == "0N" && (
            <div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSIjYmYwMDAwIiBkPSJNIDQ3LDUzIDk0LDEwMCA0NywxNDcgMCwxMDAgWiIvPjxwYXRoIGZpbGw9IiMwMDFjYmYiIGQ9Ik0gMTAwLDAgMTQ3LDQ3IDEwMCw5NCA1Myw0NyBaIi8+PHBhdGggZmlsbD0iIzM5YmYwMCIgZD0ibSAxMDAsMTA2IDQ3LDQ3IC00Nyw0NyAtNDcsLTQ3IHoiLz48cGF0aCBmaWxsPSIjYmZiZjAwIiBkPSJtIDE1Myw1MyA0Nyw0NyAtNDcsNDcgLTQ3LC00NyB6Ii8+PHBhdGggZD0ibTkzIDU0LTM5IDM5IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Im05NCA1My0xMCAzIDcgN3oiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0ibTU3IDEwMGg4NiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJtNTYgMTAwIDkgNXYtMTB6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0xMDcgNTQgMzkgMzkiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0ibTE0NyA5NC0zLTEwLTcgN3oiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+" />
                <p>Green Stays</p>
            </div>
        )}
        {displayId == "1V" && (
            <div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSIjYmYwMDAwIiBkPSJNIDQ3LDUzIDk0LDEwMCA0NywxNDcgMCwxMDAgWiIvPjxwYXRoIGZpbGw9IiMwMDFjYmYiIGQ9Ik0gMTAwLDAgMTQ3LDQ3IDEwMCw5NCA1Myw0NyBaIi8+PHBhdGggZmlsbD0iIzM5YmYwMCIgZD0ibSAxMDAsMTA2IDQ3LDQ3IC00Nyw0NyAtNDcsLTQ3IHoiLz48cGF0aCBmaWxsPSIjYmZiZjAwIiBkPSJtIDE1Myw1MyA0Nyw0NyAtNDcsNDcgLTQ3LC00NyB6Ii8+PHBhdGggZD0ibTU3IDEwMGg4NiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJtNTYgMTAwIDkgNXYtMTB6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0xNDQgMTAwLTkgNXYtMTB6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0xMDAgNTd2ODYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0ibTEwMCA1Ni01IDloMTB6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0xMDAgMTQ0LTUtOWgxMHoiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+" />
                <p>True Mirror</p>
            </div>
        )}
        {displayId == "1N" && (
            <div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSIjYmYwMDAwIiBkPSJNIDQ3LDUzIDk0LDEwMCA0NywxNDcgMCwxMDAgWiIvPjxwYXRoIGZpbGw9IiMwMDFjYmYiIGQ9Ik0gMTAwLDAgMTQ3LDQ3IDEwMCw5NCA1Myw0NyBaIi8+PHBhdGggZmlsbD0iIzM5YmYwMCIgZD0ibSAxMDAsMTA2IDQ3LDQ3IC00Nyw0NyAtNDcsLTQ3IHoiLz48cGF0aCBmaWxsPSIjYmZiZjAwIiBkPSJtIDE1Myw1MyA0Nyw0NyAtNDcsNDcgLTQ3LC00NyB6Ii8+PHBhdGggZD0ibTE0NiAxMDctMzkgMzkiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0ibTEwNiAxNDcgMTAtMy03LTd6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0xNDcgMTA2LTMgMTAtNy03eiIgc3Ryb2tlPSIjZmZmIiBmaWxsPSIjZmZmIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=" />
                <p>Yellow ⟷ Green</p>
            </div>
        )}
        {displayId == "2V" && (
            <div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSIjYmYwMDAwIiBkPSJNIDQ3LDUzIDk0LDEwMCA0NywxNDcgMCwxMDAgWiIvPjxwYXRoIGZpbGw9IiMwMDFjYmYiIGQ9Ik0gMTAwLDAgMTQ3LDQ3IDEwMCw5NCA1Myw0NyBaIi8+PHBhdGggZmlsbD0iIzM5YmYwMCIgZD0ibSAxMDAsMTA2IDQ3LDQ3IC00Nyw0NyAtNDcsLTQ3IHoiLz48cGF0aCBmaWxsPSIjYmZiZjAwIiBkPSJtIDE1Myw1MyA0Nyw0NyAtNDcsNDcgLTQ3LC00NyB6Ii8+PHBhdGggZD0ibTkzIDU0LTM5IDM5IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Im01MyA5NCAzLTEwIDcgN3oiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0ibTkzIDE0Ni0zOS0zOSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJtOTQgMTQ3LTEwLTMgNy03eiIgc3Ryb2tlPSIjZmZmIiBmaWxsPSIjZmZmIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJtMTA3IDU0IDM5IDM5IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Im0xMDYgNTMgMTAgMy03IDd6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0xNDYgMTA3LTM5IDM5IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Im0xNDcgMTA2LTMgMTAtNy03eiIgc3Ryb2tlPSIjZmZmIiBmaWxsPSIjZmZmIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=" />
                <p>Counterclockwise</p>
            </div>
        )}
        {displayId == "2N" && (
            <div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSIjYmYwMDAwIiBkPSJNIDQ3LDUzIDk0LDEwMCA0NywxNDcgMCwxMDAgWiIvPjxwYXRoIGZpbGw9IiMwMDFjYmYiIGQ9Ik0gMTAwLDAgMTQ3LDQ3IDEwMCw5NCA1Myw0NyBaIi8+PHBhdGggZmlsbD0iIzM5YmYwMCIgZD0ibSAxMDAsMTA2IDQ3LDQ3IC00Nyw0NyAtNDcsLTQ3IHoiLz48cGF0aCBmaWxsPSIjYmZiZjAwIiBkPSJtIDE1Myw1MyA0Nyw0NyAtNDcsNDcgLTQ3LC00NyB6Ii8+PHBhdGggZD0ibTU3IDEwMGg4NiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJtNTYgMTAwIDkgNXYtMTB6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0xNDQgMTAwLTkgNXYtMTB6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0xMDAgNTd2ODYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0ibTEwMCA1Ni01IDloMTB6IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0xMDAgMTQ0LTUtOWgxMHoiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+" />
                <p>True Mirror</p>
            </div>
        )}

        <style jsx>{`
            #m div {
                display: flex;
                width: 100%;
                justify-content: center;
                flex-direction: column;
            }
            #m div > img {
                margin: 0 40%;
                width: 20%;
                height: auto;
            }
            #m div > p {
                text-align: center;
                font-size: 1.5rem;
            }
        `}</style>
    </>);
};

export default SimonSays;