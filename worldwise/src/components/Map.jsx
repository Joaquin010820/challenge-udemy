import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";

export default function Map() {
  const { cities } = useCities();
  const [searchParams] = useSearchParams();

  // this variable check if there is an item inside the array of cities, if there is none it center in the initial lat and lng
  // else if there is, then the first item in array will be the one wil be in center
  const initialMapPosition =
    cities.length !== 0
      ? [cities[0].position.lat, cities[0].position.lng]
      : [38.727881642324164, -9.140900099907554];
  // this will be the map position inside the ChangeCenter and in the marker position
  const [mapPosition, setMapPosition] = useState(initialMapPosition);

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  // this data came from the url passed from the city item
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  // check wheather if there is already a city inside the cities, however if its true then the initial position would be the
  // first item in an array

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading" : "Use your position"}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={5}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

// this function handles the changes of center everytime clicking in different city, this came from leafleft library
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

// this function handles to monitor if there is a click inside the map and redirect it in form comp, this came from leafleft library
function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    //process for passing the lat and lng in the form url
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
