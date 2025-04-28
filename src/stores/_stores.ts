import { atom } from 'nanostores';

export type ThemeValue = 'light' | 'dark'
export let theme: ThemeValue = atom('light');
