import React from 'react'
import {Col, Row} from 'antd'

export default class MobileFooter extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;王春香 All Rights reserve
                    </Col>
                    <Col span={2}></Col>

                </Row>
            </footer>
        )
    }
}
