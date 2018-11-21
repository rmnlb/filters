import React, {Component} from 'react'
import ContentItem from '../../components/ContentItem'
import './Content.scss'

class Content extends Component {

    render() {
        return (
            <section className='Content'>
                <ul className='Content__list'>
                    {
                        this.props.elements.map((item, i) => (
                            <ContentItem
                                key={i}
                                title={item.name}
                                tags={item.tags}
                            />
                        ))}
                </ul>
            </section>
        )
    }
}

export default Content