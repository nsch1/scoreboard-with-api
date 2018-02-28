import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import Player from '../components/Player'
import './Board.css'

class Board extends PureComponent {
  render() {
    const players = this.props.players

    const sortedPlayers = players.concat().sort((a, b) => {
      return b.score - a.score
    })

    return (
      <div>
        <ul className="Board">
          {sortedPlayers.map((player, index) => (
            <Player key={index} { ...player } />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ players }) => ({ players })

export default connect(mapStateToProps)(Board)