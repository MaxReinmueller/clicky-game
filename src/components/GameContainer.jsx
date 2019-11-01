// import dependencies
import React, { Component } from "react";
import Cards from "./Cards";
import catImages from '../catImages.json';
import Wrapper from './Wrapper';
import MyJumbotron from "./MyJumbotron";
import Alerts from "./Alerts"

class GameContainer extends Component {
    state = {
        catImages,
        welcomeMessage: "Click on a Cat!",
        statusMessage: "",
        currentScore: "",
        topScore:""
    }


    shuffle = id => {
        this.setState({
            catImages: this.state.catImages.sort(function(a,b){
                return 0.5 - Math.random();
            })
        })
    }

    // scoreKeeper = id => {

    // }
    
    render() {
        return (
            <div>
            <MyJumbotron />
            <Alerts 
                welcomeMessage={this.state.welcomeMessage}
            />
            <Wrapper>
            {this.state.catImages.map((catImages, i) => {
                return (
                <Cards
                id={catImages.id}
                image={catImages.image}
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

export default GameContainer;
