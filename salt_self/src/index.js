import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//コンポーネント読み込み
import App from './App';

//(id="root"のところに)描画
ReactDOM.render(
    <App />,
    document.getElementById('root')
);