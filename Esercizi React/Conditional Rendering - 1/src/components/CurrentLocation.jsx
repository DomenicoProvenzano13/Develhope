import { useCurrentLocation } from "./hooks/useCurrentLocation";

export function CurrentLocation() {
  const { location, loading, error, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getCurrentLocation}> Get Coordinates </button>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}
      {location && (
        <div>
          <h2>Your Coordinates are:</h2>
          <h3>
            Latitude {location.latitude} <hr />
            Longitude: {location.longitude}
          </h3>
        </div>
      )}
    </div>
  );
}
