import React from 'react'
import Button from './Button'
import './Style.css'

class Menu extends React.Component {
  render() {
    return (
      <div className="">
        <div className="flex-container">
          <Button estiloContainer="flex-item" acao="Pagar" />
          <Button estiloContainer="flex-item" acao="Receber" />
          <Button estiloContainer="flex-item" acao="Extrato" />
        </div>
        <div>
          <Button
            estiloContainer="loggout"
            estiloBota="estiloBotao"
            acao="Sair"
            metodo={this.props.metodo}
          />
        </div>
      </div>
    )
  }
}

export default Menu
