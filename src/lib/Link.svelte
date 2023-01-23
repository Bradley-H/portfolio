<script lang="ts">
    // PROPS //
    export let href: string = ""
    export let text: string = ""
    export let menu: boolean = false;
    export let active:string = "";
</script>

<style lang="scss">
@import "../scss/util/index.scss";
    a{
        text-decoration: none;
        color: $textColor;
        font-weight: 300;
        position: relative;
        &:hover{
            color: lightGray;
        }
        &.menu{
            color: black;
            margin-top: 2rem;
        }

        &.active{
            &::before{
            content: "";
            display: flex;
            position: absolute;
            background-image: url("/finger.png");
            height: toRem(35);
            width: toRem(35);
            transform: rotate(90deg) scale(1.2);
            top: -0.25rem;
            left: -3rem;
            z-index: 4;
            background-repeat: no-repeat;
            }
        }
    }
</style>


<a class:menu={menu} data-sveltekit-preload-data on:click class:active={active === href} {href}>{text}</a>