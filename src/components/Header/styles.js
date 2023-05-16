import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    height: 9.7rem;
  }
`;

export const LogoDiv = styled.div`
  margin-top: 1rem;

  @media (min-width: 1024px) {
    margin-left: 1%;
  }
`;

export const Logo = styled.img`
  width: 5rem;
`;

export const Search = styled.div`
  width: 95%;
  display: flex;
  border: solid;
  border-color: #e0e0e0;
  background-color: #fff;
  border-radius: 9px;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 25%;
    margin-right: 1%;
  }

  @media (min-width: 1220px) {
    width: 24%;
    margin-right: 1%;
  }
`;

export const Input = styled.input`
  position: relative;
  border: none;
  width: 100%;
  height: 2.8rem;

  ::placeholder {
    color: #e0e0e0;
  }
`;

export const Button = styled.button`
  background-color: #27ae60;
  border: none;
  border-radius: 5px;
  color: #fff;
  height: 2.4rem;
  margin-right: 0.3rem;
`;
