<script>
    // // FUNCTIONS //
    import { animateSlide } from '../constants/functions.js'
    // PROPS //
    export const img = null;
    export const title1 = null;
    export const title2 = null;
    export const color = null;
    export const text = null;
    // CONSTANTS //
    import { information, technologies, toLearn } from '../constants/sections.js'
</script>


<style>
    .slide{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        min-height: 100vh;
        margin: 0 auto;
        width: 88%;
    }

    section{
        overflow-x: hidden;
    }

    .title{
        position: relative;
        overflow: hidden;

    }

    .hero-desc{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        flex-basis: 25rem;
        padding-left: 2rem;
        position: relative;
        transform: translate(0, -10%);
    }

    .hero-img{
        position: relative;
        flex: 1;
        flex-basis: 2rem;
        overflow: hidden;
    }

    img{
        width: 100%;
        height: 100%;
    }

    h2{
        font-family: 'Abril Fatface';
        font-size: 2.2rem;
    }

    p{
        padding: 1.5rem;
        font-size: 1.1rem;
    }

    .reveal-img,
    .reveal-text{
        position: absolute;
        background-color: #17181a;
        width: 102%;
        height: 120%;
        overflow: hidden;
        z-index: 2;
    }
    .title-swipe{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background: lightblue;
        mix-blend-mode: darken;
        transform: translateY(100%);
    }

    .t-swipe{
        background: rgb(86,124,228);
    }

    .img{
        width: 120px;
        height: 120px;
    }

    .tech{
        display: flex;
        margin: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .img img{
        height: 90%;
        object-fit: fill;
        width: 90%;
    }

    .learn{
        display: flex;
        flex-direction: row;
        margin-top: 1.5rem;
    }
    h4.heading:first-of-type{
        margin-top: 1rem;
    }
    
    .img p{
        padding: 5px 0px;
        margin-right: 5px;
        margin-top: .5rem;
        text-align: center;
    }


    @media (max-width: 900px){
        .slide{
            flex-direction: column-reverse;
        }
        .reveal-img{
            top: -1rem;
        }


        .reveal-text{
            top: 0rem;
            height: 90%;
        }

        .tech .img{
            width: 50px;
            margin: 0 0 0 1rem;
        }

        .learn .img{
            width: 60px;
            margin: 0;
        }

        .tech h4,
        .learn p{
            font-size: .65rem;
        }


        .hero-img img{
            width: 100%;
            overflow: visible;
        }

        .hero-img:nth-of-type(2){
            display: none;
        }

        .hero-desc{
            flex-basis: 12rem;
        }

        .tech img,
        .learn img{
            width: 45px;
            height: 45px;
        }

        .img img{
            object-fit: fill;

        }
    }
</style>




<!-- LOOPING THROUGH THE SECTIONS -->
{#each information as info (info.id)}
    <section class="slide" use:animateSlide>
        <div class="hero-img">
            <div class="reveal-img"></div>
            <img src={info.img} alt="avatar">
        </div>
        <div class="hero-desc">
            <div class="title" >
                <h2>{info.title1 + ""} <span style="color: {info.color}">{ info.title2 }</span></h2>
                <div style="background-color: {info.color}" class="title-swipe t-swipe"></div>
            </div>
            <h4 class="heading">{info.text}</h4>


        <!-- MY STACK -->
        {#if info.technologies == true}
        <div class="tech">
            {#each technologies as tech (tech.id)}
                    <div class="img">
                        <img src={tech.image} alt={tech.technology}>
                        <h4>{tech.technology}</h4>
                    </div>
            {/each}
        </div>
    

    
    <!-- TECHNOLOGIES TO LEARN -->
    <h4 class="heading">Technologies I'd like to learn</h4>
    <div class="learn">
            {#each toLearn as learn (learn.id)}
                <div class="img">
                    <img src={learn.image} alt={learn.technology}>
                    <p>{learn.technology}</p>
                </div>
            {/each}
        </div>
        {/if}

        <div class="reveal-text"></div>
    </div>
</section>
{/each}