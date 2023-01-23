<script lang="ts">
	// COMPONENTS //
	import Header from '$lib/Header.svelte';
	import Cloud from '$lib/Cloud.svelte';
	import Sun from '$lib/Sun.svelte';
	// STORES //
	import { globalStore } from '../stores/globalStore';
	// SCSS DEFINITIONS //
	import "../styles.scss"
</script>

<style lang="scss">
@import "../scss/util/index.scss";

main{
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	overflow-x: hidden;
	background: $primaryColor;
	height: 100vh;
	max-height: 100%;
	width: 100%;

	&.hidden{
		overflow: hidden;
	}
}
.clouds{
	display: flex;
	position: relative;
	top: 15rem;
	left: -22%;
	width: 100%;
	height: max-content;
	pointer-events: none;
}

</style>

<main class:hidden={$globalStore.navActive === true}>
	<Sun/>
	<Header/>
	<div class="clouds">
		<Cloud time={35}/>
		<Cloud time={27}/>
		<Cloud time={34}/>
		<Cloud time={51}/>
		<Cloud time={40}/>
	</div>
	
	<div class="clouds">
		<Cloud time={33}/>
		<Cloud time={44}/>
		<Cloud time={55}/>
		<Cloud time={49}/>
		<Cloud time={27}/>
		<Cloud time={34}/>
	</div>
	<slot/>
</main>