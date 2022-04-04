import React from 'react'
import Button from '../Auxiliares/Button'
import '../Style.css'

class Menu extends React.Component {
  mudarTransacaoPagamento = () => {
    this.props.mudarTransacao('Pagamento')
  }

  mudarTransacaoRecebimento = () => {
    this.props.mudarTransacao('Recebimento')
  }

  mudarTransacaoListagem = () => {
    this.props.mudarTransacao('Listagem')
  }
  render() {
    return (
      <div>
        <Button
          id="pagar"
          acao="Pagar"
          estiloBotao="btn-menu"
          metodo={this.mudarTransacaoPagamento}
        />

        <Button
          acao="Receber"
          id="receber"
          estiloBotao="btn-menu"
          metodo={this.mudarTransacaoRecebimento}
        />

        <Button
          id="listar"
          acao="Extrato"
          estiloBotao="btn-menu"
          metodo={this.mudarTransacaoListagem}
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
