import React from 'react'
import '../Style.css'

class TextArea extends React.Component {
  render() {
    return (
      <div className={this.props.contaiterTextarea}>
        <textarea
          className={this.props.styleTextarea}
          value={this.state.value}
          onChange={this.mudarTexto}
        ></textarea>
      </div>
    )
  }
}

export default TextArea
