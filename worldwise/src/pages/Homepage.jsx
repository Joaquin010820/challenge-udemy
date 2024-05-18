import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>World wise</h1>
      <Link to="/app">Click here</Link>
    </div>
  );
}