import styled from "styled-components";

export const Mainbody = styled.div`
  color: white;

  &.main-list-itemdate {
    display: flex;
    overflow-x: auto;
    padding: 20px 40px;
    margin: 0 40px;
    padding: 60px 0;
  }
`;
export const Headweather = styled.div`
  &.date-country {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.date-country-2 {
    margin: 20px 0;
  }
  &.main-rise-set {
  }
`;
export const Dflex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &.Rise-Set {
    padding-left: 20px;
  }
`;
export const Colum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Main = styled.div`
  padding: 30px;
  background-color: rgb(48, 48, 125);
  color: white;
`;

export const Weather5Day = styled.div`
  display: flex;
  color: white;
  margin: 0 40px;
  padding: 60px 0;
  overflow-x: auto;
  padding: 20px 40px;
`;
export const Weather5DayItem = styled.div`
  padding: 10px;
  text-align: center;
`;

export const Text_h1 = styled.h1`
  margin: 0 20px;
`;
export const Main_btn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
export const Button = styled.button`
  margin-right: 30px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  :hover {
    background-color: gray;
    cursor: pointer;
    color: white;
  }
`;
