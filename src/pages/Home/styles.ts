import styled from "styled-components";

import Bg from '../../assets/bg.svg';

export const Container = styled.div`
  height: 100vh;
  background: var(--purple) url(${Bg}) no-repeat 85% 50%;
  background-size: 900px;

  img {
    position: absolute;
    top: 30px;
    left: 220px;
  }
`;

export const Content = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  max-width: 700px;

  h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 4rem;
    color: var(--pink);
  }

  p {
    font-size: 1.5rem;
    color: var(--principal);
  }

  a {
    background: var(--pink);
    max-width: 270px;
    text-decoration: none;
    color: var(--principal);
    padding: 1rem;
    border-radius: 2rem;
    margin-top: 3rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
