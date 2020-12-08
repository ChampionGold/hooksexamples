import React, { Component } from "react";
import { stockData } from "./stocks";

export default class OldFetch extends Component {
  state = { data: [] };
  
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/ChampionGold/rawjsonfiles/main/5ROWS_MOCKDATA.json")
      .then(response => response.json())
      .then(data =>
        this.setState(() => {
          return { data };
        })
      );
  }

  render() {
    return (
      <div>
          
        <ul>
          {this.state.data.map(el => (
            <li key={el.id}>Name: {el.first_name} {el.last_name}, Email: {el.email} </li>
          ))}
        </ul>
      </div>
    );
  }
}