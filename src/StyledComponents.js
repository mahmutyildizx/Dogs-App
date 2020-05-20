import styled from "styled-components";
import {Link} from "react-router-dom";
import { Card, CardTitle} from "reactstrap";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const StyledListItems = styled.li`
     margin: 10px;
     list-style: none;
`

export const StyledLink = styled(Link)`
    margin: 15px;
    text-decoration: none;
    text-align: center;
`

export const StyledCard = styled(Card)`
     align-items: center;
     justify-content: center;
     width: 250px;
     height: 200px;
     box-shadow: 10px 10px 26px rgba(0,0,0,0.25);
`

export const StyledCardTitle = styled(CardTitle)`
     padding: 5px;
     margin-bottom: 1rem;
`