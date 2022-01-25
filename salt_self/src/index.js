import React from 'react';
import ReactDOM from 'react-dom';

//コンポーネント読み込み
import App from './App';

import { BrowserRouter } from 'react-router-dom';


//(id="root"のところに)描画
ReactDOM.render(
    <BrowserRouter>
    <App />,
    </BrowserRouter>,
    document.getElementById('root')
);