import { Row, Col, Affix } from 'antd';
import Head from 'next/head';
import { Fragment, Component } from 'react';
import Navbar from './Navbar';

interface Props {
	children: any;
}
class DefaultLayout extends Component<Props> {
	render() {
		return (
			<Fragment>

				<Head>
					<title>Temp A Mail</title>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta charSet='utf-8' />
				</Head>

				<style jsx global>{`
					div#__next {
						min-height: 100%;
						width: 100%;
					}
				`}</style>

		</Fragment>
		);
	}
}
export default DefaultLayout;
