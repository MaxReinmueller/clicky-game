// import dependencies
import React, { Component } from "react";
import Cards from "./Cards";
import NavTabs from './NavTabs';
import MyJumbotron from './MyJumbotron';
import object from '../object.json';
import Wrapper from './Wrapper';

class CardContainer extends Component {
    state = {
        object,
    }


    shuffle = id => {
        this.setState({
            object: this.state.object.sort(function(a,b){
                return 0.5 - Math.random();
            })
        })
        
    }

    
    render() {
        return (
            <div>
                <NavTabs />
                <MyJumbotron />
                <Wrapper>
                {this.state.object.map((object, i) => {
                    return (
                    <Cards
                    id={object.id}
                    image={object.image}
                    key={i}
                    shuffle={this.shuffle}
                    />
                    )
                    })}
                </Wrapper>
                
            </div>
        );
    };

}

export default CardContainer;
