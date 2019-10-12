import React, { Component } from 'react';
import './App.css';
import {Button} from "./components/Button";
import {MoreButton} from "./components/MoreButton";

const imagesPath = {
  image1: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190823143846-apple-card-test.jpg",
  image2: "https://cdn.vox-cdn.com/thumbor/k1glTKnIA3UDnu-WWypOMa8MWBs=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65113845/acastro_180130_1777_0005_v2.0.jpg",
  image3: "https://cdn.vox-cdn.com/thumbor/9ATCtNIpKr8gsh8rDV-ITtw5UU0=/0x0:1280x800/1200x800/filters:focal(538x298:742x502)/cdn.vox-cdn.com/uploads/chorus_image/image/65135377/Untitled.0.png",
  image4: "https://cnet2.cbsistatic.com/img/3O04FaNVeXyoVOdZXsc9KellXCo=/868x488/2018/11/01/34d19592-cc28-46ff-a36a-d427c40e06bb/008-ipad-pro-2018.jpg",
}

const switchStyle = {
  zIndex: 200,
  position: 'relative',
  cursor: 'pointer'
}

class App extends Component {

   constructor(props){
    super(props);

    this.state = {
      src: imagesPath['image1'],
      darkened: false
    };

    this.showTheDarkSide = this.showTheDarkSide.bind(this);

  }

  showTheDarkSide(){
    const { darkened } = this.state;

    this.setState({
      darkened: !this.state.darkened,
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h2>Three Ezee steps to everything you need in a wallet</h2>
        </header>
        <div className="desktop" style={{zIndex: this.state.darkened ? 200 : 0}}>
          <img src={this.state.src} className="background" alt="logo" />
        </div>
        {this.state.darkened && (<div className='curtain'></div>)}
        <div className='buttonsContainer'>
          <Button number ='2' text='Easy to use' src={()=>this.setState({src: imagesPath['image1']})}/>
          <Button number ='1' text='Lorem ipsum' src={()=>this.setState({src: imagesPath['image2']})}/>
          <Button number ='4' text='Lorem ipsum' src={()=>this.setState({src: imagesPath['image3']})} />
          <Button number ='3' text='Lorem ipsum' src={()=>this.setState({src: imagesPath['image4']})} />
          <div className="buttonContainer">
            <img className='switch' style={switchStyle} src="/images/light-switch.png" onClick={this.showTheDarkSide}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
