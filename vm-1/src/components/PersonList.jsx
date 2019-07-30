import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    reply: []
  };

  componentDidMount() {
    axios.get(`http://192.168.55.11:3000/notes`).then(res => {
      const reply = res.data;
      console.log(reply);
      this.setState({ reply });
    });
  }

  render() {
    return (
      <ul>
        {this.state.reply.map(person => (
          <li key={person._id}>{person.note}</li>
        ))}
      </ul>
    );
  }
}
