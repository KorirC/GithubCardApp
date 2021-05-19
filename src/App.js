import React from "react";
import "./App.css";
import axios from "axios";

const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <table id="user">
          <tbody>
            <tr>
              <th></th>
            </tr>
            <tr key={profile.id}>
              <td>
                <img src={profile.avatar_url} alt="" />
                <div className="info">
                  <div className="name">{profile.name}</div>
                  <div className="company">{profile.company}</div>
                  <div className="followers">{profile.followers}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
    console.log(resp.data);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: [],
  };

  // add new profile
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
