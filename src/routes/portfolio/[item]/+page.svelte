<script lang="ts">
    // IMPORTS //
    import Dialog from "$lib/Dialog.svelte";
    import Button from "$lib/Button.svelte";
    //PROPS //
    import type { ServerData } from "@sveltejs/kit/types/internal";
    export let data: ServerData;
    // SCSS DEFINITIONS //
    import "../../../styles.scss";
    $: console.log(data.props.item);
    
</script>

<style lang="scss">
    @import "../../../scss/util/index.scss";
    .container {
        @extend %flexCol;
        align-self: center;
        text-align: left;
        width: 93%;
        min-width: toRem(250);
        max-width: toRem($maxContainer);
        position: relative;
        transform: translateY(-6.5rem);
        @include tabletUp {
            width: 95%;
        }
        .upperContent {
            @extend %flexCol;
            justify-content: center;
            margin-top: 2.5rem;
            text-align: center;
            @include tabletUp {
                gap: toRem(30);
            }
            @include desktopUp {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
            &_piece {
                @extend %flexCol;
                @include centered;
                gap: toRem(12);
                img {
                    border: 3px solid white;
                    width: toRem(330);
                    @include laptopUp {
                        width: 450px;
                    }
                    @include desktopUp {
                        width: 440px;
                    }
                }
                h3 {
                    @extend %flex;
                    margin: 1.1rem 0;
                    color: white;
                    text-shadow: 1px 1px 3px black;
                    @include laptopUp {
                        display: none;
                    }
                }
            }
            &_tech {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
                place-items: center;
                margin: 0 0 1.4rem 0;
                @include laptopUp {
                    display: flex;
                    justify-content: center;
                    grid-template-columns: unset;
                    gap: toRem(100);

                }
                &_item {
                    @extend %flexCol;
                    height: max-content;
                    text-align: center;
                    align-items: center;
                    gap: toRem(5);
                    h5 {
                        @include tabletUp {
                            font-size: 1rem;
                        }
                    }
                    img {
                        aspect-ratio: 1/1;
                        width: toRem(51);
                        @include laptopUp {
                            width: toRem(60);
                        }
                        @include desktopUp {
                            width: toRem(65);
                        }
                    }
                }
            }
        }

        .information {
            text-align: center;
            padding: toRem(10);
            h4 {
                display: none;
                margin: 1.4rem 0;
                font-size: 1.2rem;
                color: white;
                @include laptopUp {
                    display: flex;
                    justify-content: center;
                }
            }
            &_text {
                h3 {
                    font-size: 0.9rem;
                    line-height: 2.5;
                    @include tabletUp {
                        font-size: 1.1rem;
                    }
                }
            }
        }

        i {
            @extend %flex;
            cursor: pointer;
            color: #093259;
            position: relative;
            a {
                font-size: 1rem;
                margin-left: 0.5rem;
                text-decoration: none;
                color: #093259;
            }
        }
    }

    .buttons{
        @extend %flex;
        margin: 0 0 1rem 0;
        @include laptopUp{
            margin: .5rem 0 0 0;
        }
    }
    
</style>

{#await data.props.item}
    <Dialog text={"Getting portfolio Item. One moment"} />
{:then item}

    <div class="container">
        <div>
            <i class="fas fa-arrow-left"><a href="/portfolio">Go back</a></i>
        </div>
        <div class="upperContent">
            <div class="upperContent_piece">
                <img src="/{item.img}.webp" alt="" />
                <h3>{item.title}</h3>
                <div class="buttons">
                    <Button text="GitHub" icon="fab fa-github" other href={item.git}/>
                    {#if item.demo}
                        <Button text="Demo" icon="fas fa-tv" href={item.demo}/>
                    {/if}
                </div>
            </div>
            <div class="upperContent_tech">
                {#each item.tech as tech}
                    <div class="upperContent_tech_item">
                        <img src="/{tech.img}.webp" alt="" />
                        <h5>{tech.name}</h5>
                    </div>
                {/each}
            </div>
        </div>

        <div class="information">
            <h4>{item.title}</h4>
            <div class="information_text">
                <h3>{item.information}</h3>
            </div>
        </div>
    </div>
{:catch error}
    <Dialog text={error} />
{/await}