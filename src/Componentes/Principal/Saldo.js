import React from 'react'

class Saldo extends React.Component {
  render() {
    let saldoPositivo
    let saldoNegativo
    let times = this.props.lista.length
    for (let i = 0; i <= times; i++) {
      let value = this.props.lista.valor
      if (this.props.lista.tipo === 'Recebimento') {
        saldoPositivo += value
      } else {
        saldoNegativo += value
      }
    }

    let saldoFinal = saldoPositivo - saldoNegativo

    return <div>Saldo: R${saldoFinal}</div>
  }
}

export default Saldo
