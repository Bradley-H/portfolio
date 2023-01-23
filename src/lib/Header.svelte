<script lang="ts">
    // CONSTANTS //
    import { links } from "../constants/links";
    // COMPONENTS //
    import Link from "$lib/Link.svelte";
    import Burger from "$lib/Burger.svelte";
    import Menu from "$lib/Menu.svelte";
    // STORES //
    import { globalStore } from "../stores/globalStore";
    // SVELTE IMPORTS //
    import { fly } from "svelte/transition";
    import {page} from '$app/stores';
    // VARIABLES //
    let active = $page.url.pathname || "/portfolio";
    // MISC IMPORTS //
    import gsap from "gsap";
    // FUNCTIONS //
    function run(){
        console.log(gsap);
    }
</script>

<style lang="scss">
    @import "../scss/util/index.scss";

    header {
        display: flex;
        margin-top: 0.75rem;
        margin-left: 0.8rem;
        z-index: 80;

        a {
            text-decoration: none;
            transition: all 888ms linear;
            top: -0.05rem; 
            z-index: 5;
            color: $textColor;
            position: relative;
            width: max-content;

        }

        .links {
            display: none;
            justify-content: space-evenly;
            width: 100%;
            position: relative;
            top: -0.1rem;
            @include laptopUp {
                display: flex;
            }
        }
        .burger {
            position: absolute;
            right: 1rem;
            top: 0;
            width:toRem(55);
            height: 35px;
            @include centered;

            
            @include laptopUp {
                display: none;
            }
        }
    }

    .menu{
        z-index: 70;
        height: 100%;
        width: 100%;
        inset: 0;
        position: absolute;
    }
</style>


<header>
    <div class="burger">
        <Burger  />
    </div>
    <a href="/" on:click={() => active = "/"}>B-J-H</a>

    <div class="links">
        {#each links as link, i (i)}
            <Link {...link} {active} on:click={() => active = link.href}/>
        {/each}
    </div>

</header>

{#if $globalStore.navActive}
<div class="menu" transition:fly|local={{duration: 750, x: 500}}>
    <Menu/>
</div>
{/if}