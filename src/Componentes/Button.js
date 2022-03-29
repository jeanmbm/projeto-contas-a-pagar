import React from 'react'
import './Style.css'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  metodo = () => {
    this.props.metodo()
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
