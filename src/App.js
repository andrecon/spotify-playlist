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
    name : 'User',
    //Array of Playlists
    playlists : [
      {
        //Properties
        name : 'Wanderlust',
        //Creating object literals with a name property and a duration property
        songs: [{name: 'Wanderlust', duration: 181},
          {name: 'Rocketman (feat. Atlas & Lando!)', duration: 153}]
      },

      {
        name : 'Crescendo',
        songs: [{name: 'Sunroof', duration: 215},
           {name:'Bout it (feat. Daniel James & Benjamin O)', duration: 254},
           {name: 'Kid Again', duration: 201}]

      },

      {
        name : 'Lock My Door',
        songs: [{name: 'The Glo', duration: 201},
          {name: 'Polaroids', duration: 263},
          {name: 'throwback (feat. Saba)', duration: 152}] 
      },

      { 
        name : 'Best For You',
        songs: [{name: 'Coming back', duration: 146},
          {name: 'Stay focus', duration: 247},
          {name: 'Waves', duration: 188}]
      }
    ]
  }

  };

/*  		○ Aggregation Data [Component_B] ○
* Available as a Tag
* Divs are block by default. 'inline-block' will help us make it look more smooth 
*/
class PlaylistCounter extends Component {
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
          {this.props.playlists && this.props.playlists.length} Playlists
        </h2>
      </div>
      //This returns some HTML with some styling
      );
  }
}

/*  		○ Aggregation Data [Component_B] ○
* Available as a Tag
* Divs are block by default. 'inline-block' will help us make it look more smooth 
*/
class HoursCounter extends Component {
  //Playlist will be available and passed in this component as 'props' so instead of calling
  // this.state.serverData.user.playlists.lengh we narrow it down to this.props.playlists
  render() {

      //Creating a list of all the songs (Getting all the songs in one lists)
      //Advance functional programming concept called Reduce, reduces soemthing to a single value
      //Reducing a playlist, to a list of songs 
      // reduce( , Initial state of the reduce) - Empty list []
      // reduce( takes a function(), Initial state of the reduce) 
      let allSongs = this.props.playlists.reduce( (songs, eachPlaylist) => {
        //Putting all songs in songs to eachPlaylist.songs
        return songs.concat(eachPlaylist.songs)
       },[]);
      
       //All this converts seconds to hours and minutes... if the hours value is less than and hour
       //the we just add it into the minutes
       let totalSeconds = allSongs.reduce((sum,eachSong) => {
         return sum + eachSong.duration;
       }, 0)
       
       let totalMinutes = totalSeconds/60;
       let totalHours = totalMinutes/60;

       if(totalHours < 1)
       {
         totalMinutes += totalHours;
       }
      totalMinutes = Math.round(totalMinutes);

    return (
      /*This is a SubHeader
      * style= {Here} <--- JavaScript part
      * style= {{Here}} <-- JavaScript Object
      * Default style with extension of width and display
      */
      <div style = {{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>
          {totalHours < 1 ? 
              <div> {totalMinutes}m </div>
              :
              <div style ={{display: 'inline-block'}} > {Math.round(totalHours)}h {totalMinutes}m </div>
          }
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
      //When we press a key up, we want you to call this function and change the text filter
      <div style = {defaultStyle}>
        <img/>
        
        <input type= "Text" onKeyUp= {event => 
          this.props.onTextChange(event.target.value)}/>
        
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

    let playlist = this.props.playlist;

    return (
      //Default style extended with width and displya styles
      <div style = {{...defaultStyle, width: "25%", display: 'inline-block'}}>
        <img />
        <h3> {playlist.name}</h3>
        <ul>
          {//For every song, print out a list with the name
            this.props.playlist.songs.map(song => 
              <li> {song.name} </li>
          )}
        </ul>
      </div>
    );
  }
}


class App extends Component {

  constructor() {
    super();
    this.state = {
        serverData: {},
        filterString: ''
    }
  }
  componentDidMount() {
    //After the five seconds, it will execute the function that we passed in
    setTimeout(() =>{
    this.setState({serverData: fakeServerData});
  }, 1000);
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

          <PlaylistCounter playlists = {this.state.serverData.user.playlists}/>
          <HoursCounter playlists = {this.state.serverData.user.playlists}/>

          {/*Instead of data onTextChange is a function */}
          <Filter onTextChange = {text => {
            this.setState({filterString: text})
          }}/>
          
          { /*If this works, it will print a set of number of Playlist component depending on our Data
            * Now that we added playlist as an argument, we can manipulate playlist inside Playlist component
            * As a 'props'. USING MAP (Benefits - Short code and we can do it in-place)
            * Filter() accept one argument, a function
            */
            this.state.serverData.user.playlists.filter(playlist=>
              playlist.name.toLowerCase().includes(
                this.state.filterString.toLocaleLowerCase())
            ).map( (playlist) => {
              return <Playlist playlist = {playlist}/>
            })
          }
          
          
        </div> :  <h1 style = {defaultStyle} > Loading... </h1>
        }
        </div>
    );
  }
}

export default App;
