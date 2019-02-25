import React, { Component } from "react";
import * as firebase from "firebase";
import Chart from "./Charts";
import Chart2 from "./Chart2";

class Datas extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      list: []
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const janvierRef = rootRef.child("janvier");
    const fevrierRef2 = rootRef.child("fevrier");
    const marsRef3 = rootRef.child("mars");
    const avrilRef4 = rootRef.child("avril");
    const maiRef5 = rootRef.child("mai");
    const juinRef6 = rootRef.child("juin");
    const juilletRef7 = rootRef.child("juillet");
    const aoutRef8 = rootRef.child("aout");
    const septembreRef9 = rootRef.child("septembre");
    const octobreRef10 = rootRef.child("octobre");
    const novembreRef11 = rootRef.child("novembre");
    const decembreRef12 = rootRef.child("decembre");

    janvierRef.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    fevrierRef2.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    marsRef3.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    avrilRef4.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    maiRef5.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    juinRef6.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    juilletRef7.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    aoutRef8.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    septembreRef9.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    octobreRef10.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    novembreRef11.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
    decembreRef12.on("value", snap => {
      this.setState(state => {
        const list = state.list.concat(snap.val());
        return {
          list,
          value: ""
        };
      });
    });
  }

  render() {
    return (
      console.log("valeur du tableau", this.state.list),
      (
        <div>
          <Chart list={this.state.list} />
          <Chart2 list={this.state.list} />
        </div>
      )
    );
  }
}

export default Datas;
