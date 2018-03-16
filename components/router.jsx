import React from 'react'
import ReactDOM from 'react-dom'
import Media from "react-media"
import 'antd/dist/antd.css'
import './style/pc_style.css'
import './style/mobile_style.css'
import PCIndex from './pc_index/pc_index'
import MobileIndex from './mobile_index/mobile_index'
class Routert extends React.Component {
    render() {
        return (
            <div>
                <Media query="(min-device-width:1224px)">
                    <PCIndex/>
                </Media>
                <Media query="(max-device-width:1224px)">
                    <MobileIndex/>
                </Media>
            </div>
        )
    }
}

ReactDOM.render(<Routert/>, document.getElementById('root'))