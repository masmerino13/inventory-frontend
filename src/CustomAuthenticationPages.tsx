import React, { Fragment, useEffect } from 'react';
import Switcher from './Components/Layouts/Switcher/Switcher';
import { Outlet } from 'react-router-dom';

function CustomAuthenticationPages() {

    useEffect(() => {
        document.querySelector("body")?.classList.add("ltr", "bg-light", "error-page1", "main-body", "error-2");
    }, [])


    return (
        <Fragment>
            <div className="page">
                <Outlet />
            </div>
        </Fragment>
    )
}
// 
export default CustomAuthenticationPages;
