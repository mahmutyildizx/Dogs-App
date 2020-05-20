import React from 'react';
import {Button} from "reactstrap";
import {connect} from "react-redux";
import {addFavorite, deleteFavorite} from "../redux/actions"

const FavoriteActions = (props) => {
    const toggle = (dogId)=>{
        
        
        const foundDog = props.favorites.find((favorite) => favorite.dogId === dogId);
        if(foundDog){
            props.deleteFavorite(foundDog.id, dogId);
        }else{
            props.addFavorite(dogId);
        }
    }

    const getStatus = (dogId) => {
        const foundDog = props.favorites.find(
          (favorite) => favorite.dogId === dogId
        );
        return foundDog;
      };
    return (
        <div className="favorite-actions">
            {
                getStatus(props.id) ?
                    <Button color="danger" disabled={props.id === props.disabled} onClick={() => {toggle(props.id)}}>Favorilerden Cikar</Button>
                    : <Button color="primary" disabled={props.id === props.disabled} onClick={() => {toggle(props.id)}}>Favoriye Ekle</Button>
            }
        </div>
    );
};

const mapDispatchToProps = {
    addFavorite,
    deleteFavorite,
}

const mapStateToProps = state => {
    const {favorites, disabled, loadingFavorites} = state.addReducer
    return {
        favorites,
        loadingFavorites,
        disabled
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteActions);