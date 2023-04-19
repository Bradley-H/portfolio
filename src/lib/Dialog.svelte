<script lang="ts">
    // PROPS //
    export let text: string = ""
    // COMPONENTS //
    import Head from '$lib/Head.svelte'
</script>

<style lang="scss">
    @import "../scss/util/index.scss";


    .dialog{
        display: grid;
        position: relative;
        place-self: center;
        top: -7.25rem;
        min-width: 250px;
        max-width: toRem($maxContainer);
        color:white;
        align-self: center;
        text-align: left;
    }
div{
        display:flex;
        flex-direction: column;
        border: double thick white;
        width: 93%;
        margin: 0 auto;
        overflow: hidden;
        @include tabletUp{
            width: 95%;
        }
    }

    .head{
        display: flex;
        width: toRem(55);
        height: toRem(80);
        border: none;
        margin-left: .5rem;
    }
    h5{
        position: absolute;
        font-size: .68rem;
        letter-spacing: toRem(1);
        line-height: 1.5;
        color: $textColor;
        max-width: max-content;
        word-break: keep-all;
        margin-left: 4.5rem;
        margin-top: .4rem;
        @include tablet{
            width: 80%;
            font-size: .8rem;
            line-height: 1.6;
        }
        @include laptopUp{
            font-size: .95rem;
        }
    }
</style>


<div class="dialog">
    <div class="head">
        <Head/>
    </div>
        <h5>{text}</h5>
    <slot></slot>
</div>