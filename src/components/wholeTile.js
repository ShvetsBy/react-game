import React, { Component } from 'react';
import Tile from '../components/Tile';
import Coin from '../components/coin';

import '../index.css';

class WholeTile extends Component {
  render() {
    return (
      // <div className="whole-tile">
      <div>
        <Tile classprop="game-field-tile" />
        {/* <Coin classprop="game-field-coin" /> */}
      </div>
    );
  }
}

export default WholeTile;
