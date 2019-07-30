import React from "react";
import axios from "axios";

export default class NoteList extends React.Component {
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
        {this.state.reply.map(note => (
          <li key={note._id}>{note.note}</li>
        ))}
      </ul>
    );
  }
}
