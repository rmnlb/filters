import React, {Component} from 'react'
import './FilterPanel.scss'
import FilterItem from '../../components/FilterItem'

class FilterPanel extends Component {

    state={
        disabled: true
    };

    componentDidMount () {
        this.props.setFilter('All');
    }

    onSubmitHandler = (e) => e.preventDefault();

    menageFilter = (e) => {
        this.setState({
            disabled: !(e.target.value === 'search' || e.target.type === 'text')
        });
        this.props.setFilter(!(e.target.value === 'search' || e.target.value === '')
            ? e.target.value
            : null)
    };

    render () {
        return (
            <aside className='FilterPanel'>
                <form
                    onChange={this.menageFilter}
                    onSubmit={this.onSubmitHandler}
                >
                    <FilterItem
                        label='search'
                        disabled={this.state.disabled}
                    />
                    <FilterItem
                        label='All'
                        defaultChecked={true}
                    />
                    {
                        this.props.elements.map((filter, i) => (
                            <FilterItem
                                key={i}
                                label={filter}
                            />
                        ))
                    }
                </form>
            </aside>
        )
    }
}

export default FilterPanel