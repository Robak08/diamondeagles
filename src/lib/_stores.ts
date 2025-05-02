import { atom } from 'nanostores';

export type ThemeValue = 'light' | 'dark' | null;
export let theme: ThemeValue = atom(null);
