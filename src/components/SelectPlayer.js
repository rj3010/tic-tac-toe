/** @format */

import React, { Component } from "react";

class SelectPlayer extends Component {
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  addCssClass = () => {
    let element = document.getElementById("main-head");
    element.classList.add("header-resize");
  };
  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleForm(e)}>
          <h2 style={{ textAlign: "center" }}>Pick your side</h2>
          <div className="container-box">
            <div className="header1">
              <div id="cross"></div>
              <label className="container" id="container1">
                <input
                  type="radio"
                  name="player"
                  htmlFor="container"
                  value="X"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="header1">
              <div id="zero"></div>
              <label className="container" id="container2">
                <input
                  type="radio"
                  name="player"
                  htmlFor="container"
                  value="O"
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="container-box">
            <button className="button" onClick={() => this.addCssClass()}>
              Start
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default SelectPlayer;
