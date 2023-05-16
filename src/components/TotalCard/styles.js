import styled from "styled-components";

export const DivTotal = styled.div`
  border: solid #e0e0e0;
  border-radius: 10px;

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-weight: bold;
  }

  span {
    font-weight: bold;
  }

  button {
    width: 100%;
    height: 35px;
    background-color: #e0e0e0;
    color: gray;
    border-radius: 10px;
    border: none;

    cursor: pointer;
  }
`;
