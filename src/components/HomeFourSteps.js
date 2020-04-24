import React from 'react';
import decoration from '../assets/Decoration.svg';
import icon1 from '../assets/Icon-1.svg'
import icon2 from '../assets/Icon-2.svg'
import icon3 from '../assets/Icon-3.svg'
import icon4 from '../assets/Icon-4.svg'

const HomeFourSteps = () => {
    return (
        <div>
            <div>
               
                <p>Wystarczą 4 proste kroki</p>
                 <img src={decoration}></img>
            </div>
            <div>
                <div>
                    <img src={icon1}></img>
                    <div>Wybierz rzeczy</div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <img src={icon2}></img>
                    <div>Spakuj je</div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <img src={icon3}></img>
                    <div>Zdecyduj komu chcesz pomóc</div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <img src={icon4}></img>
                    <div>Zamów kuriera</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>(Komponent button)</div>
        </div>

    )
}
export default HomeFourSteps;