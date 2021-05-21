import React from "react";
import axios from "axios";
class Form extends React.Component {
  state = { userName: "" };

  handleSubmit = async (event) => {
    event.preventDefault();

    const res = ()=>{this.props.onCheck(this.state.userName)}

    if(res){
    await axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then((response) => {
        this.props.onSubmit(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          alert("The user does not exist!");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    }
    
    this.setState({ userName: "" });
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

export default Form;
