<script>
    // PROPS //
    export let color;
    export let title;
    export let text;
    export let git;
    export let demo = null;
    export let img;
    export const id = null
    // IMPORTS //
    import Button from "./Button.svelte"
    // FUNCTIONS //
    import { detailAnimation } from '../constants/functions.js' 
</script>


<style>
    .detail-slide{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: auto;
        color: white;
        flex-wrap: wrap;
        position: relative;
        min-height: 90vh;
        margin-top: 25rem;

    }
    .img{
        height: 100%;
    }

    .text{
        flex: 1;
        position: relative;
        flex-basis: 25rem;
        width: 110%;
    }

    img{
        width: 95%;
        height:90%;
    }

    h1{
        font-size: 2rem;
        padding: 1rem 0rem;
        text-align: center;
    }

    p{
        font-size: 1rem;
        padding: 2rem 0rem;
        margin-bottom: -1rem;
        text-align: center;
    }

    .buttons{
        display: flex;
        z-index: 4;
        margin: 1rem;
        justify-content: center;
        height: auto;
    }

    @media (max-width: 768px){
        .buttons{
            justify-content: center;
            padding: 0.4rem .85rem;
            transform: translateY(3vh);
        }

        p{
            font-size: .8rem;
        }

        .img img {
            object-fit: scale-down;
        }
        .img{
        height: 250px;
        max-width: 650px;
        transform: translate(0, -6vh);
    }
    }

    @media (min-width:769px) and (max-width: 1100px){
        .buttons{
            transform: translateY(3vh);
        }

    }

    @media (min-width:1101px){

        .img{
            width: 50%;
            margin-left: 2rem;
        }

        .img img{
            width: 100%;
            min-height: 255px;
            max-height: 100%;
        }


    }
</style>

    <section use:detailAnimation class="slide detail-slide">
        <div class="text">
            <h1 style="color: {color}">{title}</h1>
            <p>{text}</p>
            <div class="buttons">
                <Button git href={git}/>
                {#if demo}
                <Button href={demo}/>
                {/if}
            </div>
        </div>

        <div class="img">
            <img src={img} alt={title} />
        </div>
    </section>
