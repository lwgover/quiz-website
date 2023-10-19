//taken from https://github.com/connorrothschild/.com/ I'm not sure what this does yet. Will update once I figure out
import { writable, readable } from "svelte/store";
import { spring,tweened } from 'svelte/motion';

export const currentIcon = writable("");

export const pageTransitionDelay = readable(900);
export const menuExpanded = writable(false);

export const windowWidth = writable(0);
export const windowHeight = writable(0);

export const isTouchscreen = writable(false);
export const cursor_size = writable(spring(15));
export const cursor_color = writable("#fff")
export const curr_quiz = writable("");
export const quiz_data = writable(null);
export const user = writable(null);