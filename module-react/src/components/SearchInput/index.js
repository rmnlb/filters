import React, {Component} from 'react'
import './SearchInput.scss'

class SearchInput extends Component {
    state= {
        value: ''
    };

    setSearchValue = (e) => this.setState({value: e.target.value});

    render () {
        return (

            <input
                className='Search__input'
                type='text'
                onChange={this.setSearchValue}
                onClick={(e) => e.stopPropagation()}
                value={this.state.value}
                disabled={this.props.disabled}
                placeholder='Search'
            />
            )
    }
}

export default SearchInput;