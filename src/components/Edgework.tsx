import React, { useState } from 'react';
import { edge, edgeConfig } from '../scripts/store';

type EdgeState = {
    sn: string;
    batteries: { aa: number; d: number };
    ports: { [key: string]: number };
    indicators: { [key: string]: { lit: boolean; present: boolean } };
    strikes: number;
    modules: number;
};

const processSN = (v: string) =>
    v.replace(/[^\w\d]/g, '').toUpperCase().slice(0, 6);

const processAA = (v: string) => {
    const num = parseInt(v) || 0;
    // Ensures the number is even (if odd, adds 1)
    return Math.max(0, num + (num % 2));
};

const EdgeForm: React.FC = () => {
    const [state, setState] = useState<EdgeState>(edge.get());
    const portsConfig = edgeConfig.ports;
    const indicatorsConfig = edgeConfig.indicators;

    const updateState = (newState: EdgeState) => {
        setState(newState);
        edge.set(newState);
        console.log(edge.get());
    };

    const add = (id: string, id2?: string, sub?: boolean) => {
        const newState = { ...state };
        const val = ((id2 === "aa") ? 2 : 1) * (sub ? -1 : 1);
        console.log(val);
        if (newState.hasOwnProperty(id)) {
            if (id2 && (newState as any)[id].hasOwnProperty(id2))
                (newState as any)[id][id2] = Math.max(0, (newState as any)[id][id2] + val);
            else (newState as any)[id] = Math.max(0, (newState as any)[id] + val);
        }
        updateState(newState);
    }

    const sub = (id: string, id2?: string) => add(id, id2, true);

    return (
        <section className="edge-form" id="edgework">
            {/* Serial Number */}
            <div className="center">
                <div className="input-group">
                    <label htmlFor="edgeSN">SN</label>
                    <div className="prlgm input-text">
                        <input
                            id="edgeSN"
                            type="text"
                            value={state.sn}
                            style={{width: "7ch", textAlign: "center"}}
                            onChange={(e) => {
                                const newSN = processSN(e.target.value);
                                updateState({ ...state, sn: newSN });
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Batteries */}
            <div className="inner">
                <div className="input-group">
                    <label htmlFor="edgeAA">AA</label>
                    <button className="input-before" onClick={() => sub("batteries","aa")}>
                        <span>-</span>
                    </button>
                    <div className="prlgm input-text num">
                        <input
                            id="edgeAA"
                            type="number"
                            min={0} step={2}
                            value={state.batteries.aa}
                            onChange={(e) => {
                                const newAA = processAA(e.target.value);
                                updateState({
                                    ...state,
                                    batteries: { ...state.batteries, aa: newAA },
                                });
                            }}
                        />
                    </div>
                    <button className="input-after" onClick={() => add("batteries","aa")}>
                        <span>+</span>
                    </button>
                </div>
                <div className="input-group">
                    <label htmlFor="edgeD">D</label>
                    <button className="input-before" onClick={() => sub("batteries","d")}>
                        <span>-</span>
                    </button>
                    <div className="prlgm input-text num">
                        <input
                            id="edgeD"
                            type="number"
                            min={0}
                            value={state.batteries.d}
                            onChange={(e) => {
                                const newD = parseInt(e.target.value) || 0;
                                updateState({
                                    ...state,
                                    batteries: { ...state.batteries, d: newD },
                                });
                            }}
                        />
                    </div>
                    <button className="input-after" onClick={() => add("batteries","d")}>
                        <span>+</span>
                    </button>
                </div>
            </div>

            {/* Ports */}
            <div className="center">
            {portsConfig.map(({ label, id, prop }) => (
                <div className="input-group" key={id}>
                    <label htmlFor={`edge${id}`}>{label}</label>
                    <button className="input-before" onClick={() => sub("ports",prop)}>
                        <span>-</span>
                    </button>
                    <div className="prlgm input-text num">
                        <input
                            id={`edge${id}`}
                            type="number"
                            min={0}
                            value={state.ports[prop]}
                            onChange={(e) => {
                                const newPort = parseInt(e.target.value) || 0;
                                updateState({
                                    ...state,
                                    ports: { ...state.ports, [prop]: newPort },
                                });
                            }}
                        />
                    </div>
                    <button className="input-after" onClick={() => add("ports",prop)}>
                        <span>+</span>
                    </button>
                </div>
            ))}
            </div>

            {/* Indicators */}
            <div className="center">
            {indicatorsConfig.map((indicator) => {
                const key = indicator.toLowerCase();
                return (
                    <div className="input-group" key={indicator}>
                        <label htmlFor={`edge${indicator}`}>
                            {indicator.toUpperCase()}
                        </label>
                        <div className="prlgm input-text">
                            <input
                                id={`edge${indicator}`}
                                type="checkbox"
                                checked={state.indicators[key].present}
                                onChange={(e) => {
                                    const checked = e.target.checked;
                                    // When unchecked, also uncheck "lit"
                                    const newIndicators = { ...state.indicators };
                                    newIndicators[key].present = checked;
                                    if (!checked && newIndicators[key].lit) {
                                        newIndicators[key].lit = false;
                                    }
                                    updateState({ ...state, indicators: newIndicators });
                                }}
                            />
                            <span className="checkmark"></span>
                        </div>
                        <div className="prlgm input-text">
                            <input
                                id={`edge${indicator}Lit`}
                                type="checkbox"
                                checked={state.indicators[key].lit}
                                onChange={(e) => {
                                    const checked = e.target.checked;
                                    // When checking "lit", also ensure "present" is true
                                    const newIndicators = { ...state.indicators };
                                    newIndicators[key].lit = checked;
                                    if (checked && !newIndicators[key].present) {
                                        newIndicators[key].present = true;
                                    }
                                    updateState({ ...state, indicators: newIndicators });
                                }}
                            />
                            <span className="checkmark"></span>
                        </div>
                        <label htmlFor={`edge${indicator}Lit`}>LIT</label>
                    </div>
                );
            })}
            </div>

            {/* Extras */}
            <div className="center">
                <div className="input-group">
                    <label htmlFor="edgeStrikes">Strikes</label>
                    <button className="input-before" onClick={() => sub("strikes")}>
                        <span>-</span>
                    </button>
                    <div className="prlgm input-text num">
                        <input
                            id="edgeStrikes"
                            type="number"
                            min={0}
                            value={state.strikes}
                            onChange={(e) => {
                                const newStrikes = parseInt(e.target.value) || 0;
                                updateState({ ...state, strikes: newStrikes });
                            }}
                        />
                    </div>
                    <button className="input-after" onClick={() => add("strikes")}>
                        <span>+</span>
                    </button>
                </div>
                <div className="input-group">
                    <label htmlFor="edgeModules">Modules</label>
                    <button className="input-before" onClick={() => sub("modules")}>
                        <span>-</span>
                    </button>
                    <div className="prlgm input-text num">
                        <input
                            id="edgeModules"
                            type="number"
                            min={0}
                            value={state.modules}
                            onChange={(e) => {
                                const newModules = parseInt(e.target.value) || 0;
                                updateState({ ...state, modules: newModules });
                            }}
                        />
                    </div>
                    <button className="input-after" onClick={() => add("modules")}>
                        <span>+</span>
                    </button>
                </div>
            </div>

            <style jsx>{`
        section.edge-form {
          width: 22.5%;
          height: calc(100vh - 10px);
          position: sticky;
          overflow-y: auto;
          top: 0;
          padding: 5px;
          background-color: var(--clr-surface);
          align-self: flex-start;
        }
        .input-group {
          margin: 0.5rem 0;
        }
        #edgework .center {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        #edgework .center > * {
            margin-left: auto;
            margin-right: 33.33%;
        }
      `}</style>
        </section>
    );
};

export default EdgeForm;
