import React from 'react';
import dogs from "../dogsdata";
import Dog from "../components/Dog";
import {connect} from "react-redux";
import {fetchGet} from "../redux/actions";
import { StyledList } from "../StyledComponents"


class Homepage extends React.Component {
 
    componentDidMount() {
        this.props.fetchGet();
    }

    render(){
        const {loadingFavorites} = this.props
        if(loadingFavorites){
            return <div>
                <h1>Sayfa Yukleniyor...</h1>
            </div>
        }
        return (
            <div>
                <StyledList>
                    {
                        dogs.map((dog) => {
                            return <Dog
                                key={dog.id}
                                id={dog.id}
                                {...dog} />
                        })
                    }
                </StyledList>
            </div>
        );
    }
}


const mapDispatchToProps = {
    fetchGet
}

export default connect(null, mapDispatchToProps)(Homepage);