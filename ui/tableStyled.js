import styled from "styled-components";

export const TableStyled = styled.table`
  && {
    width: fit-content;
    max-width: 95%;
    /* border-radius: 1.5rem; */
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);

    text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 6px;

    background: linear-gradient(
      217deg,
      rgba(83, 42, 75, 0.2),
      rgba(40, 79, 85, 0.2)
    );
    backdrop-filter: blur(20px);
    border-collapse: collapse;
  }

  caption {
    font-size: 2rem;
    color: aliceblue;
    padding: 0.8rem;
  }
  label {
    color: white;
    font-size: 0.7rem;
    padding-top: 0.5rem;
  }

  td,
  th {
    /* border: 1px solid rgb(255, 255, 255); */
    padding: 0.5rem;
  }

  thead {
    /* display: flex; */
    /* flex-direction: row;
    justify-content: center;
    align-items: center; */

    background: rgba(0, 0, 0, 0.2);

    color: aliceblue;

    border-radius: 1.5rem;
  }

  label {
    display: block;
    width: fit-content;
    margin: 0rem;
  }

  /* input,
select {
    width: 100%;

} */

  /* columnas */

  .tstate {
    width: 5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.47);
    color: rgb(255, 255, 255);
    border-radius: 2rem;
  }

  .tplace {
    width: 6rem;
  }

  .tmeasures {
    width: 4rem;
    margin-right: 1rem;
  }

  .tdmeasure {
    display: flex;
  }
  .tdmeasure1 {
    display: inline;
  }

  .tdmeasure2 {
    margin: 0.5rem;
    align-items: center;
  }

  .delicate {
    margin: 0 auto;
    display: block;
  }

  .sender {
    display: inline;
    align-items: center;
  }
  .senderinput {
    width: 10rem;
    margin-right: 1rem;
  }
  .senderblock {
    display: flex;
    margin: 0.5rem;
    justify-content: space-between;
  }

  /* td {
    background-color: rgba(35, 0, 6, 0.507);
  }

  th {
    background-color: rgba(35, 0, 6, 0.94);
    color: rgb(147, 161, 172);
  }
   */
  tfoot td {
    background: rgba(3, 30, 53, 0.2);

    transition: all 0.1s ease-in-out 0s;
  }

  tfoot td:hover {
    background: rgba(53, 3, 3, 0.5);
    transition: all 0.5s ease-in-out 0s;
  }

  .empty-containe {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .empty-registry {
    color: aliceblue;
    font-size: 1.2rem;

    text-align: center;
  }
`;
