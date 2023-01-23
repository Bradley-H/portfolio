<script lang="ts">
    //props
    export let type: string;
    export let name: string;
    export let id: string;
    export let placeholder: string;
    export let value: string;
    export let label: string;
    export let error: string;
    //variables
    let touched: boolean = false;
</script>

<style lang="scss">
    @import "../scss/util/index.scss";
    label {
        font-size: toRem(13);
        color: white;
        margin-top: 0.3rem;
        text-shadow: 1px 1px black;
    }

    input,
    textarea {
        width: 100%;
        padding: 0.5rem;
        border: none;
        color: black;
        font-size: toRem(16);
        font-weight: 600;
        outline: none;
        &.error {
            border: toRem(3) solid $danger;
        }
        &.success {
            border: toRem(3) solid $success;
        }
    }
</style>

<label for={id}>{label}</label>
{#if type === "text"}
    <input class="{error}" type="text" on:input {placeholder} {id} {name} {value} />
{:else}
    <textarea class="{error}" on:input {placeholder} {value} {name} {id} cols="30" rows="5" />
{/if}
