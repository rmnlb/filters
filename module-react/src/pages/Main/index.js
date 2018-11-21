import React, {Component} from 'react';
//import fetchJSON from '../../api/fetchJSON';
import './Main.scss'
import data from '../../api/JSON/incomeData'
import FilterPanel from '../../containers/FilterPanel'
import Content from '../../containers/Content'
import uniqueTags from '../../utils/uniqueTags'

class Main extends Component {
    state = {
        sdks: [],
        tags: [],
        filtered: []
    };

    componentDidMount() {
        this.setState({
            sdks: data,
            tags: uniqueTags(data)
        })
    }

    setFilter = (filter) => {

        if (filter === 'All') {

            this.setState({
                filtered: this.state.sdks
            });

        } else if(this.state.tags.indexOf(filter) > -1) {

            this.setState({
                filtered: this.state.sdks.filter((item) => {
                    return item.tags.indexOf(filter) >= 0
                })
            });
        } else {
            let searchRegExp = new RegExp(filter, 'ig');
            this.setState({
                filtered: this.state.sdks.filter((item) => {
                    return item.name.match(searchRegExp)
                })
            });
        }
    };

    render() {
        return this.state.sdks.length
            ? (
                <div className={'Main'}>
                    <FilterPanel
                        elements={this.state.tags}
                        setFilter={this.setFilter}
                    />

                    <Content
                        elements={this.state.filtered}
                    />
                </div>
            )
            : null
    }
}

export default Main;