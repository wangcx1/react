import React from 'react'
import {carousel, Col, Row, Tabs} from 'antd'
import Carousel from "antd/es/carousel/index";
import PCNewsBlock from '../pc_container/pc_news_block'

const TabPane = Tabs.TabPane
export default class PCnewsContanier extends React.Component {
    render() {
        const setings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        }
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="contaner">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...setings}>
                                    <div><img src={require('../images/1.jpeg')} alt=""/></div>
                                    <div><img src={require("../images/2.png")} alt=""/></div>
                                    <div><img src={require('../images/3.jpeg')} alt=""/></div>
                                    <div><img src={require('../images/4.jpeg')} alt=""/></div>
                                    <div><img src={require('../images/1.jpeg')} alt=""/></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={10} type={"top"} width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={10} type={"guoji"} width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国内" key="3">
                                <PCNewsBlock count={10} type={"guonei"} width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}