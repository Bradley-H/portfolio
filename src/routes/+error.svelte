<script>
    import Dialog from "$lib/Dialog.svelte";
    import { onMount } from "svelte";
    onMount(() => {
        setTimeout(() => {
        window.location.href = "/";
        }, 3000);
    });
</script>


<style></style>


<Dialog text={"Page not found, I'll redirect you in a 3 seconds :)"}/>