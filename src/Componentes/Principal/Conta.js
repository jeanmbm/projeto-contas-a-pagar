import React from 'react'
import Transação from './Transação'
import Header from './Header'
import Menu from './Menu'
import '../Style.css'
import Listagem from './Listagem'

class Conteudo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recebimento: false,
      pagamento: false,
      listagem: false,
      transacaoAtual: 'Listagem',
      saldo: 1000.0,
      lista: [
        {
          valor: 75,
          descricao: 'Cartão',
          tipo: 'Pagamento',
          data: this.dataHoraTransacao()
        }
      ]
    }
  }

  mudarTransacaoAtual = transacao => {
    this.setState({ transacaoAtual: transacao })
  }

  dataHoraTransacao = () => {
    const data = new Date()
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()
    const dataAtual = dia + '/' + mes + '/' + ano
    const hora = new Date().toLocaleTimeString()
    const dataHora = dataAtual + ' ' + hora
    return dataHora
  }

  verificarDadosTransacao = (valorTransacao, descricaoTransacao) => {
    if (valorTransacao !== '' && descricaoTransacao !== '') {
      return true
    }
    return false
  }

  adicionarTrasancao = (valorTransacao, descricaoTransacao, tipoTransacao) => {
    const isPassed = this.verificarDadosTransacao(
      valorTransacao,
      descricaoTransacao
    )
    if (isPassed) {
      const transacao = {
        valor: valorTransacao,
        descricao: descricaoTransacao,
        tipo: tipoTransacao,
        data: this.dataHoraTransacao()
      }
      this.setState({ lista: [...this.state.lista, transacao] })
      this.setState({ transacaoAtual: 'Listagem' })
    } else {
      const error = document.getElementById('failTransaction')
      error.classList.remove('hidden')
      error.classList.add('show')
    }
  }

  render() {
    let transacao
    if (this.state.transacaoAtual === 'Pagamento') {
      transacao = (
        <Transação
          titulo="Contas a pagar"
          tipo="Pagamento"
          metodo={this.adicionarTrasancao}
        />
      )
    } else if (this.state.transacaoAtual === 'Recebimento') {
      transacao = (
        <Transação
          titulo="Contas a receber"
          tipo="Recebimento"
          metodo={this.adicionarTrasancao}
        />
      )
    } else {
      transacao = <Listagem lista={this.state.lista} />
    }

    return (
      <div className="container-grid">
        <div className="Header">
          <Header saldo={this.state.saldo} lista={this.state.lista} />
        </div>
        <div className="Menu">
          <Menu mudarTransacao={this.mudarTransacaoAtual} />
        </div>
        <div className="Content">{transacao}</div>
      </div>
    )
  }
}
export default Conteudo
