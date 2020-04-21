import React from 'react';
import { Link } from "react-router-dom";
//REACT Scroll??????
import decoration from '../assets/Decoration.svg';
import homeHeroImage from '../assets/Home-Hero-Image.jpg';

const HomeHeader = () => {
    return (
        <div>

            <div className='headerContainer'>
                <img className='headerPicture' src={homeHeroImage} alt='null'></img>
                <div className='headerContentContainer'>
                    <div className='headerTopContainer'>
                        <div className='headerNavTop'>
                            <div className='firstFloor'>
                                <div><Link className='links' to='/logowanie'>Zaloguj</Link></div>
                                <div><Link className='links' to='/rejestracja'>Zarejestruj się</Link></div>
                            </div>
                            <div className='secondFloor'>
                                <div><Link className='links' to='/oddaj-rzeczy'>Start</Link></div>
                                <div><Link className='links'>O co chodzi?</Link></div>
                                <div><Link className='links'>O nas</Link></div>
                                <div><Link className='links'>Fundacja i organizacje</Link></div>
                                <div><Link className='links'>Kontakt</Link></div>
                            </div>
                        </div>
                        <div className='headerNavTopText'>Zacznij pomagać! <br />Oddaj niechciane rzeczy w zaufane ręce!</div>
                    </div>
                    <div>
                        <div className='headerBottom'>
                            <img src={decoration}></img>
                            <div className='headerBottomButtons'>
                                <button className='headerButton'>Oddaj rzeczy</button>
                                <button className='headerButton'>Zorganizuj zbiórkę</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeHeader;