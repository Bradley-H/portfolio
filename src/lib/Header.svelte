<script lang="ts">
    // CONSTANTS //
    import { links } from "../constants/links";
    // COMPONENTS //
    import Link from "$lib/Link.svelte";
    import Burger from "$lib/Burger.svelte";
    import Menu from "$lib/Menu.svelte";
    import Button from "$lib/Button.svelte";
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
        margin-left: 0.8rem;
        z-index: 80;
        transform: translateY(.4rem);

        a {
            text-decoration: none;
            transition: all 888ms linear;
            top: -0.05rem; 
            z-index: 5;
            color: $textColor;
            position: absolute;
            width: max-content;
            margin-top: .5rem;

        }

        .links {
            display: none;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            position: absolute;
            top: -0.1rem;
            @include desktopUp {
                display: flex;
            }
            div{
                margin: 0 1rem;
            }
        }
        .burger {
            position: absolute;
            right: 1rem;
            top: 0;
            width:toRem(55);
            height: 35px;
            @include centered;

            
            @include desktopUp {
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
        <div>
            <Link {...link} {active} on:click={() => active = link.href}/>
        </div>
        {/each}
        <Button href={"./Resume.pdf"} icon={"fas fa-file-pdf"} text="Resume" />
    </div>

</header>

{#if $globalStore.navActive}
<div class="menu" transition:fly|local={{duration: 750, x: 500}}>
    <Menu/>
</div>
{/if}