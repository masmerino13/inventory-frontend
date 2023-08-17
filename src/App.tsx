import React, { Fragment, useEffect } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Header from './Components/Layouts/Header/Header';
import Switcher from './Components/Layouts/Switcher/Switcher';
import Sidebar from './Components/Layouts/Sidebar/Sidebar';
import Rightside from './Components/Layouts/Rightside/Rightside';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Layouts/Footer/Footer';
import BacktoTop from './Components/Layouts/BacktoTop/BacktoTop';

export const RightSideBarclose = () => {
  //rightsidebar close function
  document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");

  //SwitcherMenu close function
  document.querySelector(".demo_changer")?.classList.remove("active");
  let demo: any = document.querySelector(".demo_changer")
  demo.style.right = '-270px'

  if (document.querySelector(".card.search-result") != null) {
    document.querySelector(".card.search-result")?.classList.add("d-none")
  }

};

function App() {

  //custompage-layout  custom-classes add and removing 

  useEffect(() => {
    document.querySelector("body")?.classList.remove("bg-primary-transparent", "error-page1", "error-2", "landing-page", "horizontalmenu");
    document.querySelector("body")?.classList.add("main-body");
  }, []);

  // Create a client
  const queryClient = new QueryClient()

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <div className='horizontalMenucontainer'>
          <div className="page custom-index">
            <Header />
            <div className="sticky" style={{ paddingTop: "-63px" }}>
              <Sidebar />
            </div>
            <div className="jumps-prevent" style={{ paddingTop: "63px" }}></div>
            <div className="main-content app-content" onClick={() => RightSideBarclose()}>
              <div className="main-container container-fluid" >
                <Outlet />
              </div>
            </div>
          <Footer />
          </div>
          <Rightside />
          <BacktoTop />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
  )
}

export default App;
