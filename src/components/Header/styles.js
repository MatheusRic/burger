import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
`;

export const LogoDiv = styled.div`
  margin-top: 1rem;
`;

export const Logo = styled.img`
  width: 5rem;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: solid;
  border-color: #e0e0e0;
  width: 90%;
  height: 2.8rem;

  ::placeholder {
    color: #e0e0e0;
  }
`;

export const Button = styled.button`
  position: absolute;
  margin-left: 65%;
  background-color: #27ae60;
  border: none;
  border-radius: 3px;
  color: #fff;
  height: 2.4rem;
`;
