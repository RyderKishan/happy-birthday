import styled from 'styled-components';

export const TimerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Card = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div.number {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & > div.unit {
    text-transform: capitalize;
  }
`;
