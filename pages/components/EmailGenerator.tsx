import { Component } from 'react';
import { Row, Col, Input } from 'antd';

class EmailGenerator extends Component<{}, {}> {
  render() {
    return <Row style={{
      height: '40vh',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }}>
      <Col span={6} style={{ height: '40vh', backgroundColor: '#F5F8FA' }}>Left</Col>
      <Col span={12} style={{
        background: 'url("/static/bright-squares.png")',
        height: '40vh',
        textAlign: 'center'
      }}>
        <h1>Your Temporary Email Address</h1>
        <Input.Password placeholder="input password" />
      </Col>
      <Col span={6} style={{ height: '40vh', background: '#F5F8FA' }}>Right</Col>
    </Row >;
  }
}
export default EmailGenerator;