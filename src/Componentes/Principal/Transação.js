import React from 'react'
import Button from '../Auxiliares/Button'
import Input from '../Auxiliares/Input'
import TextArea from '../Auxiliares/TextArea'

class Transação extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valor: ''
    }
  }

  mudarTexto = e => {
    this.setState({ valor: e.target.value })
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

          <TextArea
            name="descricaoPagamento"
            id="descricaoPagametno"
            styleTextarea="text-area"
            placeholder="Descrição"
            value={this.state.valor}
            onChange={this.mudarTexto}
          />

          <Button acao="Salvar" estiloBotao="button button-conta-pagar " />
        </div>
      </div>
    )
  }
}

export default Transação
