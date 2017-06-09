// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore.dev';
// import Root from './containers/Root';
//
// const store = configureStore();
//
// render(
//     <AppContainer>
//         <Root
//             store={ store }
//         />
//     </AppContainer>,
//     document.getElementById('root')
// );

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.dev';
import Root from './containers/Root.dev'

const store = configureStore();


render(
    <AppContainer>
        <Root
            store={ store }
        />
    </AppContainer>,
    document.getElementById('root')
);

