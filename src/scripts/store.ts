import {atom, type PreinitializedWritableAtom} from 'nanostores';

export interface EdgeData {
    sn: string;
    batteries: { aa: number; d: number; };
    ports: { [key: string]: number; };
    indicators: { [key: string]: { lit: boolean; present: boolean; }; };
    strikes: number;
    modules: number;
}

export const edge: PreinitializedWritableAtom<EdgeData> = atom({
    sn: "000000",
    batteries: {
        aa: 0,
        d: 0
    },
    ports: {
        dvid: 0,
        parallel: 0,
        ps2: 0,
        rj45: 0,
        serial: 0,
        stereo: 0
    },
    indicators: {
        bob: { lit: false, present: false },
        car: { lit: false, present: false },
        clr: { lit: false, present: false },
        frk: { lit: false, present: false },
        frq: { lit: false, present: false },
        ind: { lit: false, present: false },
        msa: { lit: false, present: false },
        nsa: { lit: false, present: false },
        sig: { lit: false, present: false },
        snd: { lit: false, present: false },
        trn: { lit: false, present: false }
    },
    strikes: 0,
    modules: 0
});

export const edgeConfig = {
    ports: [
        { label: 'DVI-D', id: 'DVI-D', prop: 'dvid' },
        { label: 'Parallel', id: 'Parallel', prop: 'parallel' },
        { label: 'PS/2', id: 'PS/2', prop: 'ps2' },
        { label: 'RJ-45', id: 'RJ-45', prop: 'rj45' },
        { label: 'Serial', id: 'Serial', prop: 'serial' },
        { label: 'Stereo RCA', id: 'Stereo', prop: 'stereo' },
    ],
    indicators: ['BOB', 'CAR', 'CLR', 'FRK', 'FRQ', 'IND', 'MSA', 'NSA', 'SIG', 'SND', 'TRN']
}