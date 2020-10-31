<script>
  import {address, locations, mylocation} from './store.js'
  import LocationChoice from './LocationChoice.svelte'
</script>

{#if $locations.length > 0}
{#each $locations as location}<LocationChoice {location} />{/each}
{/if}
