import styled from "styled-components";

export const Card = styled.div`
  border: solid;
  border-color: #e0e0e0;
  border-radius: 10px;
  width: 79%;
  height: 25rem;
  display: flex;
  position: sticky;
  flex-shrink: 0;
  object-fit: cover;
  scroll-behavior: smooth;
  flex-direction: column;
  margin-right: -0.5rem;
  margin-left: 2rem;
  margin-top: 2rem;

  @media (min-width: 767px) {
    width: 40%;
  }
`;

export const DivImage = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const Image = styled.img`
  background-color: #f5f5f5;
  width: 177px;
  height: 10rem;
`;

export const Title = styled.h3`
  color: #333333;
  font-size: 1.5rem;

  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

export const Category = styled.p`
  color: #828282;
`;

export const Price = styled.span`
  color: #27ae60;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const AddButton = styled.button`
  margin-top: 1rem;
  width: 8rem;
  height: 2.5rem;
  border-radius: 10px;
  border: none;
  background-color: #27ae60;
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;

  :hover {
    background-color: #828282;
    transition: 0.3s;
    cursor: pointer;
  }
`;
