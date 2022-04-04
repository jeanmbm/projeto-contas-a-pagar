import React from 'react'
import Button from '../Auxiliares/Button'
import '../Style.css'

class Menu extends React.Component {
  mudarTelaPagamento = () => {
    this.props.mudarTela('Pagamento')
  }

  mudarTelaRecebimento = () => {
    this.props.mudarTela('Recebimento')
  }

  mudarTelaListagem = () => {
    this.props.mudarTela('Listagem')
  }
  render() {
    return (
      <div>
        <Button
          id="pagar"
          acao="Pagar"
          estiloBotao="btn-menu"
          metodo={this.mudarTelaPagamento}
        />

        <Button
          acao="Receber"
          id="receber"
          estiloBotao="btn-menu"
          metodo={this.mudarTelaRecebimento}
        />

        <Button
          id="listar"
          acao="Extrato"
          estiloBotao="btn-menu"
          metodo={this.mudarTelaListagem}
        />

        <Button
          id="sair"
          acao="Sair"
          estiloBotao="btn-menu"
          metodo={this.props.metodo}
        />
      </div>
    )
  }
}

export default Menu
