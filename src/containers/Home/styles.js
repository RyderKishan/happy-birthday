import styled from 'styled-components';

export const HomeContainer = styled.section`
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SubSection = styled.article`
  padding: 2rem;
  display: grid;
  place-content: center;
  flex: 1;
  & > p.heading {
    font-size: 1.25rem;
    font-weight: bold;
    animation: fadeIn 0.7s ease-in;
  }
  & > span.description {
    animation: fadeIn 3s;
    animation-fill-mode: forwards;
  }
`;

export const Action = styled.footer`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
