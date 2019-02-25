import React, { Component } from "react";
import fire from "./Fire";
import Datas from "./Datas";
import "./styles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="tableau">
        <Datas />
        <button className="logout" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Home;
