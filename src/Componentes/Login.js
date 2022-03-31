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
      isLoggedin: false
    }
  }

  escutarInputUsername = e => {
    this.setState({ usernameLogin: e.target.value })
  }

  escutarInputPassword = e => {
    this.setState({ passwordLogin: e.target.value })
  }

  telaCadastro = e => {
    const login = document.getElementById('login')
    login.classList.remove('show')
    login.classList.add('hidden')

    const cadastro = document.getElementById('cadastro')
    cadastro.classList.remove('hidden')
    cadastro.classList.add('show')

    e.preventDefault()
  }

  efetuarCadastro = (username, password, e) => {
    this.setState({
      usernameCadastro: username,
      passwordCadastro: password,
      mostrarCadastro: false
    })

    const cadastro = document.getElementById('cadastro')
    cadastro.classList.remove('show')
    cadastro.classList.add('hidden')

    const login = document.getElementById('login')
    login.classList.remove('hidden')
    login.classList.add('show')

    e.preventDefault()
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
      userNotEnter.classList.remove('hidden')
      userNotEnter.classList.add('show')
    }
  }

  render() {
    if (this.state.isLoggedin) {
      return <Navigate to={'/conta'} />
    } else {
      return (
        <div>
          <div id="login" className="main show">
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
                  <button onClick={this.telaCadastro}>Cadastrar</button>
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

          <div id="cadastro" className="container-cadastro hiddden">
            <form>
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
        </div>
      )
    }
  }
}

export default Login
