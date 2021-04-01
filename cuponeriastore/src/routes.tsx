import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            {/* <Route path="/:category" component={Home} /> */}
            <Route path="/single-product/:productid" exact component={SingleProduct} />
        </BrowserRouter>
    );
}

export default Routes;