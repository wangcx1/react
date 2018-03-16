import React from 'react'
import {Card} from 'antd'
import {Link,browserHistory} from 'react-router'
import NavLink from "react-router-dom/es/NavLink";

export default class PCNewsImageBlock extends React.Component {
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
        const styleImage={
            display:"block",
            width:this.props.imageWidth,
            height:'90px'
        }
        const styleH3={
            width:this.props.imageWidth,
            whiteSpace:'nowrap',
            overflow:'hidden',
            textOverflow:'ellipsis'
        }
        const news = this.state.news;
        console.log(this.state.news)
        const newList = news.length ? news.map((newsItem, index) => {
            return <div key={index} className="imageblock">
                <NavLink to={`details/${newsItem.uniquekey}`} target="_blank"><div className="custom-image">
                    <img src={newsItem.thumbnail_pic_s02} style={styleImage} alt=""/>
                </div>
                <div className="custom-card">
                    <h3 style={styleH3}>{newsItem.title}</h3>
                    <p>{newsItem.author_name}</p>
                </div>
                </NavLink>
            </div>
        }) : "没有加载到任何新闻"
        return (
            <div className="topNewsList">
                <Card calssName="topNewsList" bordered={true} style="{{width:this.props.width">
                    {newList}
                </Card>
            </div>
        )
    }
}
