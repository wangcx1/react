import React from 'react'
import 'antd/dist/antd.css'
import {Link} from 'react-router'
import {Button, Col, Form, Icon, Input, Menu, Modal, Row, Tabs,message} from 'antd'

const logo = './logo.png'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: "top",
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    }

    handleClick(e) {
        if (e.key === 'register') {
            this.setState({current: 'register'})
            this.setModalVisible(true)
        } else {
            this.setState({current: e.key})
        }
    }

    setModalVisible(value) {
        this.setState({modalVisible: value})
    }

    handleSubmit(e) {
        //页面提交的数据
        e.preventDefault();
        let myFetchOptions = {
            method: 'GET'
        }
        let formData = {};
        this.props.form.validateFields((err, values) => {
            formData = values
        })
        console.log(formData)
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=111&password=1111&r_userName=' + formData.r_userName + '&r_password=' + formData.r_password + '&r_confirmPassword=' + formData.r_confirmPassword, myFetchOptions).then((response) => response.json()).then((data) => {
            this.setState({userNickName: data.userNickName, userid: data.UserId})
        })
        message.success("请求成功!");
        this.setModalVisible(false);
    }

    render() {
        const {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined ?
            <Menu.Item key="logout" class="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                    <Button type="ghost" htmlType="button">退出</Button>
                </Link>
            </Menu.Item> :
            <Menu.Item key="register" class="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>;
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="#" className="logo">
                            <img src={require("../images/logo.png")} alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}
                              onClick={this.handleClick.bind(this)}>
                            <Menu.Item key="top">
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key="inter">
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="fashion">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>

                        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                               onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)}
                               okText="关闭" cancelText="取消">
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input placeholder="请输入您的账号"  {...getFieldProps('r_userName')}/>
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input placeholder="请输入您的密码"
                                                   type="password" {...getFieldProps('r_password')}/>
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input placeholder="请确认您的密码"
                                                   type="password" {...getFieldProps('r_confirmPassword')}/>
                                        </FormItem>
                                        <FormItem>
                                            <Button
                                                type="primary"
                                                htmlType="submit">
                                                注册
                                            </Button>
                                        </FormItem>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>

                </Row>
            </header>
        )
    }
}

export default PCHeader = Form.create()(PCHeader)