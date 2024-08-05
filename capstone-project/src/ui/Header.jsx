import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h2>Good morning Joaquin✋</h2>
      <p>Time to rise up for today's</p>
    </StyledHeader>
  );
}
