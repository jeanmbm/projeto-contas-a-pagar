import React from 'react'
import Button from '../Auxiliares/Button'
import Input from '../Auxiliares/Input'

class Conta2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  mudarTexto = e => {
    this.setState({ value: e.target.valeu })
  }

  render() {
    return (
      <div className="flex-container">
        <h2 className="title-conta">{this.props.texto}</h2>
        <div>
          <Input
            styleDivContainer=""
            labelStyle=""
            labelText=""
            inputId="valorPagar"
            inputType="number"
            inputName="valorPagar"
            inputStyle="input-conta"
            inputPlaceholder="Valor"
            minValue="0"
          />

          <textarea
            name="descricao"
            id="descricao"
            placeholder=""
            className="text-area"
          ></textarea>

          <Button acao="Salvar" estiloBotao="button button-conta-pagar " />
        </div>
      </div>
    )
  }
}

export default Conta2
