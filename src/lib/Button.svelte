<script lang="ts">
  // PROPS //
    export let text: string = "";
    export let href: string = "";
    export let other: boolean = false;
    export let icon: string = "";
    export let submit: boolean = false;
</script>

<style lang="scss">
    @import "../scss/util/index.scss";

    /* DEFAULT */
    a,
  button{
    margin: toRem(5);
    @include centered;
    padding: 0px calc(25px + 5px);
    text-align: left;
    color: #fdfdfd;
    font-size: .7rem;
    text-decoration: none;
    background-color: darken($lightOrange, 10%);
    text-transform: uppercase;
    position: relative;
    z-index: 10;
    border: 0;
    height: toRem(25);
    cursor: pointer;
    width: max-content;
    font-weight: bold;
  }

  .submit{
    background-color: $lightOrange;
    width: max-content;
    color: white;
    place-self: center;
    &::before{
      background-color: $lightOrange;
    }
    &::after{
      background-color: $lightOrange;
    }
  }

  i{
    margin-right: 1rem;
    font-size: toRem(18);
    margin-bottom: .15rem;
  }
  
  a::after,
  a::before,
  button::after,
  button::before,
  .other::before,
  .other::after{
    content: "";
    position: absolute;
    background-color: darken($lightOrange, 10%);
    width: calc(100% - 10px);
    z-index: -1;
    height: 100%;
  }

  a::after,
  button::after{
    top: -5px;
    left: toRem(5);
  }

  a::before,
  button::before{
    bottom: -5px;
    right: toRem(5);
  }

  /* SECOND VARIATION */

  .other,
  .other::before,
  .other::after{
    background-color: black;
    color: white
  }
</style>


{#if href}
    <a class:other={other} on:click {href}> <i class="{icon}"/> {text}</a>
{:else if submit}
    <button on:submit class:submit={submit} class:other={other} type="submit"> <i class="{icon}"/>{text}</button>
{:else}
    <button on:mousedown on:click|preventDefault class:other={other}><i class="{icon}"/>{text}</button>
{/if}