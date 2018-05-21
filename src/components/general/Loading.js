import React from 'react';
import { DotLoader } from 'react-spinners';
import './Loading.sass'

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='loading'>
        <div className='loading__content'>
            <span className='loading__text'>Loading ...</span>
            <div className='loading__img'>
                <DotLoader 
                color={'#9013fe'} 
                loading={this.state.loading} 
                />
            </div>
        </div>
      </div>
    )
  }
}

export default Loading;