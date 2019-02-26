import React, { Component } from "react";
import * as firebase from "firebase";
import Chart from "./Charts";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";

class Datas extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      list: []
    };
    this.mois = React.createRef();
  }

  updateAmountQuery = event => {
    this.setState({ value: event.target.value, list: [] });
  };

  handleKeyPress = event => {
    if (event.key === "Enter" && this.mois.value === "Janvier") {
      this.changeAmount();
    } else {
      if (event.key === "Enter" && this.mois.value === "Février") {
        this.changeAmount2();
      } else {
        if (event.key === "Enter" && this.mois.value === "Mars") {
          this.changeAmount3();
        } else {
          if (event.key === "Enter" && this.mois.value === "Avril") {
            this.changeAmount4();
          } else {
            if (event.key === "Enter" && this.mois.value === "Mai") {
              this.changeAmount5();
            } else {
              if (event.key === "Enter" && this.mois.value === "Juin") {
                this.changeAmount6();
              } else {
                if (event.key === "Enter" && this.mois.value === "Juillet") {
                  this.changeAmount7();
                } else {
                  if (event.key === "Enter" && this.mois.value === "Aout") {
                    this.changeAmount8();
                  } else {
                    if (event.key === "Enter" && this.mois.value === "Septembre") {
                      this.changeAmount9();
                    } else {
                      if (event.key === "Enter" && this.mois.value === "Octobre") {
                        this.changeAmount10();
                      } else {
                        if (event.key === "Enter" && this.mois.value === "Novembre") {
                          this.changeAmount11();
                        } else {
                          if (event.key === "Enter" && this.mois.value === "Décembre") {
                            this.changeAmount12();
                          } 
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  changeAmount = () => {
    firebase
      .database()
      .ref()
      .update({
        janvier: Number(this.state.value)
      });
  };

  changeAmount2 = () => {
    firebase
      .database()
      .ref()
      .update({
        fevrier: Number(this.state.value)
      });
  };

  changeAmount3 = () => {
    firebase
      .database()
      .ref()
      .update({
        mars: Number(this.state.value)
      });
  };

  changeAmount4 = () => {
    firebase
      .database()
      .ref()
      .update({
        avril: Number(this.state.value)
      });
  };

  changeAmount5 = () => {
    firebase
      .database()
      .ref()
      .update({
        mai: Number(this.state.value)
      });
  };

  changeAmount6 = () => {
    firebase
      .database()
      .ref()
      .update({
        juin: Number(this.state.value)
      });
  };

  changeAmount7 = () => {
    firebase
      .database()
      .ref()
      .update({
        juillet: Number(this.state.value)
      });
  };

  changeAmount8 = () => {
    firebase
      .database()
      .ref()
      .update({
        aout: Number(this.state.value)
      });
  };

  changeAmount9 = () => {
    firebase
      .database()
      .ref()
      .update({
        septembre: Number(this.state.value)
      });
  };

  changeAmount10 = () => {
    firebase
      .database()
      .ref()
      .update({
        octobre: Number(this.state.value)
      });
  };

  changeAmount11 = () => {
    firebase
      .database()
      .ref()
      .update({
        novembre: Number(this.state.value)
      });
  };

  changeAmount12 = () => {
    firebase
      .database()
      .ref()
      .update({
        decembre: Number(this.state.value)
      });
  };


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
      (
        <div>
          <h1 className="headerTitle"> Savings </h1>
          <select className="select" ref={select => (this.mois = select)}>
            <option>Janvier</option>
            <option>Février</option>
            <option>Mars</option>
            <option>Avril</option>
            <option>Mai</option>
            <option>Juin</option>
            <option>Juillet</option>
            <option>Aout</option>
            <option>Septembre</option>
            <option>Octobre</option>
            <option>Novembre</option>
            <option>Décembre</option>
          </select>
          <input
            className="input"
            pattern="[0-9]"
            onChange={this.updateAmountQuery}
            onKeyPress={this.handleKeyPress}
            placeholder="Montant"
          /> 
          <Chart list={this.state.list} />
          <Chart2 list={this.state.list} />
          <Chart3 list={this.state.list} />
        </div>
      )
    );
  }
}

export default Datas;
