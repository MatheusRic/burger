import styled from "styled-components";

export const CardList = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow: auto;

  @media (min-width: 1440px) {
    flex-wrap: wrap;
    overflow: hidden;
    width: 95%;
  }
`;
