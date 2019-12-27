import React, { Component } from 'react';
import Record from '../components/Record';
import axios from 'axios';

const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
  ];

class RecordListView extends Component{
state ={
    records :[]
}
componentDidMount(){
    axios.get('http://localhost:8000/api/').then(res=>{
        this.setState({
            records: res.data
        });
        console.log(res.data);
    })
}
    render(){
        return(
            <Record data={this.state.records}/>
        );
    }
}

export default RecordListView;