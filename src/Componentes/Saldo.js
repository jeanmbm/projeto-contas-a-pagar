import React from 'react'

class Saldo extends React.Component {
  render() {
    return <div>Saldo: R${String(this.props.saldo).replace('.', ',')}</div>
  }
}

export default Saldo
