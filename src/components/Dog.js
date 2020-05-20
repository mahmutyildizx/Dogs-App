import React from 'react';
import FavoriteActions from "./FavoriteActions";
import "../App.css";
import propTypes from "prop-types";
import { StyledListItems, StyledLink, StyledCard, StyledCardTitle} from "../StyledComponents"

const Dog = ({id, name, toggle, getStatus, disabled}) => {
    return (
      <>
        <StyledListItems key={id} >
        <StyledCard>
            <StyledLink to={`/detail/${id}`}>
                <StyledCardTitle>{name}</StyledCardTitle>
            </StyledLink>
            <FavoriteActions
             toggle={toggle} id={id} getStatus={getStatus} disabled={disabled}
            />
        </StyledCard >
        </StyledListItems >

      </>

    )
};

Dog.propTypes = {
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    toggle: propTypes.func.isRequired,
    getStatus: propTypes.func.isRequired,
    disabled: propTypes.bool.isRequired,
}

export default Dog;