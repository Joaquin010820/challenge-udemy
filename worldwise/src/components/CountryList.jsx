import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
export default function CountryList({ cities }) {
  return (
    <ul className={styles.countryList}>
      {cities.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
