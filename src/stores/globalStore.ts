import {writable}from 'svelte/store';

export let globalStore = writable({
    navActive: false,
})