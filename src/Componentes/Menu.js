import React from 'react'
import Button from './Button'
import './Style.css'

class Menu extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <Button estiloContainer="flex-item" acao="Pagar" />
        <Button estiloContainer="flex-item" acao="Receber" />
        <Button estiloContainer="flex-item" acao="Extrato" />
        <Button estiloContainer="flex-item" acao="Sair" />
      </div>
    )
  }
}

export default Menu
