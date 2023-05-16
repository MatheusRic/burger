import styled from "styled-components";

export const CartDiv = styled.div`
  margin-top: 4rem;
  width: 90%;
  margin-left: 5%;
  background-color: #f5f5f5;
  min-height: 230px;
  max-height: 800px;

  @media (min-width: 1440px) {
    width: 30%;
    min-height: 100px;
    max-height: 365px;
    margin-right: 1.5rem;
  }
`;

export const TitleDiv = styled.div`
  background-color: #27ae60;
  height: 4rem;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
`;

export const TitleCart = styled.h3`
  margin-left: 8%;
  color: #fff;
`;

export const SpanDiv = styled.div`
  width: 110%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  margin-left: -2.5rem;
`;

export const CartSpan = styled.div`
  font-weight: bold;
  font-size: 20px;
  display: flex;
`;

export const CartUl = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    width: 90%;
    min-height: 200px;
    max-height: 200px;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }
  }
`;
