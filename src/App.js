//Main app that will assemble and serve the final render

//Import react core component, from where we will use all custom components
import React, { Component } from "react"
//Custom Component imports
import Table from "./Table"
import Form from './Form'

//main App class that will serve the content
class App extends Component {
    //A react state that can be modified
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  }
  //A function that can remove a character to the form
  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  //A function that can submit a character to the form
  handleSubmit= (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  
  //The actual render, this is where the content is served to the browser.
  render() {
    //Create a constant caleld characters, tie to state variable
    const { characters } = this.state

    //Below is what is rendered on the browser DOM
    return (
        //A divider that holds the content
      <div className="container">
    {/*The table that holds the react components*/}
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
//Export the app for reference in other modules.
export default App
