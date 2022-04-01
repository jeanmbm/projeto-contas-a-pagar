import React from 'react'
import Button from './Button'
import Input from './Input'

class Conta2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Escreva uma descrição'
    }
  }

  mudarTexto = e => {
    this.setState({ value: e.target.valeu })
  }

  render() {
    return (
      <div>
        <h2>{this.props.texto}</h2>
        <div>
          <Input
            styleDivContainer=""
            labelStyle=""
            labelText=""
            inputId="valorPagar"
            inputType="number"
            inputName="valorPagar"
            inputStyle=""
            inputPlaceholder="Valor"
          />

          <textarea
            value={this.state.value}
            onChange={this.mudarTexto}
          ></textarea>

          <Button
            acao="Salvar"
            estiloContainer="button-container-login"
            estiloBotao="button button-login"
          />
        </div>
      </div>
    )
  }
}

export default Conta2
