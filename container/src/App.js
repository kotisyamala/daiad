import React, {useState,useEffect} from 'react';
import Header from './Header'; 
import Footer from './Footer';
import Articles from './Articles';

class App extends React.Component {
  render() {
    return (
     <div className="maincontainer">
      <Header/>
       <div className="container">
        <Articles/>
      </div>
        <Footer/>
    </div>
   )
  };
}
export default App;