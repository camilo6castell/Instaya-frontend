import styled from "styled-components";

export const FormStyled = styled.div`
  && {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 75%;
  }

  form {
    padding: 1rem;
    border-radius: 1.5rem;

    background: linear-gradient(rgba(83, 42, 75, 0.2), rgba(40, 79, 85, 0.2));

    backdrop-filter: blur(20px);
    color: white;

    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
  }

  .items-form {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    align-items: center;
  }

  label {
    padding: 0;
    margin: 0;
  }

  input {
    background-color: rgba(40, 79, 85, 0);
    color: aliceblue;
    border: none;
    border: dotted 0.01rem;
  }

  button {
    display: block;

    text-decoration: none;
    background-color: aquamarine;

    padding: 0.5rem;
    border-radius: 0.5rem;
    width: fit-content;
  }

  .rAca {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FormHelpStyled = styled.div`
  && {
    background-color: blueviolet;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 1rem;
    margin: 1rem auto;
    width: fit-content;
    height: fit-content;
    border-radius: 1.5rem;

    color: aliceblue;
    text-shadow: rgba(0, 0, 0, 1) 0px 0px 5px;
    backdrop-filter: blur(20px);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);

    background: linear-gradient(
      217deg,
      rgba(83, 42, 75, 0.2),
      rgba(255, 255, 0, 0.2),
      rgba(40, 79, 85, 0.2),
      rgba(255, 255, 0, 0.45)
    );
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
  }

  .title {
    margin: 0 0.5rem 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
  }

  .help-info {
    display: flex;
    justify-content: space-between;
  }

  .help-label,
  .help-test {
    margin-right: 0.5rem;
  }
`;
