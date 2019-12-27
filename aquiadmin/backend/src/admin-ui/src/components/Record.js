import React, { Component } from 'react'
import { List, Card } from 'antd';
import 'antd/dist/antd.css';




const Record = (props) => {
    return (
  <List grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }} dataSource={props.data} renderItem={item => (
      <List.Item>
        <Card title={item.title}>ASTRO 7N</Card>
      </List.Item>
    )}
  />
    );
}

export default Record; 