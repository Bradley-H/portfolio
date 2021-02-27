<script>
    // STORES //
    import { global } from '../stores/GlobalStore.js'
    import { navToggle } from '../constants/functions.js'

    </script>


<style>
    .burger{
        cursor: pointer;
        z-index: 3;
    }

    .line1,
    .line2,
    .line3{
        background-color: white;
        height: 2px;
        margin: .4rem;
        pointer-events: none;
    }
    .line1{
        width: 1.5rem;
    }
    .line2{
        width: 1rem;
    }
    .line3{
        width: .6rem;
    }

</style>


<div class="burger" 
        on:click={navToggle}
        on:mouseout={() => $global.activeCursor = false} 
        on:mouseover={() => $global.activeCursor = true}>
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
</div>