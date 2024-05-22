import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const { id } = useParams();

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      {id}--
      {lat}
      {lng}
    </div>
  );
}
