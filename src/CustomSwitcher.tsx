import React, { Fragment, useEffect } from 'react'
import Sidebar from './Components/Layouts/Sidebar/Sidebar';
import Rightside from './Components/Layouts/Rightside/Rightside';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Layouts/Footer/Footer';
import BacktoTop from './Components/Layouts/BacktoTop/BacktoTop';
import SwitcherHeader from './Components/Layouts/Header/SwitcherHeader';


export const RightSideBarclose = () => {
    //rightsidebar close function
    document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");
};


function CustomSwitcher() {

    //custompage-layout  custom-classes removing 

    useEffect(() => {
        document.querySelector("body")?.classList.remove("ltr", "bg-primary-transparent", "error-page1", "main-body", "error-2");

    }, []);

    return (
        <Fragment>
                <div className='horizontalMenucontainer'>
                    <div className="page custom-index">
                        <SwitcherHeader />
                        <div className="sticky" style={{ paddingTop: "-63px" }}>
                            <Sidebar />
                        </div>
                        <div className="jumps-prevent" style={{ paddingTop: "63px" }}></div>
                        <div className="main-content app-content">
                            <div className="main-container container-fluid" onClick={() => RightSideBarclose()}>
                                <div className='side-app'>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    <Footer />
                    </div>
                    <Rightside />
                    <BacktoTop />
                </div>
        </Fragment>
    )
}

export default CustomSwitcher
