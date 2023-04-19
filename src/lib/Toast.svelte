<script lang="ts">
export let success: boolean = false;
export let text: string = "";

</script>

<div class="toast {success ? "success" : "error"}">
    <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22.903" height="19.395">
        {#if success === true}
        <path stroke="lime" fill="lime" d="M22.903 2.828 20.075 0 6.641 13.435 3.102 9.09 0 11.616l6.338 7.779L22.903 2.828z"/>
        {:else if success === false}
        <path stroke="red" fill="red" d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/>
        {/if}
    </svg>
    </div>
    <h5>{text}</h5>
</div>

<style lang="scss">
    @import "../scss/util/index.scss";
    .toast {
        display: flex;
        gap: toRem(15);
        background-color: white;
        height: max-content;
        min-width: toRem(120);
        max-width: clamp(toRem(100), 100%, toRem(300));
        padding: toRem(6);
        transform: translateY(-3rem);
        margin: 0 .5rem;
        &.error{
            border: 3px solid $danger;
            max-width: toRem(480);
        }
        &.success{
            border: 3px solid $success;
        }
        .icon{
            @include centered;
        }
        h5{
            line-height: 1.5;
        }
    }
</style>
