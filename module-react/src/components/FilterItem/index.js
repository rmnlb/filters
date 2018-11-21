import React, {Component} from 'react'
import SearchInput from '../SearchInput'
import './FilterItem.scss'
import searchIcon from '../../assets/search2.png'

class FilterItem extends Component{


    render () {
        return (
            <label className='Filter'>
                <input
                    type='radio'
                    name='filter'
                    value={this.props.label}
                    defaultChecked={this.props.defaultChecked}
                />
                {this.props.label === 'search'
                    ? (
                        <div className='Filter__special'>
                            <img
                                src={searchIcon}
                                alt='Q'
                                className='Filter__img'
                            />
                        <SearchInput
                            disabled={this.props.disabled}
                        />
                        </div>
                    )
                    : this.props.label}
            </label>
        )
    }
}

export default FilterItem;