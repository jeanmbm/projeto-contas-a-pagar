import React from 'react'
import '../App.css'

class LoginCadastro extends React.Component {
  constructor() {
    super()
    this.state = {
      usernameCadastro: '',
      passwordCadastro: '',
      usernameLogin: '',
      passwordLogin: ''
    }
  }

  alterarUsernameCadastro = e => {
    this.setState({ usernameCadastro: e.target.value })
  }

  alterarPasswordCadastro = e => {
    this.setState({ passwordCadastro: e.target.value })
  }

  alterarUsernameLogin = e => {
    this.setState({ usernameLogin: e.target.value })
  }

  alterarPasswordLogin = e => {
    this.setState({ passwordLogin: e.target.value })
  }

  realizarCadastro = e => {
    alert(this.state.usernameCadastro + this.state.passwordCadastro)
    this.props.metodo(this.state.username, this.state.password)
  }

  loginVerification = e => {
    alert(this.state.usernameCadastro + this.state.passwordCadastro)
    alert(this.state.usernameLogin + this.state.passwordLogin)
    if (
      this.state.usernameLogin == this.state.usernameCadastro &&
      this.state.passwordLogin == this.state.passwordCadastro
    ) {
      window.location('/conta')
    } else {
      const userNotEnter = document.getElementById('userNotEnter')
      userNotEnter.classList.remove('hide')
      userNotEnter.classList.add('show')
    }
  }

  render() {
    return (
      <>
        <div id="login" className="main show">
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
                value={this.state.usernameLogin}
                onChange={this.alterarUsernameLogin}
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
                onChange={this.alterarPasswordLogin}
              />

              <p id="userNotEnter" className="userNotEnter hide">
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

        <div id="cadastro" className="container-cadastro hide">
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
                value={this.state.usernameLogin}
                onChange={this.alterarUsernameLogin}
              />

              <Input
                labelStyle="text-label"
                labelText="Informe uma senha:"
                inputId="password"
                inputType="password"
                inputName="password"
                inputStyle="input input-cadastro"
                value={this.state.passwordLogin}
                onChange={this.alterarPasswordLogin}
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
      </>
    )
  }
}

export default LoginCadastro
