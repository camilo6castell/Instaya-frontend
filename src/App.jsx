import styled from "styled-components";

export default function App({ children }) {
  return <AppStyled>{children}</AppStyled>;
}

const AppStyled = styled.div`
  && {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    margin: 0;
    padding: 0;

    font-family: "Roboto", sans-serif;
    background: url(https://images.wallpaperscraft.com/image/single/polygon_gradient_texture_134428_3840x2400.jpg);
    background-size: cover;
    margin: 0;
    padding: 0;
  }
`;
