import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    return (
        <p>test</p>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render( <App/> , document.getElementById('app'))
})
export default App

