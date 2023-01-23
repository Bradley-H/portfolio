<script lang="ts">
    // COMPONENTS //
    import Button from './Button.svelte';
    // PROPS //
    export let img:string = "";
    export let title:string = "";
    export let href: string = ""
</script>


<style lang="scss">
    @import "../scss/util/index.scss";

    .card{
        border: toRem(2) solid white;
        background-color: $darkOrange;
        margin: 1rem 0 .75rem .5rem;
        width: toRem(275);
        height: toRem($cardHeight);
  
        .img{
            h3{
                color: white;
                text-align: center;
                font-size: .85rem;
                text-shadow: 1px 1px black;
                margin-top: .4rem;
            }
            img{
                width: 100%;
                height: toRem(150);
            }
        }
        .buttons{
            display: flex;
            justify-content: center;
            margin: .4rem 0;
        }
    }
</style>


    <div class="card">
        <div class="img">
            <img src="{img}.webp" alt={`${title} image`}>
            <h3>{title}</h3>
        </div>
        <div class="buttons">
            <Button icon="fas fa-info" {href} other on:click text="More Info"/>
        </div>
    </div>