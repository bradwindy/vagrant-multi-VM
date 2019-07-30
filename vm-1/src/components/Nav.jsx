import React from "react";
import axios from "axios";

export default class Nav extends React.Component {
  state = {
    note: { note: "" }
  };

  handleChange = event => {
    this.setState({ note: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const note = {
      note: this.state.note.note
    };

    axios.post(`http://192.168.55.11:3000/note`, { note }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Note:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
