<script>
    // STORES //
    import { global } from '../stores/GlobalStore.js'
    import Burger from './Burger.svelte'
</script>


<style>
    .nav-header{
        min-height: 10vh;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        width: 95%;
        padding: .6rem .8rem;
        z-index: 77;
        position: fixed;
    }

    #logo{
        color: white;
        font-family: 'Abril Fatface';
    }
</style>


<header class="nav-header">
    <h1><a href="#!" 
        on:mouseover={() => $global.activeCursor = true} 
        on:mouseout={() => $global.activeCursor = false} 
        id="logo">BJH</a></h1>
    <Burger/>
</header>