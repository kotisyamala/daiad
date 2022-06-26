import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Articles from "./services/Articles";
import PropTypes from 'prop-types';

const App = props => {
    return (
        <Articles/>
    )
};

App.propTypes = {
    
};
export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
export { default as Articles } from './services/Articles';