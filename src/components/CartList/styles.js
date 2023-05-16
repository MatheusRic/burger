import styled from "styled-components";

export const TagLi = styled.li`
  width: 100%;
  list-style: none;
  margin-left: -1.4rem;
  display: flex;
  justify-content: space-between;
`;

export const ImageDiv = styled.div`
  margin-left: -1rem;
  width: 40%;

  @media (min-width: 760px) {
    width: 20%;
  }

  @media (min-width: 1024px) {
    width: 15%;
  }

  @media (min-width: 1440px) {
    width: 30%;
  }
`;

export const CartImage = styled.img`
  width: 100%;
  height: 6rem;
`;

export const CartDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: -4rem;

  @media (min-width: 760px) {
    margin-right: 1rem;
  }

  @media (min-width: 1440px) {
    margin-left: 1rem;
    margin-right: -3rem;
  }
`;

export const CartName = styled.h2`
  font-size: 17px;
`;

export const CartQuantity = styled.div`
  display: flex;
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;
  margin-left: 1rem;

  button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  p {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const CartCategory = styled.h4`
  color: gray;
  margin-top: 0rem;
  margin-left: 0.5rem;
`;

export const ButtonRemove = styled.button`
  width: 70px;
  height: 20px;
  background-color: #f5f5f5;
  border: none;
  color: gray;
  font-size: 15px;
  margin-left: 5rem;
  margin-top: 2rem;
`;
