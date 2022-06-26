import React, {useState,useEffect} from 'react';
import './Articles.css'
const Articles = props => {
    const [articles, setState] = useState([]);
    useEffect(() => {
    fetch('http://localhost:5000/articles')
      .then((response) => response.json())
      .then((json) =>{setState(json.Items); console.log(json.Items);} );
  }, []);
    return (
       <div>
           {articles.map(item=>(
                <div class="da-article">
                    <h2>{item.title}</h2>
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

Articles.propTypes = {
    
};
export default Articles;