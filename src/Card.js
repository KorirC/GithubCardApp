import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;

    return (
      <>
        <div className="github-profile">
          <table id="user">
            <tbody>
              <tr>
                <th></th>
              </tr>
              <tr>
                <td>
                  <img src={profile.avatar_url} alt="" />
                  <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">Company: {profile.company}</div>
                    <div className="followers">Followers: {profile.followers}</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => this.props.removeProfile(profile.id)}>
            Remove
          </button>
        </div>
        <div></div>
      </>
    );
  }
}

export default Card;
