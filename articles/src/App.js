import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = props => {
    const [articles, setState] = useState([]);
    useEffect(() => {
    fetch('http://localhost:5000/articles')
      .then((response) => response.json())
      .then((json) =>{setState(json.articles); console.log(json.articles);} );
  }, []);
    return (
       <div>
           {articles.map(item=>(
                <div>
                    <h1>{item.title}</h1>
                    <img src={item.imageUrl} width="100%" hight="400px"/>
                    <p>{item.description}</p>
                    <p>{item.content}</p>
                    <p><b>Tags:</b>{item.tags}</p>
                    <p><b>Date:</b>{item.publishedAt}</p>
                </div>
            ))} 
       </div> 
    )
};

App.propTypes = {
    
};
export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);