import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';


export default class App extends Component {
  render() {
    return (
      <div>
      	<Header/>
        <div className='glavnina'>
    	   <div className='container'>
    	   	{this.props.children}
    	   </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
