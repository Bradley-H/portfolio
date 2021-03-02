<script>
    // CONSTANT IMPORTS //
    import { links } from '../constants/links.js'
</script>


<style>
    .nav-bar{
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 4;
        opacity: 1;
        clip-path: circle(2px at 100% -10%);
        -webkit-clip-path: circle(2px at 100% -10%);
    }

    a.nav-links{
        font-size: 2rem;
        flex-basis: 20rem;
    }

    .contact{
        flex-basis: 30rem;
    }
    h2{
        font-size: 3rem;
        padding: 1.5rem 0;
    }
</style>


<nav class="nav-bar">
    <ul>
        {#each links as link}
            <a class="nav-links" href="{link.href}">{link.text}</a>
        {/each}
    </ul>
    <div class="contact">
        <h2>Stay in touch</h2>
    </div>
</nav>