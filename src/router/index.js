import React from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';
// import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import App from '../pages/App/App';
import Home from '../pages/Home/Home';
import Helloworld from '../pages/Helloworld/Helloworld';

// const Root = () => (
//         // basename的含义是你在服务器中的二级目录等等
//         <BrowserRouter basename="/dist">
//             <div>
//                 <Route path="/" exact component={App}/>
//                 <Route path="/home" component={Home} />
//                 <Route path="/helloworld" component={Helloworld} />
//                 <Route path="/hello" render={() => <Redirect to="/" />} />
//             </div>
//        </BrowserRouter>
//  );

const Root = () => (
    <HashRouter>
        <div>
            <Route path="/" exact component={App}/>
            <Route path="/home" component={Home} />
            <Route path="/helloworld" component={Helloworld} />
            <Route path="/hello" render={() => <Redirect to="/" />} />
        </div>
   </HashRouter>
);


 export default Root;