import React from "react";
import Form from "./Form";
import "./App.css";
import CardList from "./CardList";

class App extends React.Component {
  state = {
    profiles: [],
  };

  constructor(props) {
    super(props);
    this.removeFromProfiles = this.removeFromProfiles.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  // add new profile
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  //remove from profile list
  removeFromProfiles = (id) => {
    this.setState({
      profiles: this.state.profiles.filter((profile) => profile.id !== id),
    });
    console.log(id);
  };

  //check duplicates
  handleCheck=(val)=> {
    return this.state.profiles.some(item => item.name === val);
 };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        
        <Form onSubmit={this.addNewProfile} onCheck={this.handleCheck} />
        <span><h4>Users Listed: {this.state.profiles.length}</h4></span>
        <CardList
          profiles={this.state.profiles}
          removeProfile={this.removeFromProfiles}
        />
      </div>
    );
  }
}

export default App;
