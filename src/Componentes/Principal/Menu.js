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
      <div className="">
        <div className="flex-container">
          <Button
            estiloContainer="flex-item"
            acao="Pagar"
            metodo={this.mudarTransacaoPagamento}
          />
          <Button
            estiloContainer="flex-item"
            acao="Receber"
            metodo={this.mudarTransacaoRecebimento}
          />
          <Button
            estiloContainer="flex-item"
            acao="Extrato"
            metodo={this.mudarTransacaoListagem}
          />
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
