import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
  color: red;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>the wild oasis</H1>
        <Button onClick={() => alert("Hello")}>Check in</Button>
        <Input placeholder="Enter your name" type="text"></Input>
      </div>
    </>
  );
}
