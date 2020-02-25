import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

const renderElement = document.getElementsByTagName('render-tag')[0]
ReactDom.render(<App/>, renderElement)