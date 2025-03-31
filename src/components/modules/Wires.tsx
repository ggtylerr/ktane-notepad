import React, { useEffect, useState } from 'react';
import { edge } from '../../scripts/store';

const Wires: React.FC = () => {
    const [classSN, setSN] = useState<string>('redBG');

    useEffect(() => {
        const sub = edge.subscribe((val: { sn: string }) => {
            const sn = val.sn;
            const last = sn.match(/\d+$/);
            setSN(last && parseInt(last[0]) % 2 === 1 ? 'greenBG' : 'redBG');
        });
        return () => sub();
    }, []);

    return ( <>
        <h1>Wires</h1>
        <table>
            <tr className="big">
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
            </tr>
            <tr className="noBorder">
                <td><table>
                    <tr>
                        <td>
                            <span className="blue">blue</span>{', '}
                            <span className="blue">blue</span>{', '}
                            <span className="red">red</span>
                        </td>
                        <td>2nd</td>
                    </tr>
                    <tr>
                        <td>no <span className="red">red</span></td>
                        <td>2nd</td>
                    </tr>
                    <tr>
                        <td>else</td>
                        <td>3rd</td>
                    </tr>
                </table></td>
                <td><table>
                    <tr>
                        <td>
                            ≥2 <span className="red">red</span>{' & '}
                            <span className={classSN}>SN odd</span>
                        </td>
                        <td>
                            last <span className="red">red</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            last <span className="yellow">yellow</span>{' & '}
                            no <span className="red">red</span>
                        </td>
                        <td>1st</td>
                    </tr>
                    <tr>
                        <td>1 <span className="blue">blue</span></td>
                        <td>1st</td>
                    </tr>
                    <tr>
                        <td>≥2 <span className="yellow">yellow</span></td>
                        <td>4th</td>
                    </tr>
                    <tr>
                        <td>else</td>
                        <td>2nd</td>
                    </tr>
                </table></td>
                <td><table>
                    <tr>
                        <td>
                            last <span className="black">black</span>{' & '}
                            <span className={classSN}>SN odd</span>
                        </td>
                        <td>4th</td>
                    </tr>
                    <tr>
                        <td>
                            1 <span className="red">red</span>{' & '}
                            ≥2 <span className="yellow">yellow</span>
                        </td>
                        <td>1st</td>
                    </tr>
                    <tr>
                        <td>no <span className="black">black</span></td>
                        <td>2nd</td>
                    </tr>
                    <tr>
                        <td>else</td>
                        <td>1st</td>
                    </tr>
                </table></td>
                <td><table>
                    <tr>
                        <td>
                            no <span className="yellow">yellow</span>{' & '}
                            <span className={classSN}>SN odd</span>
                        </td>
                        <td>3rd</td>
                    </tr>
                    <tr>
                        <td>
                            1 <span className="yellow">yellow</span>{' & '}
                            ≥2 <span className="white">white</span>
                        </td>
                        <td>4th</td>
                    </tr>
                    <tr>
                        <td>no <span className="red">red</span></td>
                        <td>6th</td>
                    </tr>
                    <tr>
                        <td>else</td>
                        <td>4th</td>
                    </tr>
                </table></td>
            </tr>
        </table>
        <style jsx>{`
            #m th, #m td {
              padding: 0.5rem;
              vertical-align: top;
              text-align: center;
            }
            #m .big * {
              font-size: 1.5rem;
            }
            #m .big * , #m .noBorder > * {
              border: none !important;
            }
      `}</style>
    </> );
};

export default Wires;
