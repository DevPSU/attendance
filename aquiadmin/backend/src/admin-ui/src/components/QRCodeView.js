import React, { Component } from 'react'

import qrgif from './QRGIF.gif'
//import qrgif2 from './QRGIF2.gif'


class QRCodeView extends Component{
    render(){
        return(
            <div>
                <img src={qrgif} alt="loading..." width="700" height="700"/>
            </div>
        );
    }
}   




export default QRCodeView;