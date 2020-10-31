<script>
	import '../node_modules/bootstrap/dist/css/bootstrap.css'
	import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
	import { locations, loading } from './store.js'
	import LocationForm from './LocationForm.svelte';
	import LocationList from './LocationList.svelte';
	import LocationMap from './LocationMap.svelte';
	$: nbResult = $locations.length
	$: pluralize = $locations.length > 1 ? true : false
</script>

<main class="h-100 w-100 d-flex">
	{#if $loading}
	<div class="loading d-flex justify-content-center align-items-center">
		<span class="fas fa-spinner fa-3x fa-spin"></span><span class="sr-only">NOW LOADING</span>
	</div>
	{/if}
	<div class="d-lg-flex h-lg-100 w-100">
		<div class="sidebar col-lg-4 h-lg-100">
			<h1 class="text-center">Trouver ma localisation</h1>
			{#if nbResult > 0}<p class="lead text-center">{nbResult} résultat{#if pluralize}s{/if} trouvé{#if pluralize}s{/if}</p>{/if}
			<div class="mt-5 w-100">
					<LocationForm />
			</div>
			<LocationList/>
		</div>
		<div class="map-container col p-0 h-100">
			<LocationMap />
		</div>
	</div>
</main>

<style>
	.loading {
		position: absolute;
		z-index: 2000;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.75);
		color: #fff;
	}
	.sidebar {
		overflow-y: scroll;
	}
	h1 {
		text-transform: uppercase;
		font-weight: 300;
	}

	.map-container {
		background-color: #212121;
		min-height: 30rem;
	}
</style>
