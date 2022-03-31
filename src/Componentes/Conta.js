import React from 'react'
import Conta2 from './Conta2'
import Header from './Header'
import './Style.css'

class Conteudo extends React.Component {
  render() {
    return (
      <div className="container-grid">
        <div className="Header">
          <Header />
        </div>
        <div className="Menu">Menu</div>
        <div className="Content">
          <Conta2 />
        </div>
      </div>
    )
  }
}
export default Conteudo
