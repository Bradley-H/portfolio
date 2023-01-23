<script lang="ts">
    // COMPONENTS //
    import Me from "$lib/Me.svelte";
    import Dialog from "$lib/Dialog.svelte";
    import Button from "$lib/Button.svelte"; 
</script>

<style lang="scss">
    @import "../../scss/util/index.scss";

    .ground {
        width: 100%;
        height: 1.5rem;
        background-color: $groundColor;
        position: absolute;
        bottom: 0;
    }

    .me {
        display: none;
        position: absolute;
        bottom: -1.1rem;
        @include tabletUp{
            display: block;
            transform: scale(.6);
        }
        @include laptopUp{
            transform: scale(.8);
            bottom: .1rem;
        }
        @include desktopUp{
            transform: scale(1);
            bottom: 1.4rem
        }
    }

    .centered{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
   
</style>


<svelte:head>
    <title>[B-J-H] - Contact</title>
</svelte:head>


<Dialog
    text={"Interested in working together? Here is my Resume"}/>


<div class="centered">
    <!-- get my resume -->
        <Button href={"Resume.pdf"} icon="fas fa-paper-plane" text="Resume"/>

</div>

<div class="me">
    <Me />
</div>
<div class="ground" />
