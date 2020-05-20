import React from 'react';
import dogs from "../dogsdata";


const FilteredDogs = (props) => {
    const secilenTur = props.match.params.yazilanTur;
    const filteredDogs = dogs.filter((dog) => dog.breedSlug === secilenTur);
    return (
        <div>
            <h1>Secilen Tur: {secilenTur}</h1>
            <ul>

                    {
                        filteredDogs.map((dog) => {
                            return <li key={dog.id}>{dog.name}</li>
                        })
                    }
                
            </ul>
        </div>
    );
};

export default FilteredDogs;