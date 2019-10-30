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
        // score: 0,
        // topscore: 0
    }

    
    render() {
        return (
            <div>
                <NavTabs />
                <MyJumbotron />
                <Wrapper>
                {this.state.object.map(card => (
                    <Cards 
                    key={card.id}
                    image={card.image}
                    name={card.name}
                    id={card.id}
                    />
                ))}
                </Wrapper>
                
            </div>
        );
    };

}

export default CardContainer;
