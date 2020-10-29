<script>
  import {address, locations, mylocation} from './store.js'
</script>

{#if $locations.length > 0}
{#each $locations as location}
<div class="card w-100 mb-2" on:click={() => {$mylocation = location}}>
  <div class="card-body d-flex align-items-center">
    <div class="location-infos">
      <strong>{location.properties.label}</strong>
      <div class="text-muted">
        Code postal : {location.properties.postcode}
        | Commune : {location.properties.city}
      </div>
    </div>
    <span class="location-icon ml-auto fas fa-map-marker-alt fa-2x"></span>
  </div>
</div>
{/each}
{/if}

<style>
  .card:hover, .card:focus {
    cursor: pointer;
    border-color: #007bff;
  }

  .card:hover .location-icon, .card:focus .location-icon {
    color: #007bff;
  }
</style>
