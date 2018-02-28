import React, { PureComponent } from 'react'
import PlusOneButton from './PlusOneButton'
import {connect} from 'react-redux'
import {scorePlusOne} from '../actions/scoreboard'
import './Player.css'

class Player extends PureComponent {

  handleClick = () => {
    this.props.scorePlusOne(this.props.id)
  }

  render() {
    const { name, score } = this.props

    return (
      <li className="Player">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
        <PlusOneButton  onClick={this.handleClick} />
      </li>
    )
  }
}

export default connect(null, { scorePlusOne })(Player)