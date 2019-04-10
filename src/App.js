import React, { Component } from 'react';
import './App.css';
import Search from './search'
import Navbar from './Navbar'
import Modal from './Modal'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      topScroll: false,
      screen: window.screen.height
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(item){
    this.setState({
      ...this.state,
      modal: item,
    })
  }
  closeModal(){
    this.setState({
      ...this.state,
      modal:false,
    })
  }

  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
    
  }

  handleAnimation = () => {
    if (document.documentElement.scrollTop > this.state.screen ){
      this.setState({
        ...this.state,
        topScroll: true
      });
    } 
  }

  render() {
    return (
      <div>   
      <Navbar/>    
      { this.state.modal && 
      <Modal close={this.closeModal} item={this.state.modal}/>
      }
      <Search open={this.openModal} recharge={this.state.topScroll}/>   
     
      </div>
    );
  }
}

export default App;
