import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:9000";
const CitiesContext = createContext();

// if there is 3 or more related states, then its more nice if we convert this sttaes in to useReducer
// const [cities, setCities] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const [currentCity, setCurrentCity] = useState({});

// state management with context api and useReducer
const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // loading the city in our server
  useEffect(() => {
    dispatch({ type: "loading" });
    async function fetchCities() {
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    }
    fetchCities();
  }, []);

  // passing the specific city in the city/Component which passed specific city
  async function getCity(id) {
    if (Number(id) === currentCity.id) return;

    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city...",
      });
    }
  }

  // process of sending data to our server
  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-type": "application/json" },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch (error) {
      // console.log(error);
      dispatch({
        type: "rejected",
        payload: "There was an error creating a city",
      });
    }
  }

  // process of deleting an item in our server or fake api
  async function deleteCity(cityId) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/cities/${cityId}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: cityId });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting a city",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        onCreateCity: createCity,
        onDeleteCity: deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside CitiesProvider");

  return context;
}

export { CitiesProvider, useCities };
