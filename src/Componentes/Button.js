import React from 'react'
import './Style.css'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      acao: '',
      estiloContainer: '',
      estiloBotao: ''
    }
  }

  metodo = () => {
    console.log('aqui')
    //this.props.metodo
  }

  render() {
    return (
      <div className={this.props.estiloContainer}>
        <button onClick={this.metodo} className={this.props.estiloBotao}>
          {this.props.acao}
        </button>
      </div>
    )
  }
}

export default Button
