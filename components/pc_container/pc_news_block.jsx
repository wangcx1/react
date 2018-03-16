import React from 'react'
import {Card} from 'antd'
import {Link,browserHistory} from 'react-router'
import {NavLink } from 'react-router-dom'
export default class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }

    componentWillMount() {
        let myFetchOptions = {
            methods: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then((data) => {
            this.setState({news: data})
        });
    }

    render() {
        const news = this.state.news;
        console.log(this.state.news)
        const newList = news.length ? news.map((newsItem, index) => {
            return <li key={index}>
                <Link to={`details/${newsItem.uniquekey}`} target="_blank">{newsItem.title}</Link>
            </li>
        }) : "没有加载到任何新闻"
        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newList}
                    </ul>
                </Card>
            </div>
        )
    }
}
