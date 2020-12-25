import React, { Component } from "react";
import "./App.css";
import WhiteKey from "./components/WhiteKey/WhiteKey";
import BlackKey from "./components/BlackKey/BlackKey";
import c from "./components/WhiteKey/WhiteNodes/c.mp3";
import d from "./components/WhiteKey/WhiteNodes/d.mp3";
import e from "./components/WhiteKey/WhiteNodes/e.mp3";
import f from "./components/WhiteKey/WhiteNodes/f.mp3";
import g from "./components/WhiteKey/WhiteNodes/g.mp3";
import a from "./components/WhiteKey/WhiteNodes/a.mp3";
import b from "./components/WhiteKey/WhiteNodes/b.mp3";
import p from "./components/WhiteKey/WhiteNodes/ctop.mp3";
import csharp from "./components/BlackKey/BlackNodes/csharp.mp3";
import dsharp from "./components/BlackKey/BlackNodes/dsharp.mp3";
import fsharp from "./components/BlackKey/BlackNodes/fsharp.mp3";
import gsharp from "./components/BlackKey/BlackNodes/gsharp.mp3";
import asharp from "./components/BlackKey/BlackNodes/asharp.mp3";

class App extends Component {
  state = {
    whitenodes: [c, d, e, f, g, a, b, p],
    blacknodes: [csharp, dsharp, fsharp, gsharp, asharp]
  };

  whiteNodeplay = node => {
    this.state.whitenodes.forEach(musicnode => {
      let tempstr = String(musicnode);
      let temp = tempstr.substring(tempstr.length - 14, tempstr.length - 13);
      if (temp === node) {
        let audio = new Audio(musicnode);
        audio.play();
      }
    });
  };

  blackNodeplay = node => {
    this.state.blacknodes.forEach(musicnode => {
      let tempstr = String(musicnode);
      let temp = tempstr.substring(tempstr.length - 19, tempstr.length - 13);
      if (temp === node) {
        let audio = new Audio(musicnode);
        audio.play();
      }
    });
  };

  render() {
    return <div>
        <WhiteKey node="c" nodePlay={this.whiteNodeplay} />
        <BlackKey node="csharp" nodePlay={this.blackNodeplay} />
        <WhiteKey node="d" nodePlay={this.whiteNodeplay} />
        <BlackKey node="dsharp" nodePlay={this.blackNodeplay} />
        <WhiteKey node="e" nodePlay={this.whiteNodeplay} />
        <WhiteKey node="f" nodePlay={this.whiteNodeplay} />
        <BlackKey node="fsharp" nodePlay={this.blackNodeplay} />
        <WhiteKey node="g" nodePlay={this.whiteNodeplay} />
        <BlackKey node="gsharp" nodePlay={this.blackNodeplay} />
        <WhiteKey node="a" nodePlay={this.whiteNodeplay} />
        <BlackKey node="asharp" nodePlay={this.blackNodeplay} />
        <WhiteKey node="b" nodePlay={this.whiteNodeplay} />
        <WhiteKey node="p" nodePlay={this.whiteNodeplay} />
      </div>;
  }
}

export default App;
