import { useEffect } from "react";
import getReports from "../services/apiReports";

export default function Reports() {
  useEffect(() => {
    getReports().then((data) => console.log(data));
  }, []);
  return <div>Report</div>;
}
