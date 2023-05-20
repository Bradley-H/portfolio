<script lang="ts">
	// COMPONENTS //
	import Me from "$lib/Me.svelte";
	import Dialog from '$lib/Dialog.svelte';
	import type { ServerData } from "./$types";
    import { onMount } from "svelte";
	export let data: ServerData;

	onMount(() => {
		const body = document.body;
		if (body.classList.contains("hidden")) {
			body.classList.remove("hidden");
		}
	});

</script>


<style lang="scss">
	@import "../scss/util/index.scss";

	
		.ground{
			background-color: $groundColor;
			width: 100%;
			height: 1.5rem;
			position: absolute;
			bottom: 0;
		}
	
		.me{
			display: grid;
			position: absolute;
			bottom: .2rem;
			place-items: center;
			transform: scale(.8);
			@include tabletUp{
				transform: scale(1);
				bottom: 1.5rem;
			}
		}


			fieldset{
				font-size: .8rem;
				border: none;
				margin-top: 3rem;
				@include tabletUp{
					margin-top: 1.5rem;
				}
				@include laptopUp{
					margin-top: 0;
				}
				

				legend{
					text-align: center;
					width: 100%;
					font-weight: bold;
					color: $textColor;
					margin-top: 1rem;
					@include tabletUp{
						margin-top: 2rem;
						font-size: .9rem;
					}
					@include laptopUp{
						margin-top: 3.5rem;
					}
					@include desktopUp{
						margin-top: 1rem;
					}
				}

				
				ul{
					display: grid;
					justify-content: space-evenly;
					grid-template-columns: repeat(3, 1fr);
					margin-bottom: .5rem;
					place-items: center;
					@include tablet{
						grid-template-columns: repeat(4, 1fr);
					}
					@include laptopUp{
						grid-template-columns: repeat(5, 1fr);
					}
				}

				li{
					list-style: none;
					margin: .75rem ;
					text-align: center;
					@include laptopUp{
						margin: .8rem 0;
					}
				}
				.img{
					@include centered;
					flex-direction: column-reverse;
					img{
					width: toRem(37);
					height: toRem(37);
					object-fit: cover;
					@include tablet{
						width: toRem(45);
						height: toRem(45);
					}
					@include laptopUp{
						width: toRem(55);
						height: toRem(55);
					}
					@include desktopUp{
						width: toRem(65);
						height: toRem(65);
					}
				}
				}
				

				h4{
					font-size: .8rem;
					margin-top: .7rem;
					color: $textColor;
					font-weight: bold;
					@include tablet{
						font-size: .7rem;
					}
					@include laptopUp{
						font-size: .9rem;
						margin-bottom: .45rem;
					}
				}
			}
	</style>

<svelte:head> 
	<title>[B-J-H] - Front End Web Developer</title>
</svelte:head>



<div class="me">
	<Me />
</div>
<div class="about">
	<Dialog text="Hello, I'm Bradley I'm 34 years old. I live in Changzhou, Jiangsu, China. I'm an aspiring Computer Scientist">

		<fieldset>
			<legend>Skills</legend>
			<ul>
				{#each data.props.catagories[0].additional as item (item.id)}
					<li>
						<div class="img">
							<img src="{item.img}.webp" alt={item.text + " image"} />
						</div>
						<h4>{item.text}</h4>
					</li>
				{/each}
			</ul>
		</fieldset>
		</Dialog>
		
</div>
<div class="ground" />
