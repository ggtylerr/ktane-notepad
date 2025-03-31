import React, { useState } from "react";

interface MazeData {
    id: string;
    label: string;
    cells: string[][];
}

const mazes: MazeData[] = [
    {
        id: "mz-0",
        label: "AA",
        cells: [
            [    "c",     "r",     "b",     "b",     "b",      ""],
            [    "r",     "r",      "",     "b",     "b",      ""],
            [    "r",     "b",   "b r",      "",   "b r",      ""],
            [  "c r",     "b",     "b",     "b",     "b",      ""],
            [     "",     "b",     "b",     "b",     "r",      ""],
            [     "",      "",     "r",      "",     "r",      ""]
        ]
    },
    {
        id: "mz-1",
        label: "AC",
        cells: [
            [    "r",      "",     "b",     "b",      "",      ""],
            [    "r",     "r",     "c",   "b r",     "r",      ""],
            [     "",     "b",   "b r",      "",   "b r",      ""],
            [    "r",     "r",      "",   "b r",     "b",      ""],
            [  "c r",     "r",     "r",      "",     "r",     "b"],
            [     "",     "r",      "",     "r",      "",      ""]
        ]
    },
    {
        id: "mz-2",
        label: "AF",
        cells: [
            [     "",     "b",     "r",      "",     "b",     "b"],
            [  "c r",      "",   "b r",     "b",     "b",      ""],
            [    "r",     "b",     "r",      "",     "b",     "c"],
            [    "r",     "b",     "b",   "b r",     "b",      ""],
            [     "",     "b",     "r",      "",   "b r",      ""],
            [     "",     "r",      "",     "r",      "",      ""]
        ]
    },
    {
        id: "mz-3",
        label: "BB",
        cells: [
            [     "",   "c b",     "b",     "r",      "",      ""],
            [    "r",      "",   "b r",     "b",   "b r",      ""],
            [    "b",   "b r",      "",   "b r",      "",     "b"],
            [     "",     "r",      "",     "b",   "b r",      ""],
            [    "r",   "b r",     "b",     "b",     "r",      ""],
            [     "",     "c",      "",      "",      "",      ""]
        ]
    },
    {
        id: "mz-4",
        label: "BE",
        cells: [
            [    "b",      "",   "b r",      "",      "",     "b"],
            [     "",   "b r",      "",   "b r",   "c b",      ""],
            [    "r",      "",   "b r",      "",     "b",      ""],
            [     "", "c b r",      "",   "b r",     "r",      ""],
            [    "r",     "r",     "r",      "",   "b r",      ""],
            [    "r",      "",     "r",      "",      "",      ""]
        ]
    },
    {
        id: "mz-5",
        label: "CE",
        cells: [
            [    "r",      "",     "r",     "b",     "c",      ""],
            [    "r",     "r",     "r",      "",   "b r",      ""],
            [     "",   "b r",   "b r",     "r",      "",     "b"],
            [    "b",     "r",      "",     "r",     "r",      ""],
            [     "",   "b r", "c b r",     "r",     "b",      ""],
            [     "",      "",      "",     "r",      "",      ""]
        ]
    },
    {
        id: "mz-6",
        label: "CD",
        cells: [
            [    "r",      "",     "b",   "c r",      "",      ""],
            [     "",     "b",   "b r",     "b",   "b r",      ""],
            [    "r",      "",     "b",     "b",     "r",      ""],
            [    "r",     "b",   "c r",     "b",     "b",     "b"],
            [    "r",     "r",     "b",     "b",     "b",     "b"],
            [     "",      "",      "",      "",      "",      ""]
        ]
    },
    {
        id: "mz-7",
        label: "DE",
        cells: [
            [    "b",     "b",     "b",     "b",      "",      ""],
            [     "",     "b",     "b",      "",   "b r",     "b"],
            [     "",     "r",     "b",   "b r",     "c",      ""],
            [    "r",     "b",     "b",     "r",   "b r",      ""],
            [    "r",      "",     "b",     "b",   "b r",      ""],
            [    "r",      "",      "",     "c",      "",      ""]
        ]
    },
    {
        id: "mz-8",
        label: "DF",
        cells: [
            [     "",     "b",     "r",     "r",      "",      ""],
            [  "b r",     "r",     "r",     "b",   "b r",      ""],
            [     "",     "r",     "r",      "",     "r",      ""],
            [    "r",     "r",     "r",   "c r",     "r",   "c r"],
            [    "r",     "b",   "b r",     "r",     "r",      ""],
            [     "",      "",      "",     "r",      "",      ""]
        ]
    }
];

const Maze: React.FC = () => {
    const [positions, setPositions] = useState<{
        [key: string]: {
            player?: { row: number; col: number };
            goal?: { row: number; col: number };
        };
    }>({});

    const handleCellClick = (mazeId: string, row: number, col: number, isRightClick: boolean) => {
        setPositions(prev => {
            const mazeState = prev[mazeId] || {};
            const newState = { ...prev };
            const isGoal = mazeState.goal?.row === row && mazeState.goal?.col === col;
            const isPlayer = mazeState.player?.row === row && mazeState.player?.col === col;

            if (isRightClick) {
                newState[mazeId] = {
                    ...mazeState,
                    player: !isGoal && isPlayer ? undefined : mazeState.player,
                    goal: isGoal ? undefined : { row, col }
                };
            } else {
                newState[mazeId] = {
                    ...mazeState,
                    player: isPlayer ? undefined : { row, col },
                    goal: isGoal && !isPlayer ? undefined : mazeState.goal
                };
            }
            return newState;
        });
    };

    const resetPositions = () => setPositions({});

    return ( <>
        <h1>Maze</h1>
        <p>
            Left click a spot to mark the player's position, right click to mark the goal.
            Letters above the mazes are the columns of the marked circles.
        </p>
        <span className="outer">
            <span className="inner"> {mazes.map((maze) => (
                <span key={maze.id}>
                <p>{maze.label}</p>
                <table id={maze.id}>
                  <tbody>
                    {maze.cells.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => {
                                const isPlayer = positions[maze.id]?.player?.row === rowIndex &&
                                    positions[maze.id]?.player?.col === colIndex;
                                const isGoal = positions[maze.id]?.goal?.row === rowIndex &&
                                    positions[maze.id]?.goal?.col === colIndex;

                                return (
                                    <td
                                        key={colIndex}
                                        className={`${cell} ${isPlayer ? "player" : ""} ${isGoal ? "goal" : ""}`}
                                        onClick={() => handleCellClick(maze.id, rowIndex, colIndex, false)}
                                        onContextMenu={(e) => {
                                            e.preventDefault();
                                            handleCellClick(maze.id, rowIndex, colIndex, true);
                                        }}
                                    ></td>
                                );
                            })}
                        </tr>
                    ))}
                  </tbody>
                </table>
              </span>
            ))} </span>
            <button onClick={resetPositions}><span>Reset</span></button>
        </span>
        <style jsx>{`
            #m .outer {
                display: flex;
                flex-direction: column;
                gap: 1em;
                align-items: center;
                justify-content: center;
            }
            #m .inner { flex-wrap: wrap; }
            #m .inner > span {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            #m table {
                font-size: 1.5em;
                border: 1px solid var(--clr-overlay);
            }
            #m td {
                width: 1em;
                height: 1em;
                border: none;
                position: relative;
                cursor: pointer;
            }
            #m td::before {
                content: '';
                display: block;
                width: 0.15em;
                height: 0.15em;
                background-color: var(--clr-overlay);
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            #m .c::after {
                content: '';
                display: block;
                width: 0.75em;
                height: 0.75em;
                border: 1px solid var(--clr-green);
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            #m .b { border-bottom: 1px solid var(--clr-overlay); }
            #m .r { border-right: 1px solid var(--clr-overlay); }
            #m .player::before {
                width: 0.3em;
                height: 0.3em;
                background-color: var(--clr-text);
                border-radius: 20%;
            }
            #m .goal::before {
                width: 0;
                height: 0;
                background-color: transparent;
                border-bottom: 0.5em solid var(--clr-red);
                border-left: 0.25em solid transparent;
                border-right: 0.25em solid transparent;
                border-radius: 0;
            }
      `}</style>
    </> );
};

export default Maze;