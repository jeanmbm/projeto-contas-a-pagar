import React from 'react'
import './Style.css'
import Button from './Button'
import Input from './Input'

class Cadastro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  alterarUsername = e => {
    this.setState({ username: e.target.value })
  }

  alterarPassword = e => {
    this.setState({ password: e.target.value })
  }

  submeterForm = () => {
    alert(this.state.username + this.state.password)
    this.props.metodo(this.state.username, this.state.password)
  }

  render() {
    return (
      <div className="container-cadastro">
        <form action="/">
          <h2 className="title-cadastro">Cadastro</h2>

          <hr />

          <div className="container-itens-cadastro">
            <Input
              styleDivContainer="division"
              labelStyle="text-label"
              labelText="Informe um nome para usuário:"
              inputId="username"
              inputType="text"
              inputName="username"
              inputStyle="input input-cadastro"
              inputPlaceholder=""
              value={this.state.username}
              onChange={this.alterarUsername}
            />

            <Input
              labelStyle="text-label"
              labelText="Informe uma senha:"
              inputId="password"
              inputType="password"
              inputName="password"
              inputStyle="input input-cadastro"
              value={this.state.password}
              onChange={this.alterarPassword}
            />
          </div>

          <Button
            acao="salvar"
            estiloContainer="container-itens-cadastro container-button-cadastro"
            estiloBotao="button button-cadastro"
            metodo={this.submeterForm}
          />
        </form>
      </div>
    )
  }
}

export default Cadastro
