import styled from "styled-components";

export const DivTotal = styled.div`
  border: solid #e0e0e0;
  border-radius: 10px;

  @media (min-width: 1440px) {
    margin-top: 1.5rem;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalText = styled.div`
  font-weight: bold;
`;

export const TotalValue = styled.div`
  font-weight: bold;
`;

export const RemoveAll = styled.button`
  width: 100%;
  height: 35px;
  background-color: #e0e0e0;
  color: gray;
  border-radius: 10px;
  border: none;

  :hover {
    cursor: pointer;
  }
`;
