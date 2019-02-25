import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class Chart2 extends Component {
  render() {
    let total = 0;
    for(var i = 0;i<=11;i++){
    total += (this.props.list[i]);
}

    const chartConfigs = {
      type: "column2d", // The chart type
      width: "1200", // Width of the chart
      height: "600", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "2019 Savings",
          subCaption: "In Euros ",
          xAxisName: "Mois",
          yAxisName: "Euros",
          numberSuffix: " Euros",
          theme: "fusion",
        },
        // Chart Data
        data: [
          {
            label: "Janvier",
            value: this.props.list[0]
          },
          {
            label: "Février",
            value: this.props.list[1]
          },
          {
            label: "Mars",
            value: this.props.list[2]
          },
          {
            label: "Avril",
            value: this.props.list[3]
          },
          {
            label: "Mai",
            value: this.props.list[4]
          },
          {
            label: "Juin",
            value: this.props.list[5]
          },
          {
            label: "Juillet",
            value: this.props.list[6]
          },
          {
            label: "Aout",
            value: this.props.list[7]
          },
          {
            label: "Septembre",
            value: this.props.list[8]
          },
          {
            label: "Octobre",
            value: this.props.list[9]
          },
          {
            label: "Novembre",
            value: this.props.list[10]
          },
          {
            label: "Décembre",
            value: this.props.list[11]
          },
          {
            label: "Total",
            value: total,
            color: "#9b59b6"
          }
        ]
      }
    };

    return <ReactFC {...chartConfigs} />;
  }
}

export default Chart2;
