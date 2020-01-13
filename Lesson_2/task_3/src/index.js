import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const rootElement = document.querySelector('#root');

function renderSeconds(time) {
    const seconds = new Date(time).getSeconds();
    const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
    const color = seconds % 2 !== 0 ? '#fff' : '#000';

    const styles = {
        color,
        backgroundColor
    };

    const element = ( <
        div className = "seconds"
        style = { styles } > Now is { seconds } < /div>
    );

    ReactDOM.render(element, rootElement);
}

setInterval(() => renderSeconds(new Date()), 1000);