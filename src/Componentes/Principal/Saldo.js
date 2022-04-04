import React from 'react'

class Saldo extends React.Component {
  render() {
    if (this.props.lista.tipo == 'Recebimento') {
      valor = valor + currentItem.valor
    } else {
      valor = valor - currentItem.valor
    }

    const saldoFinal = this.props.lista.reduce((valor, currentItem) => {
      if (currentItem.tipo == 'Recebimento') {
        valor = valor + currentItem.valor
      } else {
        valor = valor - currentItem.valor
      }
    })

    return <div>Saldo: R${String(saldoFinal).replace('.', ',')}</div>
  }
}

export default Saldo
