import styled from "styled-components";
export const Container = styled.div`
  &.btn-grup {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.colum {
    text-align: center;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  &.text-space {
    margin-top: 20px;
  }
  &.text-space.size {
    font-size: 23px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  &.btn {
    padding: 10px;
    background-color: #30307c;
    margin-right: 4px;
    color: #ffffff;
    font-weight: 600;
    border-radius: 4px;
  }
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

export const ItemList = styled.div`
  &.items {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    align-items: center;
    padding: 20px 20px;
    text-align: center;
  }
`;

export const Item = styled.div`
  &:hover {
    background-color: #c3c3c3;
  }
`;
export const TextF = styled.p`
  &.text {
    color: #ffffff;
  }
`;
