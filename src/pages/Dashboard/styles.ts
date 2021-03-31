import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;
  margin: 2rem auto;

  h1 {
    color: var(--text-tile);
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
    color: var(--text-details);
  }
`;

export const CardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;

  a {
    text-decoration: none;
    background: var(--principal);
    height: 17rem;
    width: 15rem;
    border-radius: 1.5rem;
    padding: 1rem;
    margin-top: 3rem;
    transition: background 0.2s;


    /* & + a {
      margin-left: 2rem;
    } */

    &:hover {
      background: #f7f2ff;
    }
  }
`;

export const CardContent = styled.div`
  h2 {
    text-decoration: none;
    color: var(--text-tile);
    font-size: 1rem;
    font-family: 'Rubik', sans-serif;
    margin: 3rem 0 0.5rem 1rem;
  }

  P {
    color: var(--text-details);
    font-size: 0.8rem;
    margin-left: 1rem;
  }

  img {
    margin: 1.5rem 0 0 1rem;
    width: 100px;
  }
`;

