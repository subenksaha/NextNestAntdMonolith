import { Component } from 'react';
import { Row, Button, Divider } from 'antd';

import DefaultLayout from '../layouts/DefaultLayout';
import EmailGenerator from '../components/EmailGenerator';
import HorizontalAd from '../components/HorizontalAd';

class Home extends Component {
  render() {
    return (
      <DefaultLayout>
        <EmailGenerator />
        <HorizontalAd />
        <Row> Mid Advertisement</Row>
      </DefaultLayout>
    );
  }
}
export default Home;
