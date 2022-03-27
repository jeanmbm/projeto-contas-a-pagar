import React from 'react'
import Button from './Button'
import Input from './Input'

class Login extends React.Component {
  loginVerificator = () => {
    this.props.metodo()
  }

  render() {
    return (
      <div className={'main'}>
        <div className={'container'}>
          <form>
            <h1 className={'title-login'}>LOGIN</h1>

            <Input
              styleDivContainer="input-login"
              labelStyle="hidden"
              labelText=""
              inputId="username"
              inputType="text"
              inputName="username"
              inputStyle="input"
              inputPlaceholder="Username"
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
            />

            <p id="userNotEnter" className={'userNotEnter hidden'}>
              Usuario não cadastrado
            </p>

            <div className={'cadastro'}>
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
