import React from 'react'
import Button from './Button'

class Login extends React.Component {
  render() {
    return (
      <div className={'main'}>
        <div className={'container'}>
          <form action="">
            <h1 className={'title-login'}>LOGIN</h1>

            <div className={'input-login'}>
              <input type="text" name="username" placeholder="Username" />
            </div>

            <div className={'input-login'}>
              <input type="password" name="password" placeholder="Password" />
            </div>

            <p className={'userNotEnter'}>Usuario não cadastrado</p>

            <div className={'cadastro'}>
              <p>Não tem cadastro?</p>
              <a href="">Cadastrar</a>
            </div>

            <Button
              acao="entrar"
              estiloContainer="button-container-login"
              estiloBotao="button button-login"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Login
