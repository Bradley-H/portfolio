<script lang="ts">
    // STORES //
    import { globalStore } from "../stores/globalStore";
</script>

<style lang="scss">
   @import "../scss/util/index.scss";


    .burger {
        margin-top: .35rem;
        margin-left: 1.25rem;
    }

    .line {
        width: toRem(28);
        height: toRem(5);
        background-color: white;
        margin-top: toRem(5);
        transition: 888ms linear;
    }

    .burger.active .line {
        background-color: black;
    }

    .burger.active .line,
    .active .line:last-child {
        transition: $primaryTransition;
    }

    .active .line:last-child {
        transform: translateX(6rem);
        opacity: 0;
    }

    .active .line:first-of-type,
    .active .line:nth-of-type(2) {
        transition: $secondaryTransition;
    }

    .active .line:first-of-type {
        transform: rotate(50deg) translateY(7px);
    }

    .active .line:nth-of-type(2) {
        transform: rotate(-50deg) translateY(-8px);
    }
</style>


<div on:mousedown={() => $globalStore.navActive = !$globalStore.navActive} class:active={$globalStore.navActive} class="burger" >
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>

