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
import BeforeEach from '../components/BeforeEach/BeforeEach';
export const routes = [
    {
        path: '/',
        element: <BeforeEach><App /></BeforeEach>,
        errorElement: <div>404404040440</div>,
        children: [

            {
                path: '',
                element: <Home />,
                meta:
                {
                    title: 'home'
                }

            },
            {
                path: '/about',
                element: <About />,
                meta:
                {
                    title: 'about'
                },
                children: [
                    {
                        index: true,
                        //element: <div>default</div>
                        element: <Navigate to="/about/foo/123" />,
                        meta:
                        {
                            title: 'default',
                            auth: false
                        }
                    },
                    {
                        path: 'foo/:id',
                        element: <Foo />,
                        meta:
                        {
                            title: 'Foo',
                            auth: false
                        }
                    },
                    {
                        path: 'bar',
                        element: <Bar />,
                        meta:
                        {
                            title: 'bar',
                            auth: true
                        }
                    },
                    {
                        path: '*',
                        element: <div>40404</div>
                    }
                ]
            }
        ]
    }

]


const router = createBrowserRouter(routes)


export default router