import {
  writable
} from 'svelte/store';

export const address = writable('');
export const locations = writable([]);
export const mylocation = writable();
export const loading = writable(false);