//Component that handles the Form of the app
//Is common practise to create different components in seperate
//files to prevent bloat

import React, { Component } from "react"

//Class definition for the Form
class Form extends Component {
  //Set the initial state of the form to be blank
  initialState = {
    name: "",
    job: "",
  }
  //Set the state to initialState when we begin.
  state = this.initialState
  //function to handle changes made to the form
  //(When the user types in something)
  handleChange = (event) => {
    //When something happens in the target, fetch the values.
    const { name, value } = event.target
    //set the state to the new value
    this.setState({
      [name]: value,
    })
  }
  //Function to handle form submission
  submitForm = () => {
    //Send the prop(the new data) to the Table Component
    this.props.handleSubmit(this.state)
    //Reset the state to initial state
    this.setState(this.initialState)
  }
  //Renderer of the form
  render() {
    //Create a constant to hold the data
    const { name, job } = this.state
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          //name is set to whatever value this input field holds
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          //job is set to whatever value this input field holds
          value={job}
          onChange={this.handleChange}
        />
        <input
          type="button"
          value="Submit"
          //Button confirms the values of name and job, and sends it.
          onClick={this.submitForm}
        />
      </form>
    )
  }
}

export default Form
