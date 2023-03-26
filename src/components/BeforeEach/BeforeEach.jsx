import React from 'react'
import { useLocation, matchRoutes, Navigate } from 'react-router-dom';
import { routes } from '../../router';


export default function BeforeEach(props) {
    const location = useLocation()
    const matchs = matchRoutes(routes, location)
    console.log('beforeEach');
    console.log(matchs);
    console.log(matchs[matchs.length - 1].route.meta);
    const meta = matchs[matchs.length - 1].route.meta;
    if (meta.auth) {
        return <Navigate to='/login' />
    } else {
        return (
            <div>{props.children}</div>
        )
    }
}
