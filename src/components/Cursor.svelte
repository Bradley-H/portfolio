<script>
    // STORE //
    import { global } from '../stores/GlobalStore.js'
    // FUNCTIONS //
    import { cursor } from '../constants/functions.js'
</script>


<style>
    .cursor{
        width: 3.3rem;
        height: 3rem;
        border: 2px solid white;
        position: absolute;
        border-radius: 55%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        transition: background-color, transform 300ms ease-in-out;
        transform-origin: 120% 120%;
        z-index: 2;
    }

    .nav-active{
        background-color: rgb(86, 124, 222);
        transform: scale(1.7);
    }

    .cursor-text{
        content: "Tap";
        color: rgb(231, 229, 229);
        font-size: .8rem;
        position: absolute;
        top: 30%;
        left: 28%;
    }

    @media (max-width: 900px){
        .cursor{
            display: none;
        }
    }
</style>

<svelte:window on:mousemove="{cursor}"/>


<div class:nav-active={$global.activeCursor} class="cursor">
    <div class="cursor-text">{$global.activeCursor ? "Tap" : ""}</div>
</div>