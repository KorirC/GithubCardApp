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
      profiles: this.state.profiles.filter((item) => item.id !== id),
    });
    console.log(id);
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList
          profiles={this.state.profiles}
          removeProfile={this.removeFromProfiles}
        />
      </div>
    );
  }
}

export default App;
