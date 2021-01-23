import React from 'react';

import axios from 'axios';

export default class CharacterList extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const characters = res.data;
        this.setState({ characters });
      })
  }

  render() {
    return (
      <ul>
        { this.state.characters.map(character => <li>{character.name}</li>)}
      </ul>
    )
  }
}