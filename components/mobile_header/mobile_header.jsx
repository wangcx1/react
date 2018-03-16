import React from 'react';
import {Button, CheckBox, Form, Icon, Input, Menu, message, Modal, Tabs} from 'antd';
import {browserHistory, Link} from 'react-router'

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
 class MobileHeader extends React.Component {
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
    login(){
        //登录
        this.setModalVisible(true)
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
            console.log(data)
        })
        message.success("请求成功!");
        this.setModalVisible(false);
    }

    render() {
        const {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined ?
            <Link>
                <Icon type="inbox"/>
            </Link> :
            <Icon type="setting" onClick={this.login.bind(this)}/>;
        return (
            <div id="mobileHeader">
                <header>
                    <img src={require("../images/logo.png")} alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>
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
            </div>
        )
    }
}
export default MobileHeader=Form.create()(MobileHeader)