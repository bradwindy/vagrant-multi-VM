import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    reply: ""
  };

  componentDidMount() {
    axios.get(`http://192.168.55.11:3000/reply`).then(res => {
      const reply = res.data;
      this.setState({ reply });
    });
  }

  render() {
    return <p>{this.state.reply}</p>;
  }
}
