import { Component, Fragment } from 'react';
import { Row, Col } from 'antd';

class Navbar extends Component {
	render() {
		return (
			<Row>
				<Col span={2} />
				<Col span={20}>Contents</Col>
				<Col span={2} />
			</Row>
		);
	}
}
export default Navbar;
