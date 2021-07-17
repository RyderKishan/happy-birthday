import styled from 'styled-components';

export const HomeContainer = styled.section`
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100vw;
  margin: 0 auto;
`;

export const SubSection = styled.article`
  width: calc(100% - 2rem);
  padding: 1rem;
  display: grid;
  place-content: center;
  flex: 1;
  overflow: auto;
  & > div.image {
    margin: 1rem auto;
    overflow: hidden;
    flex: 1;
    & > img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
  & > audio {
    margin: 1rem 0;
  }
  & > video {
    margin: 1rem 0;
    width: 100%;
  }
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
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
