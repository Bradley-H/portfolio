<script>
    // STORES //
    import { global } from '../stores/GlobalStore.js'
    // PROPS
    export let git = null
    export let href = null
</script>


<style>
.btn{
    border: 2px solid #bdbdbda2;
    padding: 1rem 2rem;
    color: white;
    background-color: transparent;
    cursor: pointer;
    transition: all 400ms ease-in-out;
    margin-right: 1.3rem;
    margin-left: 1.5rem;
    text-decoration: none;
    height: auto;
    text-align: center;
}

.btn:hover{
border: 2px solid rgba(133, 133, 133, 0.486);
color: white;
}
</style>



<a class="btn" {href}
on:mouseout={() => $global.activeCursor = false} 
on:mouseover={() => $global.activeCursor = true}>{git ? "Git Respository" : "Demo"}
</a>