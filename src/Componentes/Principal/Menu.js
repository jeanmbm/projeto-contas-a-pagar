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
      <div id="menu" className="teste">
        <Button
          id="pagar"
          acao="Pagar"
          estiloBotao="teste"
          metodo={this.mudarTransacaoPagamento}
        />

        <Button
          acao="Receber"
          id="receber"
          estiloBotao="teste"
          metodo={this.mudarTransacaoRecebimento}
        />

        <Button
          id="listar"
          acao="Extrato"
          estiloBotao="teste"
          metodo={this.mudarTransacaoListagem}
        />

        <Button
          id="sair"
          acao="Sair"
          estiloBotao="teste-sair"
          metodo={this.props.metodo}
        />
      </div>
    )
  }
}

export default Menu
