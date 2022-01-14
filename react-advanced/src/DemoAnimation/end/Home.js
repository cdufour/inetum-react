import React from 'react';
import logo from './assets/logo.svg';
import Card from './Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({property}) => {

    return(
        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
            </section>
            
            <div className="card-container">
                <TransitionGroup className="card-container">
                    <CSSTransition 
                        key={property._id} 
                        timeout={1000}
                        classNames="slide"
                    >
                        <Card property={property} />
                    </CSSTransition>
                </TransitionGroup>
            </div>

        </div>   
    )
}

export default Home;