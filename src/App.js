import React, { Component } from 'react';

import './App.css';

import Form from './component/Form';
/* import CharacterClass from './component/CharacterClass'; */

const COUNT = 200;
const ascendancies = ["Slayer","Gladiator","Champion","Assassin","Saboteur",
"Trickster","Juggernaut","Chieftain","Necromancer","Occultist","Elementalist",
"Deadeye","Raider","Pathfinder","Inquisitor","Hierophant","Guardian","Ascendant"];
const abbrev = ["duelist1","duelist2","duelist3","shadow1","shadow2","shadow3","marauder1",
"marauder2","marauder3","witch1","witch2","witch3","ranger1","ranger2","ranger3","templar1",
"templar2","templar3","scion"]

class App extends Component {

  state = {
    count:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

  }


  increment = (index) => {
    const newNum = this.state.count.slice()
    newNum[index]++
    this.setState({
      count: newNum
    });
  };

  getData = async(e) => {


    e.preventDefault();
    const leagueName = e.target.elements.league.value;
    const ladderCall = await fetch("http://api.pathofexile.com/ladders/" + leagueName +"?limit=" + COUNT);
    const data = await ladderCall.json();
    const classes = data.entries;
    for(var i = 0; i < 200; i++) {
      var classType= classes[i].character.class;
      
      this.increment(ascendancies.indexOf(classType));
      console.log(this.state.count);


    }
    console.log(this.state.count);

    console.log(this.state.namesList);

    
  }



  render() {
    const namesList = ascendancies.map(x => x + ": " + this.state.count[ascendancies.indexOf(x)]/2 + "%")
    const listForm = namesList.map(x => <li key={abbrev[namesList.indexOf(x)]}>{x}</li>)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Path of Exile Character Popularity </h1>

        </header>
        <p className="App-intro">
          (Data taken from top 200 players of desired league)
        </p>
        <Form getData= {this.getData}/>

        <ul>
          {listForm}
        </ul>

      </div>

    );

  }



}
export default App;
