<script lang="ts">
    //props
    export let type: string;
    export let name: string;
    export let id: string;
    export let placeholder: string;
    export let value: FormDataEntryValue = "" // this'll bind to the value in the page;
    export let label: string;
    export let error: string; // this'll pass an error ( red border ) if it's not a satisfied input
    //variables
    let touched: boolean = false;
</script>

<style lang="scss">
    @import "../scss/util/index.scss";
    div{
        width: 100%;
    }
    label {
        font-size: toRem(13);
        color: white;
        margin-top: .3rem;
        text-shadow: 1px 1px black;
        @include desktopUp{
            font-size: toRem(15);
        }
    }

    input,
    textarea {
        width: 100%;
        padding: 0.5rem;
        border: none;
        color: black;
        font-size: toRem(16);
        font-weight: bold;
        outline: none;
        margin-top: .25rem;
        &.error {
            border: toRem(3) solid $danger;
        }
        &.success {
            border: toRem(3) solid $success;
        }
        &:last-of-type{
                margin-bottom: 1rem;
        }
    }

    textarea{
        resize: none;
    }
</style>



<div>
    <label for={id}>{label}</label>
    {#if type === "text"}
        <input
            class={error}
            type="text"
            on:input
            {placeholder}
            {id}
            {name}
            bind:value={value}
        />
    {:else}
        <textarea
            class={error}
            on:input
            {placeholder}
            bind:value={value}
            {name}
            {id}
            rows="4"
        />
    {/if}
</div>
