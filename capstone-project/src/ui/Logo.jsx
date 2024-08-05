import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  transform: scale(0.9);
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo2.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
