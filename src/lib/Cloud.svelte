<script lang="ts">
    export let time: number;
</script>

<style lang="scss">
    @import "../scss/util/index.scss";



    div{
        transform: scale(.35);
        background: $cloudColor;
        margin-top: 3rem;
        box-shadow: 0 10px 2px rgba(0,0,0,.1111);
        position: relative;
        height: 35px;
        width: 210px;
        pointer-events: none;


        &::before,
        &::after{
            background: $cloudColor;
            content: "";
            position: absolute;
        }

        &::after{
            height: toRem(100);
            left: toRem(30);
            top: -50px;
            width: toRem(100);
        }

        &:before{
            height: toRem(50);
            left: 6.8rem;
            top: -2rem;
            width: toRem(65);
        }
    }
</style>


<div style="animation: animateCloud {time}s linear infinite"></div>