import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//Default text color
let defaultTextColor_Green = '#1db954';

//Creating a default style object
//So now we dont need to style with style = {{}} but just style = {} since this is an object
let defaultStyle = {
  color : defaultTextColor_Green
};



/*  		○ Aggregation Data [Component_B] ○
* Available as a Tag
* Divs are block by default. 'inline-block' will help us make it look more smooth 
*/
class Aggregate extends Component {
  render() {
    return (

      /*This is a SubHeader
      * style= {Here} <--- JavaScript part
      * style= {{Here}} <-- JavaScript Object
      * Default style with extension of width and display
      */
      <div style = {{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>
          Number Text
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
  render() {
      /*
      * Two ways of calling Tag
      * <Aggregate/> or <Aggregate> </Aggregate>
      */
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
