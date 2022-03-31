import React from 'react'
import { Navigate } from 'react-router-dom'
import Button from './Button'
import Cadastro from './Cadastro'
import Input from './Input'
import './Style.css'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      usernameLogin: '',
      passwordLogin: '',
      usernameCadastro: '',
      passwordCadastro: '',
      mostrarCadastro: false,
      isLoggedin: false
    }
  }

  escutarInputUsername = e => {
    this.setState({ usernameLogin: e.target.value })
  }

  escutarInputPassword = e => {
    this.setState({ passwordLogin: e.target.value })
  }

  telaCadastro = () => {
    this.setState({ mostrarCadastro: true })
    e.preventDefault()
  }

  efetuarCadastro = (username, password) => {
    this.setState({
      usernameCadastro: username,
      passwordCadastro: password,
      mostrarCadastro: false
    })
  }

  loginVerificator = e => {
    alert(this.state.usernameCadastro + this.state.passwordCadastro)
    alert(this.state.usernameLogin + this.state.passwordLogin)
    if (
      this.state.usernameLogin === this.state.usernameCadastro &&
      this.state.passwordLogin === this.state.passwordCadastro
    ) {
      this.setState({ isLoggedin: true })
      alert(this.state.isLoggedin)
    } else {
      const userNotEnter = document.getElementById('userNotEnter')
      userNotEnter.classList.remove('hide')
      userNotEnter.classList.add('show')
    }
  }

  render() {
    if (this.state.isLoggedin) {
      return <Navigate to={'/conta'} />
    } else {
      return (
        <div>
          <div className="main show">
            <div className="container">
              <form>
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
                  value={this.state.usernameLogin}
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
                  value={this.state.passwordLogin}
                  onChange={this.escutarInputPassword}
                />

                <p id="userNotEnter" className="userNotEnter hidden">
                  Usuario não cadastrado
                </p>

                <div className="cadastro">
                  <p>Não tem cadastro?</p>
                  <button onClick={this.mostrarCadastro}>Cadastrar</button>
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
        </div>
      )
    }
  }
}

export default Login
