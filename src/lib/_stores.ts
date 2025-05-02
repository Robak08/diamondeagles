import { atom } from 'nanostores';

export type ThemeValue = 'light' | 'dark' | null;
export let themeStore: ThemeValue = atom(null);