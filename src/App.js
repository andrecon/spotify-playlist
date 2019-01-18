import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//Default text color
//let defaultTextColor_Green = '#1db954';

//Creating a default style object
//So now we dont need to style with style = {{}} but just style = {} since this is an object Data
let defaultStyle = {
  color : '#1db954'
};


// Comming up with madeup data
let fakeServerData = {
  user : {
    name : 'Andy',
    playlists : [
      {
        name : 'Wanderlust',
        songs: ['Wanderlust','Rocketman (feat. Atlas & Lando!)']
      },

      {
        name : 'Crescendo',
        songs: ['Sunroof','Bout it (feat. Daniel James & Benjamin O)', 'Kid Again']

      },

      {
        name : 'Lock My Door',
        songs: ['The Glo','Polaroids', 'throwback (feat. Saba)'] 
      },

      { 
        name : 'Best For You',
        songs: ['Coming back','Stay focus', 'Waves']
      }
    ]
  }

  };

/*  		○ Aggregation Data [Component_B] ○
* Available as a Tag
* Divs are block by default. 'inline-block' will help us make it look more smooth 
*/
class Aggregate extends Component {
  //Playlist will be available and passed in this component as 'props' so instead of calling
  // this.state.serverData.user.playlists.lengh we narrow it down to this.props.playlists
  render() {
    return (

      /*This is a SubHeader
      * style= {Here} <--- JavaScript part
      * style= {{Here}} <-- JavaScript Object
      * Default style with extension of width and display
      */
      <div style = {{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>
          {this.props.playlists && this.props.playlists.length} Text
        </h2>
      </div>
      //This returns some HTML with some styling
      );
  }
}

/*  		○ Filter [Component_C] ○
*  Calls the JavaScript feature that doesnt really exist (Object Spread Operator)
*  if we want to weld on any extra properties inside we would have to add
*  style = {{...defaultStyle, extra_feature1, extra_feature1}}
*/
class Filter extends Component {
  render() {
    return (
      //Default style without extensions
      <div style = {defaultStyle}>
        <img/>
        <input type= "Text"/>
        
      </div>
    );
  }
}

/*  		○ Playlist component [Component_D] ○
*  We use return(); to to return something from the component
*  We can use return whatever_retunr_value too since JavaScript has this
*  Feature called automatic semicolo insertion that will insert semicolons for us
*  If we use the (); it will understand that threse a block inside that should all be returned
*  This helps with indentation 
*/
class Playlist extends Component {
  render() {
    return (
      //Default style extended with width and displya styles
      <div style = {{...defaultStyle, width: "25%", display: 'inline-block'}}>
        <img />
        <h3> Playlist Name</h3>
        <ul>
          <li> Song 1 </li>
          <li> Song 2 </li>
          <li> Song 2 </li>
        </ul>
      </div>
    );
  }
}


class App extends Component {

  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    //After the five seconds, it will execute the function that we passed in
    setTimeout(() =>{
    this.setState({serverData: fakeServerData});
  }, 2000);
}

  render() {
      /*
      * Two ways of calling Tag
      * <Aggregate/> or <Aggregate> </Aggregate>
      */
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style = {{...defaultStyle, 'font-size': '54px', 'color' : '#1db954'}}>
            {this.state.serverData.user.name}'s Playlist 
          </h1>

          <Aggregate playlists = {this.state.serverData.user.playlists}/>
          <Aggregate/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> :  <h1 style = {defaultStyle} > Loading... </h1>
        }
        </div>
    );
  }
}

export default App;
