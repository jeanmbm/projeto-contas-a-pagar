import React from 'react'
import { Navigate } from 'react-router-dom'
import Conta2 from './Conta2'
import Header from './Header'
import Menu from './Menu'
import '../Style.css'

class Conteudo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      saldo: 1000.0
    }
  }

  loggout = () => {
    alert('aqui')
    return <Navigate to={'/'} />
  }

  render() {
    return (
      <div className="container-grid">
        <div className="Header">
          <Header saldo={this.state.saldo} />
        </div>
        <div className="Menu">
          <Menu metodo={this.loggout} />
        </div>
        <div className="Content">
          <Conta2 texto="Contas a pagar" />
        </div>
      </div>
    )
  }
}
export default Conteudo
