<script lang="ts">
    // IMPORTS //
    import Dialog from "$lib/Dialog.svelte";
    // svelte imports //
    import { page } from '$app/stores';
    // lifecycle imports //
    import { onMount } from "svelte";
    onMount(() => {
        setTimeout(() => {
        window.location.href = "/portfolio";
    }, 3000);
    });
    // SCSS DEFINITIONS //
    import "../../../styles.scss";

</script>


<style></style>


<Dialog text={$page.error?.message}/>