import React from 'react'
import Saldo from './Saldo'
import './Style.css'

class Header extends React.Component {
  render() {
    return (
      <div className="cadastro">
        <h2>APP</h2>
        <Saldo saldo={this.props.saldo} />
      </div>
    )
  }
}

export default Header
