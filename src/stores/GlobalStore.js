import { writable } from 'svelte/store'


export let global = writable({
    // WHEN HOVER OVER LOGO AND BURGER //
    activeCursor: false
})

