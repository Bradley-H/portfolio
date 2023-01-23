<script lang="ts">
    let checked = false;

    import {globalStore} from '../stores/globalStore'

    function toggleTheme(){4
        if($globalStore.theme === "night"){
            $globalStore.theme = "day"
        } else {
            $globalStore.theme = "night"
        }
    }
</script>


<style lang="scss">
    @import "../scss/util/index.scss";
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        height: toRem(25);
        transform: translateY(-3px) translateX(1.5rem);
        .fa-sun{
            color: #f1c40f;
            font-size: toRem(25);
        }
        .fa-moon{
            color: #2c3742;
            font-size: toRem(25);
        }

        #switcher{
            position: relative;
            display: inline-block;
            width: toRem(55);
            height: toRem(25);
            input{
                opacity: 0;
                width: 0;
                height: 0;
            }
            .slider{
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgb(154, 154, 154);
                transition: $primaryTransition;
                &:before{
                    position: absolute;
                    content: "";
                    height: toRem(20);
                    width: toRem(20);
                    left: toRem(2.5);
                    bottom: toRem(2);
                    background-color: white;
                    transition: $primaryTransition;
                }
            }
            input:checked + .slider{
                background-color: white;
            }

            input:checked + .slider:before{
                transform: translateX(toRem(30));
                background-color: black;
            }
        }
    }
</style>


<div>
    <i class="fas fa-sun"></i>
    <label class="switch" id="switcher">
        <input type="checkbox" bind:checked>
        <span class="slider" on:mousedown={toggleTheme}></span>
    </label>
    <i class="fas fa-moon"></i>
</div>