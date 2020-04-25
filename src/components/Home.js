import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeForm from './HomeForm';
import HomeAboutUs from './HomeAboutUs';
import HomeCompanies from './HomeCompanies';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';
import HomeFourSteps from './HomeFourSteps'

const Home = () => {
    return (
        <HashRouter>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeCompanies/>
            <HomeForm/>
            <HomeContact/>
            <HomeFooter/>
            <p><Link to='/oddaj-rzeczy'>formularz</Link></p>
            <p><Link to='/logowanie'>Zaloguj</Link></p>
            <p><Link to='/rejestracja'>Zarejestruj się</Link></p>
            <p><Link to='/wylogowano'>wylogowanie</Link></p>
        </HashRouter>
        
    )
}
export default Home;