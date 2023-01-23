<script lang="ts">
    import { globalStore } from "../stores/globalStore";
    // props
    export let size: string = "";
    export let text: string = "";
</script>

<style lang="scss">
    @import "../scss/util/index.scss";
h1,h2,h3,h4,h5,h6,p{
    color: $textColor;
    transition: $primaryTransition;
    &.night{
        color: white;
    }
}
</style>

<svelte:element this={size} class:night={$globalStore.theme === "night"}>
{text}
</svelte:element>