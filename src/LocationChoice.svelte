<script>
  import { mylocation } from './store.js'
  export let location
</script>
<div class="card w-100 mb-2" class:selected={$mylocation===location} on:click={() => {$mylocation = location}}>
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

<style>
  .card:hover, .card:focus, .card.selected {
    cursor: pointer;
    border-color: #007bff;
  }

  .card:hover .location-icon, .card:focus .location-icon, .card.selected .location-icon {
    color: #007bff;
  }
</style>
