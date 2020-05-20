import React from 'react';
import dogs from "../dogsdata";
import "../App.css";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const DogDetail = ({match}) => {
    const {id} = match.params;
    const showDetail = dogs.find(dog => dog.id ===id);
    return (
            <div className="dog-detail">
            <Card> 
              <CardBody>
                <CardTitle>Name: {showDetail.name}</CardTitle>
                <CardSubtitle>Breed: {showDetail.breed}</CardSubtitle>
                <CardText>Description: {showDetail.description}</CardText>
                <CardImg className="dog-image" src={showDetail.image} alt="dog-image" />
              </CardBody>
            </Card>
          </div>
        );
      
    
}
export default DogDetail;