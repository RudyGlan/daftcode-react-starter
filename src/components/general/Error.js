import React from 'react';
import cat from "../../assets/img/cat.jpg"
import './Error.sass'

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='error'>
        <div className='error__content'>
            <span className='error__text'>{`Error ${this.props.status}: Something went wrong ... here is a space cat to cheer you up!`}</span>
            <div className='error__img'>
                <img src={cat} />
            </div>
        </div>
      </div>
    )
  }
}

export default Error;