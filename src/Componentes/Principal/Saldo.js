import React from 'react'

class Saldo extends React.Component {
  render() {
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
