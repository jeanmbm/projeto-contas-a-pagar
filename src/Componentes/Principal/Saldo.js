import React from 'react'

class Saldo extends React.Component {
  render() {
    let saldoFinal = 0
    for (let i = 0; i < this.props.lista.length; i++) {
      if (this.props.lista.tipo === 'Pagamento') {
        saldoFinal += this.props.valor
      } else {
        saldoFinal -= this.props.valor
      }
    }

    const saldo = this.props.lista.reduce((valor, currentItem) => {
      if (currentItem.tipo === 'Recebimento') {
        return (valor = valor + currentItem.valor)
      } else {
        return (valor = valor - currentItem.valor)
      }
    })

    return <div>Saldo: R${String(saldo).replace('.', ',')}</div>
  }
}

export default Saldo
