import styled from 'styled-components';

export const Card = styled.div`
  background-color: wheat;
  &.open {
    background-color: unset;
  }
`;
export const ImageWrapper = styled.div`
  margin: 2rem auto;
  overflow: hidden;
  flex: 1;
  position: relative;
  & > div.wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    display: grid;
    grid-template-columns: ${({ gridNumber }) =>
      `${Array.from(Array(gridNumber).keys())
        .map(() => 'auto ')
        .join(' ')}`.trim()};
  }
  & > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const HeaderContainer2 = styled.header`
  height: 5rem;
  position: sticky;
  top: 0;
  background: #424242;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div.info {
    padding: 0 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
