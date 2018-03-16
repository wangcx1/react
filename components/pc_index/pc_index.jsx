import React from 'react'
import 'antd/dist/antd.css'
import PCHeader from '../pc_header/pc_header'
import PCFooter from '../pc_footer/pc_footer'
import PCnewsContanier from '../pc_container/pc_container'

export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
                <PCHeader/>
                <PCnewsContanier/>
                <PCFooter/>
            </div>
        )
    }
}
