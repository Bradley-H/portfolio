<script lang="ts">
    
</script>

<style lang="scss">
    @import "../scss/util/index.scss";
    div{
        height: toRem(40);
        width: toRem(40);
        background-color: $lightYellow;
        position: absolute;
        left: 12rem;
        top: 0rem;
        @include laptopUp{
            left: unset;
            right: 2.5rem;
            top: .25rem;
        }
    }
</style>

<div></div>