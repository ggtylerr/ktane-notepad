import React, { useState } from "react";

interface RowData {
    label: string;
    cells: string[];
}

const data: RowData[] = [
    { label: "1st", cells: ["C", "B", "A, B, C"] },
    { label: "2nd", cells: ["B", "A, C", "A, C"] },
    { label: "3rd", cells: ["A", "B", "B"] },
    { label: "4th", cells: ["A, C", "A", "A, C"] },
    { label: "5th", cells: ["B", "B", "B"] },
    { label: "6th", cells: ["A, C", "B, C", "B, C"] },
    { label: "7th", cells: ["A, B, C", "C", "A, B"] },
    { label: "8th", cells: ["A, B", "A, C", "C"] },
    { label: "9th", cells: ["B", "A", "C"] },
];

const WireSequences: React.FC = () => {
    const numRows = data.length;
    const numCols = 3; // for Red, Blue, Black columns

    // Create a 2D state array for selection: each cell is false (unselected) by default.
    const [selected, setSelected] = useState(
        Array(numRows)
            .fill(null)
            .map(() => Array(numCols).fill(false))
    );

    const handleCellClick = (rowIndex: number, colIndex: number) => {
        setSelected((prev) => {
            // copy state to update immutably
            const newSelected = prev.map((row) => [...row]);
            if (prev[rowIndex][colIndex]) {
                // If the clicked cell is already selected, deselect it and every cell below in that column.
                for (let i = rowIndex; i < numRows; i++) {
                    newSelected[i][colIndex] = false;
                }
            } else {
                // If not selected, select this cell and every cell above (from the first data row to the clicked one).
                for (let i = 0; i <= rowIndex; i++) {
                    newSelected[i][colIndex] = true;
                }
            }
            return newSelected;
        });
    };

    const handleReset = () => {
        setSelected(
            Array(numRows)
                .fill(null)
                .map(() => Array(numCols).fill(false))
        );
    };

    return (<>
        <h1>Wire Sequences</h1>
        <p>Click to mark</p>
        <table>
            <thead>
            <tr>
                <th className="corner"></th>
                <th className="red">Red</th>
                <th className="blue">Blue</th>
                <th className="black">Black</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={row.label}>
                    <td>{row.label}</td>
                    {row.cells.map((cellContent, colIndex) => {
                        // Determine a color class for the cell based on its column.
                        const colorClass =
                            colIndex === 0 ? "red" : colIndex === 1 ? "blue" : "black";
                        return (
                            <td
                                key={colIndex}
                                className={`${colorClass} ${
                                    selected[rowIndex][colIndex] ? "selected" : ""
                                }`}
                                onClick={() => handleCellClick(rowIndex, colIndex)}
                            >
                                {cellContent}
                            </td>
                        );
                    })}
                </tr>
            ))}
            </tbody>
        </table>
        <div className="inner">
            <button onClick={handleReset}>
                <span>Reset</span>
            </button>
        </div>
        <style jsx>{`
            #m {
                width: 100%;
            }
            #m table {
                width: 100%;
                border-collapse: collapse;
                table-layout: fixed;
            }
            #m th, #m td {
                padding: 0.5em 0;
                text-align: center;
                border: 1px solid transparent;
            }
            .corner { border: none !important; }
            .selected { color: var(--clr-bg) !important; }
            td.red { background-color: var(--clr-red-trans0); }
            td.blue { background-color: var(--clr-blue-trans0); }
            td.black { background-color: var(--clr-black-trans0); }
            td.red.selected {  background-color: var(--clr-red-trans1) !important; }
            td.blue.selected { background-color: var(--clr-blue-trans1) !important; }
            td.black.selected {
                background-color: var(--clr-black-trans1) !important;
                color: var(--clr-text) !important;
            }
            #m .inner {
                display: flex;
                justify-content: space-evenly;
                gap: 1em;
                margin-top: 1em;
            }
        `}</style>
    </> );
};

export default WireSequences;
