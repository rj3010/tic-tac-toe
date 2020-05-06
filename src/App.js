/** @format */

import React, { Component } from "react";
import "./App.css";
import Winstatus from "./components/WinStatus";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matrix: Array(9).fill(null),
      player: null,
      winner: null,
      isDraw: false,
    };
  }

  displayMatrix() {
    const { matrix } = this.state;
    return matrix.map((ele, index) => {
      return (
        <div
          className={`div${index + 1}`}
          key={index + 1}
          onClick={() => this.handleClick(index)}
        >
          {ele === "X" && <div id="cross"></div>}
          {ele === "O" && <div id="zero"></div>}
        </div>
      );
    });
  }

  handleClick = (index) => {
    const { player, winner, matrix } = this.state;
    if (player && !winner) {
      let updatedMatrix = matrix,
        count = 0;
      console.log();
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] === null) {
          count++;
        }
      }

      if (count === 1) {
        updatedMatrix[index] = player;
        this.setState(
          {
            matrix: updatedMatrix,
          },
          () => {
            let isAnyWinner = this.findWinner();
            console.log(isAnyWinner);
            if (isAnyWinner === false) {
              this.setState({
                isDraw: true,
                winner: null,
              });
            }
          }
        );
      }

      if (matrix[index] === null) {
        updatedMatrix[index] = player;
        this.setState({
          matrix: updatedMatrix,
          player: player === "X" ? "O" : "X",
        });
        this.findWinner();
      }
    }
  };

  findWinner = () => {
    let winnerSets = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];
    return this.checkWinChance(winnerSets);
  };

  checkWinChance = (winnerSets) => {
    const { player, matrix } = this.state;

    for (let i = 0; i < winnerSets.length; i++) {
      const [a, b, c] = winnerSets[i];
      if (matrix[a] && matrix[a] === matrix[b] && matrix[a] === matrix[c]) {
        this.setState({
          winner: player,
        });
        return true;
      }
    }
    return false;
  };

  selectPlayer = (player) => {
    this.setState({
      player: player,
    });
  };

  reset = () => {
    let element = document.getElementById("main-head");
    element.classList.remove("header-resize");
    this.setState({
      player: null,
      winner: null,
      isDraw: false,
      matrix: Array(9).fill(null),
    });
  };

  render() {
    const { player, winner, isDraw } = this.state;
    return (
      <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
        <div className="header" id="main-head">
          <Winstatus
            player={player}
            selectPlayer={(e) => {
              this.selectPlayer(e);
            }}
            isDraw={isDraw}
            winner={winner}
          />
        </div>

        <div className="main">
          <div className="App">{this.displayMatrix()}</div>
        </div>

        <div className="footer-box">
          <button className="button" id="btn" onClick={() => this.reset()}>
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default App;
