import React from 'react';
import reactDom from 'react-dom';
import Router from './router/Index';
import Store from '@store/index';

const render = () => reactDom.render(<Router />, document.getElementById('root'));
render();

Store.subscribe(render);