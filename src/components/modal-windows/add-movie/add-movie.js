import React from "react";
import { FormInput, FormDateInput } from '../../index';

export class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      URL: "",
      overview: "",
      runTime: "",
      releaseDate: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="add-movie__input">
          <FormInput name="title" value={this.state.title} onChange={this.handleChange} text={true} placeholder="Title" label="Title"></FormInput>
        </div>
        <div className="add-movie__input">
          <FormInput name="URL" value={this.state.URL} onChange={this.handleChange} placeholder="Movie URL here" label="Movie URL"></FormInput>
        </div>
        <div className="add-movie__input">
          <FormInput name="overview" value={this.state.overview} onChange={this.handleChange} placeholder="Overview here" label="Overview"></FormInput>
        </div>
        <div className="add-movie__input">
          <FormInput name="runTime" value={this.state.runTime} onChange={this.handleChange} placeholder="Run time here" label="Run time"></FormInput>
        </div>
        <div className="add-movie__input">
          <FormDateInput name="releaseDate" value={this.state.releaseDate} onChange={this.handleChange} label="Release date"></FormDateInput>
        </div>
      </form>
    )
  }
};