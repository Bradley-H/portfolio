<script lang="ts">
    // IMPORTS //
    import Card from "$lib/Card.svelte";
    import Me from "$lib/Me.svelte";
    import Dialog from "$lib/Dialog.svelte";
    import type { ServerData } from "@sveltejs/kit/types/internal";
    // FUNCTIONS //
    export let data: ServerData;
</script>

<svelte:head>
    <title>[B-J-H] - Portfolio</title>
</svelte:head>

<style lang="scss">
    @import "../../scss/util/index.scss";
    span {
        display: flex;
        height: toRem(($portfolioLength * $cardHeight * $cardMargin * 1.75));
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        z-index: 2;
        position: relative;
        height: max-content;
        margin-bottom: 4rem;
        @include tabletUp {
            display: flex;
            flex-wrap: wrap;
        }
    }
    .cliff {
        background-color: $groundColor;
        z-index: 56;
        width: 4rem;
        @include tabletUp {
            width: 6rem;
        }
    }
    .me {
        position: relative;
        bottom: 9.35rem;
        transform: scale(0.5);
        margin-left: .2rem;
    }
</style>
<Dialog text={"This is the portfolio valley."}/>
<span>
    <div class="cliff">
        <div class="ground">
            <div class="me">
                <Me/>
            </div>
        </div>
    </div>
    
    <div class="grid">
        {#each data.props.items as {title, img, }, i (i) }
            <Card {img} {title} href={`portfolio/${title.split(" ").join("-")}`}/>
        {/each}
    </div>    
</span>