<script>
    // PROPS //
    export let color;
    export let title;
    export let text;
    export let id;
    export let git;
    export let demo;
    export let img;
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
        height: 60vh;
        flex-basis: 56rem;
    }

    .text{
        flex: 1;
        position: relative;
        flex-basis: 25rem;
    }

    img{
        width: 95%;
        height:100%;
    }

    h1{
        font-size: 2rem;
        padding: 1rem 0rem;
    }

    p{
        font-size: 1.5rem;
        padding: 2rem 0rem;
        margin-bottom: -1rem;
        text-align: center;
    }

    .nr{
        font-size: 10rem;
        position: absolute;
        left: -4%;
        bottom: 1%;
        color: white;
        opacity: .7;
    }

    .buttons{
        z-index: 4;
        margin: 1rem;
        transform: translate(31%, -84vh);
    }
</style>

    <section use:detailAnimation class="slide detail-slide">
        <div class="text">
            <h1 style="color: {color}">{title}</h1>
            <p>{text}</p>
        </div>
        <div class="img">
            <img src={img} alt={title} />
            <div class="buttons">
                <Button git href={git}/>
                <Button href={demo}/>
            </div>
        </div>
        <div class="nr">
            <span>{id + 1}</span>
        </div>
    </section>
