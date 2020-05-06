/** @format */

import React, { Component } from "react";
import SelectPlayer from "./SelectPlayer";

class WinStatus extends Component {
  handleSelectPlayer = (e) => {
    this.props.selectPlayer(e);
  };

  renderWinnerOrPlayer = () => {
    const { isDraw, winner, player } = this.props;
    
    if (isDraw) {
      return <h2>Match Tie</h2>;
    } else if (winner) {
      return <h2>Winner is {winner}</h2>;
    } else {
      return player ? (
        <h2>Next player is {player}</h2>
      ) : (
        <SelectPlayer player={(e) => this.handleSelectPlayer(e)} />
      );
    }
  };

  render() {
    return <span>{this.renderWinnerOrPlayer()}</span>;
  }
}

export default WinStatus;
