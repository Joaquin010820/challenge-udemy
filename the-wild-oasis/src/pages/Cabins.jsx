import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const cabins = function () {
    return getCabins().then((data) => data);
  };

  console.log(cabins);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <ul>
        {cabins.map((data) => (
          <li key="data.id">{data.name}</li>
        ))}
      </ul>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
