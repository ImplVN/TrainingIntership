import { style } from "@mui/system";
import React from "react";
import styled from "styled-components"
;
const Mainitems = styled.div`
    &.main-date{
        display: flex; 
        flex-direction: column;
        justify-content: center;
        /* text-align: center; */
    }
`
const Allp = styled.p`
    &.all-p{
        width: 135px;
    }
`
const Dflex = styled.div`
    &.main-body{
       width: 40%;
       text-align: center;
    }
`
const Img = styled.img`
    &.img-date{
        width: 80%;
        

    }
`
function Listwether5day(props) {
  const { temptb, dataa, icon, datenow } = props;
  const src = `http://openweathermap.org/img/wn/${icon.icon}@2x.png`;
  return (<Dflex Dflex className="main-body" >
                <Allp className="all-p">{datenow}</Allp>
        <Img className="img-date" src={src} />
        <Allp>{(temptb - 273).toFixed(0)}°C</Allp>

     
    </Dflex>
  );
}
export default Listwether5day;
