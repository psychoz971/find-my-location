<script>
  import { address, locations, mylocation, loading } from './store.js'

  function handleSumit(event) {
    $loading = true;
    if ($address.length > 3) {
      fetch('https://api-adresse.data.gouv.fr/search/?q=' + $address).then(
        (resp) => {
          if (!resp.ok) {throw resp}
          return resp.json()}).then(
          (data) => {
            $loading = false;
            $locations = data.features
          }).catch(e => {
            $loading = false;
            alert('Erreur : Impossible de chercher cette adresse');
          })
    }
  }

  function getMyLocation(event) {
    $loading = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      fetch('https://api-adresse.data.gouv.fr/reverse/?lon=' + position.coords.longitude + '&lat=' + position.coords.latitude).then(
        (resp) => {
          if (!resp.ok) {throw resp}
          return resp.json()}).then(
          (data) => {
            $loading = false;
            $locations = data.features
            $address = data.features[0].properties.label
            $mylocation = data.features[0]
          }).catch(e => {
            $loading = false;
            alert('Erreur : Impossible de vous localiser');
          })
    });
  }
</script>

<form class="d-flex w-100 justify-content-center mb-5" on:submit|preventDefault={handleSumit}>
  <div class="form-group flex-grow-1 mb-0 mr-2">
    <label for="address" class="sr-only">Adresse</label>
    <input id="address" class="form-control form-control-lg w-100" type="search" name="address" bind:value={$address} placeholder="Saisissez une adresse">
  </div>
  <button type="submit" disabled={$address.length < 4} class="btn btn-primary btn-lg"><span class="fas fa-search-location"></span><span class="sr-only">Chercher</span></button>
  <button type="button" class="btn btn-dark ml-2" on:click|preventDefault={getMyLocation}><span class="fas fa-street-view"></span><span class="sr-only">Me localiser</span></button>
</form>
