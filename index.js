import React from 'react';

import ReactDom from 'react-dom/client'

import Banner from './Banner';

import About from './About';

import Contact from './Contact';

import Product from './Product';

const root = ReactDom.createRoot(document.getElementById('yet'))

root.render(
 <React.StrictMode>
 <Banner/>
 <About/>
 <Contact/>
 <Product/>

 </React.StrictMode>
)