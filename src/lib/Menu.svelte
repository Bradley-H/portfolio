<script lang="ts">
// CONSTANTS //
import {links} from '../constants/links'
// SVELTE IMPORTS //
import {page} from '$app/stores';
// COMPONENTS //
import Link from '$lib/Link.svelte'
// VARIABLES //
let active = $page.url.pathname
// STORES //
import {globalStore} from '../stores/globalStore'
</script>

<style lang="scss">
    @import "../scss/util/index.scss";


div{
    background-color: white;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 80;
    h4{
        text-align: center;
        color: $lightOrange;
    }

    .links{
        @include centered;
        flex-direction: column;
        color: black;
    }
}
</style>

<div class="menu">

    <div class="links">
        <h4>Select a Level</h4>
        {#each links as link, i (i) }
            <Link text={link.text} href={link.href} menu {active}
            on:click={() => $globalStore.navActive = false}
            on:click={() => active = link.href}/>
        {/each}

        
    </div>

</div>