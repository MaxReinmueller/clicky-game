// import dependencies
import React, { Component } from "react";
import Cards from "./Cards";
import NavTabs from './NavTabs';
import MyJumbotron from './MyJumbotron';

class CardContainer extends Component {
    state = {
        click: "",
        order: []
    }

    render() {
        return (
            <div>
                <NavTabs />
                <MyJumbotron />
                <Cards />
            </div>
        )
    }

}

export default CardContainer;
