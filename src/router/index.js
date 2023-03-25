import {
    createBrowserRouter,
    createHashRouter,
    Navigate
} from 'react-router-dom'
import Home from './../views/Home/Home';
import About from './../views/About/About';
import App from '../App';
import Foo from './../views/Foo/Foo';
import Bar from './../views/Bar/Bar'
const routes = [
    {
        path: '/',
        element: <App />,
        errorElement:<div>404404040440</div>,
        children: [

            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        index: true,
                        //element: <div>default</div>
                        element:<Navigate to="/about/foo/123" />
                    },
                    {
                        path: 'foo/:id',
                        element: <Foo />
                    },
                    {
                        path: 'bar',
                        element: <Bar />
                    },
                    {
                        path: '*',
                        element:<div>40404</div>
                    }
                ]
            }
        ]
    }

]


const router = createBrowserRouter(routes)


export default router