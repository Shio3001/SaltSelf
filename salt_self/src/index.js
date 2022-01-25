import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//コンポーネント読み込み
import App from './App';

//(id="root"のところに)描画
ReactDOM.render(
    <BrowserRouter>
    <App />,
    </BrowserRouter>,
    document.getElementById('root')
);