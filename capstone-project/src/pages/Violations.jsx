import { useEffect } from "react";
import getViolations from "../services/apiViolations";

export default function Violations() {
  useEffect(() => {
    getViolations().then((data) => console.log(data));
  }, []);
  return <div>Violation</div>;
}
