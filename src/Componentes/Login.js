import React from 'react'
import Button from './Button'
import Input from './Input'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  escutarInputUsername = e => {
    this.setState({ username: e.target.value })
  }

  escutarInputPassword = e => {
    this.setState({ password: e.target.value })
  }

  loginVerificator = () => {
    this.props.metodo(this.state.username, this.state.password)
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <form action="/conta">
            <h1 className="title-login">LOGIN</h1>

            <Input
              styleDivContainer="input-login"
              labelStyle="hidden"
              labelText=""
              inputId="username"
              inputType="text"
              inputName="username"
              inputStyle="input"
              inputPlaceholder="Username"
              value={this.state.username}
              onChange={this.escutarInputUsername}
            />

            <Input
              styleDivContainer="input-login"
              labelStyle="hidden"
              labelText=""
              inputId="password"
              inputType="password"
              inputName="password"
              inputStyle="input"
              inputPlaceholder="Password"
              value={this.state.password}
              onChange={this.escutarInputPassword}
            />

            <p id="userNotEnter" className="userNotEnter">
              Usuario não cadastrado
            </p>

            <div className="cadastro">
              <p>Não tem cadastro?</p>
              <a href="/cadastro">Cadastrar</a>
            </div>

            <Button
              acao="entrar"
              estiloContainer="button-container-login"
              estiloBotao="button button-login"
              metodo={this.loginVerificator}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Login
