import React, { Component } from 'react'

import {Route} from 'react-router-dom';
import RecordListView from './containers/RecordListView';
import QRCodeView from '../src/components/QRCodeView';

const BaseRouter = () =>(
    <div>
        <Route exact path='/' component={RecordListView} />
        <Route exact path='/qrcode' component={QRCodeView} />
    </div>
);

export default BaseRouter;