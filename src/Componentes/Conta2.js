import React from 'react'
import Input from './Input'

class Conta2 extends React.Component {
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
        </div>
      </div>
    )
  }
}

export default Conta2
