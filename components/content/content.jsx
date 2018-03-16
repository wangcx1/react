import React from 'react'
import Child from '../pc_index/child'
import PropTypes from 'prop-types'
import ReactMixin from 'react-mixin'
import Mixin from '../mixin/mixin'

export default class Content extends React.Component {
    constructor() {
        super();//调用基类的所有初始化方法
    }

    render() {
        return (
            <content>
                <h1 className="fons">我是主体</h1>
            </content>
        )
    }
}
