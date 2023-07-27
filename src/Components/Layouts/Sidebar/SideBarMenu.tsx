

export const MENUITEMS:any = [
    {
        menutitle: "MAIN",
        Items: [
            { path:`${import.meta.env.BASE_URL}indexpage`,
              icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" /><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></svg>), 
              type: 'link', 
              active: false, 
              selected: false, 
              title: 'Index', 
              badge: "badge bg-success text-light ", 
              badgetxt: "1", },
        ]
    },
    {
        menutitle: "GENERAL",

        Items: [

            {
                title: 'Icons', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.7 1.19 1.97 2 3.45 2s2.76-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5z" opacity=".3" /><circle cx="15.5" cy="9.5" r="1.5" /><circle cx="8.5" cy="9.5" r="1.5" /><path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>), type: 'sub', active: false, children: [

                    { path:`${import.meta.env.BASE_URL}icons/fontawesome`, type: 'link', active: false, selected: false, title: 'Font Awesome' },
                    { path:`${import.meta.env.BASE_URL}icons/materialdesign`, type: 'link', active: false, selected: false, title: 'Material Design Icons' },
                    { path:`${import.meta.env.BASE_URL}icons/simpleline`, type: 'link', active: false, selected: false, title: 'Simple Line Icons' },
                    { path:`${import.meta.env.BASE_URL}icons/feather`, type: 'link', active: false, selected: false, title: 'Feather Icons' },
                    { path:`${import.meta.env.BASE_URL}icons/ionic`, type: 'link', active: false, selected: false, title: 'Ionic Icons' },
                    { path:`${import.meta.env.BASE_URL}icons/flag`, type: 'link', active: false, selected: false, title: 'Flag Icons' },
                    { path:`${import.meta.env.BASE_URL}icons/pe7`, type: 'link', active: false, selected: false, title: 'Pe7 Icons' },
                    { path:`${import.meta.env.BASE_URL}icons/themify`, type: 'link', active: false, selected: false, title: 'Themify Icons' },
                    { path:`${import.meta.env.BASE_URL}icons/typicons`, type: 'link', active: false, selected: false, title: 'Typicons Icons' },
                    { path:`${import.meta.env.BASE_URL}icons/weather`, type: 'link', active: false, selected: false, title: 'Weather Icons' },
                    { path:`${import.meta.env.BASE_URL}icons/material`, type: 'link', active: false, selected: false, title: 'Material Icons' },
                    { path:`${import.meta.env.BASE_URL}icons/bootstrap`, type: 'link', active: false, selected: false, title: 'Bootstrap Icons' },
                ]
            },
            {

                title: 'Charts', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" opacity=".3" /><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" /></svg>), type: 'sub', active: false, children: [

                    { path:`${import.meta.env.BASE_URL}charts/chartjs`, type: 'link', active: false, selected: false, title: 'Chart JS' },
                    { path:`${import.meta.env.BASE_URL}charts/echart`, type: 'link', active: false, selected: false, title: 'E Chart' },
                    { path:`${import.meta.env.BASE_URL}charts/sparkline`, type: 'link', active: false, selected: false, title: 'Sparkline' },

                    {
                        type: 'sub', active: false, selected: false, title: 'Apex Chart', children: [

                            { path:`${import.meta.env.BASE_URL}Charts/ApexChart/Area`, type: 'link', active: false, selected: false, title: 'Area Chart' },
                            { path:`${import.meta.env.BASE_URL}Charts/ApexChart/Bar`, type: 'link', active: false, selected: false, title: 'Bar Chart' },
                            { path:`${import.meta.env.BASE_URL}Charts/ApexChart/Line`, type: 'link', active: false, selected: false, title: 'Line Chart' },
                            { path:`${import.meta.env.BASE_URL}Charts/ApexChart/Column`, type: 'link', active: false, selected: false, title: 'Column Chart' },
                            { path:`${import.meta.env.BASE_URL}Charts/ApexChart/Mixed`, type: 'link', active: false, selected: false, title: 'Mixed Chart' }

                        ]
                    },
                ]
            },
        ]
    },
    {
        menutitle: "WEB APPS",
        Items: [
            {
                title: 'Apps', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 12c0 4.08 3.06 7.44 7 7.93V4.07C7.05 4.56 4 7.92 4 12z" opacity=".3" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z" /></svg>), type: 'sub', active: false, children: [
                    { path:`${import.meta.env.BASE_URL}apps/cards`, type: 'link', active: false, selected: false, title: 'Cards' },
                    { path:`${import.meta.env.BASE_URL}apps/rangeslider`, type: 'link', active: false, selected: false, title: 'Range-Slider' },
                    { path:`${import.meta.env.BASE_URL}apps/calender`, type: 'link', active: false, selected: false, title: 'Calender' },
                    { path:`${import.meta.env.BASE_URL}apps/contacts`, type: 'link', active: false, selected: false, title: 'Contacts' },
                    { path:`${import.meta.env.BASE_URL}apps/notification`, type: 'link', active: false, selected: false, title: 'Notification' },
                    { path:`${import.meta.env.BASE_URL}apps/Widgets`, type: 'link', active: false, selected: false, title: 'Widgets' },
                    { path:`${import.meta.env.BASE_URL}apps/widgetnotification`, type: 'link', active: false, selected: false, title: 'Widget-Notification' },
                    { path:`${import.meta.env.BASE_URL}apps/treeview`, type: 'link', active: false, selected: false, title: 'Treeview' },

                    {
                        title: 'File-Manager', type: 'sub', active: false, children: [
                            { path:`${import.meta.env.BASE_URL}apps/filemanager/filemanager`, type: 'link', active: false, selected: false, title: 'File-Manager' },
                            { path:`${import.meta.env.BASE_URL}apps/filemanager/filemanagerlist`, type: 'link', active: false, selected: false, title: 'File-list' },
                            { path:`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`, type: 'link', active: false, selected: false, title: 'File-Details' },
                            { path:`${import.meta.env.BASE_URL}apps/filemanager/fileattachments`, type: 'link', active: false, selected: false, title: 'File-Attachments' },
                        ]
                    },
                ]
            },
            {
                title: 'Elements', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3" /><path d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z" /></svg>), type: 'sub', active: false, children: [
                    { path:`${import.meta.env.BASE_URL}elements/alerts`, type: 'link', active: false, selected: false, title: 'Alerts' },
                    { path:`${import.meta.env.BASE_URL}elements/avatar`, type: 'link', active: false, selected: false, title: 'Avatar' },
                    { path:`${import.meta.env.BASE_URL}elements/breadcrumbs`, type: 'link', active: false, selected: false, title: 'Breadcrumbs' },
                    { path:`${import.meta.env.BASE_URL}elements/buttons`, type: 'link', active: false, selected: false, title: 'Buttons' },
                    { path:`${import.meta.env.BASE_URL}elements/badge`, type: 'link', active: false, selected: false, title: 'Badge' },
                    { path:`${import.meta.env.BASE_URL}elements/dropdown`, type: 'link', active: false, selected: false, title: 'Dropdown' },
                    { path:`${import.meta.env.BASE_URL}elements/thumbnails`, type: 'link', active: false, selected: false, title: 'Thumbnails' },
                    { path:`${import.meta.env.BASE_URL}elements/listgroup`, type: 'link', active: false, selected: false, title: 'List Group' },
                    { path:`${import.meta.env.BASE_URL}elements/navigation`, type: 'link', active: false, selected: false, title: 'Navigation' },
                    { path:`${import.meta.env.BASE_URL}elements/images`, type: 'link', active: false, selected: false, title: 'Images' },
                    { path:`${import.meta.env.BASE_URL}elements/pagination`, type: 'link', active: false, selected: false, title: 'Pagination' },
                    { path:`${import.meta.env.BASE_URL}elements/popover`, type: 'link', active: false, selected: false, title: 'Popover' },
                    { path:`${import.meta.env.BASE_URL}elements/progress`, type: 'link', active: false, selected: false, title: 'Progress' },
                    { path:`${import.meta.env.BASE_URL}elements/spinners`, type: 'link', active: false, selected: false, title: 'Spinners' },
                    { path:`${import.meta.env.BASE_URL}elements/mediaobject`, type: 'link', active: false, selected: false, title: 'Media Object' },
                    { path:`${import.meta.env.BASE_URL}elements/typography`, type: 'link', active: false, selected: false, title: 'Typography' },
                    { path:`${import.meta.env.BASE_URL}elements/tooltip`, type: 'link', active: false, selected: false, title: 'Tooltip' },
                    { path:`${import.meta.env.BASE_URL}elements/toast`, type: 'link', active: false, selected: false, title: 'Toast' },
                    { path:`${import.meta.env.BASE_URL}elements/tags`, type: 'link', active: false, selected: false, title: 'Tags' },
                    { path:`${import.meta.env.BASE_URL}elements/tabs`, type: 'link', active: false, selected: false, title: 'Tabs' }
                ]
            },
            {
                title: 'Advanced UI', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none" /><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm4.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" opacity=".3" /><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm4 13h-1.77c-1.38 0-2.5 1.12-2.5 2.5 0 .61.22 1.19.63 1.65.06.07.14.19.14.35 0 .28-.22.5-.5.5-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.14 8 7c0 2.21-1.79 4-4 4z" /><circle cx="6.5" cy="11.5" r="1.5" /><circle cx="9.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /><circle cx="17.5" cy="11.5" r="1.5" /></svg>), type: 'sub', active: false, children: [
                    { path:`${import.meta.env.BASE_URL}advancedui/accordion`, type: 'link', active: false, selected: false, title: 'Accordion' },
                    { path:`${import.meta.env.BASE_URL}advancedui/carousel`, type: 'link', active: false, selected: false, title: 'Carousel' },
                    { path:`${import.meta.env.BASE_URL}advancedui/collapse`, type: 'link', active: false, selected: false, title: 'Collapse' },
                    { path:`${import.meta.env.BASE_URL}advancedui/modals`, type: 'link', active: false, selected: false, title: 'Modals' },
                    { path:`${import.meta.env.BASE_URL}advancedui/timeline`, type: 'link', active: false, selected: false, title: 'Timeline' },
                    { path:`${import.meta.env.BASE_URL}advancedui/sweetalert`, type: 'link', active: false, selected: false, title: 'Sweet-Alert' },
                    { path:`${import.meta.env.BASE_URL}advancedui/rating`, type: 'link', active: false, selected: false, title: 'Ratings' },
                    { path:`${import.meta.env.BASE_URL}advancedui/counters`, type: 'link', active: false, selected: false, title: 'Counters' },
                    { path:`${import.meta.env.BASE_URL}advancedui/search`, type: 'link', active: false, selected: false, title: 'Search' },
                    { path:`${import.meta.env.BASE_URL}advancedui/userlist`, type: 'link', active: false, selected: false, title: 'Userlist' },

                    {
                        title: 'Blog-Pages', type: 'sub', active: false, children: [

                            { path:`${import.meta.env.BASE_URL}advancedui/blogpages/blog`, type: 'link', active: false, selected: false, title: 'Blog' },
                            { path:`${import.meta.env.BASE_URL}advancedui/blogpages/blogdetails`, type: 'link', active: false, selected: false, title: 'Blog-Details' },
                            { path:`${import.meta.env.BASE_URL}advancedui/blogpages/Blogedit`, type: 'link', active: false, selected: false, title: 'Blog-Post' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        menutitle: "MULTI LEVELS",
        Items: [
            {
                title: 'Menu-Levels', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 9h14V5H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5S7.83 8.5 7 8.5 5.5 7.83 5.5 7 6.17 5.5 7 5.5zM5 19h14v-4H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" opacity=".3" /><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H5v-4h14v4zm-12-.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 6H5V5h14v4zM7 8.5c.83 0 1.5-.67 1.5-1.5S7.83 5.5 7 5.5 5.5 6.17 5.5 7 6.17 8.5 7 8.5z" /></svg>), type: 'sub', active: false, children: [
                    { path: '', type: 'link', active: false, selected: false, title: 'Level-1' },
                    {
                        title: 'Level-2', type: 'sub', active: false, children: [

                            { path: '', type: 'link', active: false, selected: false, title: 'Level-2.1' },
                            { path: '', type: 'link', active: false, selected: false, title: 'Level-2.2' },
                            {
                                title: 'Level-2.3', type: 'sub', active: false, children: [

                                    { path: '', type: 'link', active: false, selected: false, title: 'Level-2.3.1' },
                                    { path: '', type: 'link', active: false, selected: false, title: 'Level-2.3.2' },
                                    { path: '', type: 'link', active: false, selected: false, title: 'Level-2.3.3' },

                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        menutitle: "COMPONENTS",
        Items: [
            {
                title: 'Forms', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z" opacity=".3" /><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" /></svg>), type: 'sub', active: false, children: [
                    { path:`${import.meta.env.BASE_URL}forms/formelements`, type: 'link', active: false, selected: false, title: 'Form Elements' },
                    { path:`${import.meta.env.BASE_URL}forms/advancedform`, type: 'link', active: false, selected: false, title: 'Advanced Forms' },
                    { path:`${import.meta.env.BASE_URL}forms/formlayouts`, type: 'link', active: false, selected: false, title: 'Form Layouts' },
                    { path:`${import.meta.env.BASE_URL}forms/formvalidation`, type: 'link', active: false, selected: false, title: 'Form Validation' },
                    { path:`${import.meta.env.BASE_URL}forms/formwizards`, type: 'link', active: false, selected: false, title: 'Form Wizards' },
                    { path:`${import.meta.env.BASE_URL}forms/wysiwygeditor`, type: 'link', active: false, selected: false, title: 'Form Editor' },
                    { path:`${import.meta.env.BASE_URL}forms/formsize`, type: 'link', active: false, selected: false, title: 'Form-Sizes' },
                ]
            },
            {
                title: 'Tables', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h15v3H5zm12 5h3v9h-3zm-7 0h5v9h-5zm-5 0h3v9H5z" opacity=".3" /><path d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm7 0h-5v-9h5v9zm5 0h-3v-9h3v9zm0-11H5V5h15v3z" /></svg>), type: 'sub', active: false, children: [
                    { path:`${import.meta.env.BASE_URL}tables/basictables`, type: 'link', active: false, selected: false, title: 'Basic Tables' },
                    { path:`${import.meta.env.BASE_URL}tables/datatables`, type: 'link', active: false, selected: false, title: 'Data Tables' },
                    { path:`${import.meta.env.BASE_URL}tables/edittables`, type: 'link', active: false, selected: false, title: 'Edit Tables' },
                ]
            },
            { path:`${import.meta.env.BASE_URL}landingPage`,
              icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.02C7.6 4.02 4.02 7.6 4.02 12S7.6 19.98 12 19.98s7.98-3.58 7.98-7.98S16.4 4.02 12 4.02zM11.39 19v-5.5H8.25l4.5-8.5v5.5h3L11.39 19z" opacity=".3"/><path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3V5z"/></svg>), 
              type: 'link', 
              active: false, 
              selected: false, 
              title: 'Landing Page', 
              badge: "badge bg-success text-light ", 
              badgetxt: "New" },
            {
                title: 'Maps', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4C9.24 4 7 6.24 7 9c0 2.85 2.92 7.21 5 9.88 2.11-2.69 5-7 5-9.88 0-2.76-2.24-5-5-5zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" opacity=".3" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>), type: 'sub', active: false, children: [
                    { path:`${import.meta.env.BASE_URL}maps/Leaflet`, type: 'link', active: false, selected: false, title: 'Leaflet Maps' },
                    { path:`${import.meta.env.BASE_URL}maps/Simplemaps`, type: 'link', active: false, selected: false, title: 'Simple Maps' },

                ]
            },
        ]
    },

    {
        menutitle: "PAGES",
        Items: [

            {
                title: 'Pages', icon: (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" className="side-menu__icon" viewBox="0 0 24 24" ><g><rect fill="none" /></g><g><g /><g><path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7 c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z" /><path d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z" opacity=".3" /></g><g><path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,10.69,16.18,10.5,17.5,10.5z" /><path d="M17.5,13.16c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,13.36,16.18,13.16,17.5,13.16z" /><path d="M17.5,15.83c0.88,0,1.73,0.09,2.5,0.26v-1.52c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,16.02,16.18,15.83,17.5,15.83z" /></g></g></svg>), type: 'sub', children: [
                    { path:`${import.meta.env.BASE_URL}pages/profile`, type: 'link', active: false, selected: false, title: 'Profile' },
                    { path:`${import.meta.env.BASE_URL}pages/editprofile`, type: 'link', active: false, selected: false, title: 'Edit-Profile' },
                    { path:`${import.meta.env.BASE_URL}pages/aboutus`, type: 'link', active: false, selected: false, title: 'About-Us' },
                    { path:`${import.meta.env.BASE_URL}pages/settings`, type: 'link', active: false, selected: false, title: 'Settings' },
                    { path:`${import.meta.env.BASE_URL}pages/invoice`, type: 'link', active: false, selected: false, title: 'Invoice' },
                    { path:`${import.meta.env.BASE_URL}pages/pricing`, type: 'link', active: false, selected: false, title: 'Pricing' },
                    { path:`${import.meta.env.BASE_URL}pages/gallery`, type: 'link', active: false, selected: false, title: 'Gallery' },
                    { path:`${import.meta.env.BASE_URL}pages/todotask`, type: 'link', active: false, selected: false, title: 'Todotask' },
                    { path:`${import.meta.env.BASE_URL}pages/faqs`, type: 'link', active: false, selected: false, title: 'Faqs' },
                    { path:`${import.meta.env.BASE_URL}pages/emptypage`, type: 'link', active: false, selected: false, title: 'Empty Page' },
                    { path:`${import.meta.env.BASE_URL}pages/switcher`, type: 'link', active: false, selected: false, title: 'Switcher-1' },
                    {
                        type: 'sub', title: ' Mail', active: false, children: [

                            { path:`${import.meta.env.BASE_URL}pages/mail/mail`, type: 'link', active: false, selected: false, title: ' Mail' },
                            { path:`${import.meta.env.BASE_URL}pages/mail/mailcompose`, type: 'link', active: false, selected: false, title: ' Mail-Compose' },
                            { path:`${import.meta.env.BASE_URL}pages/mail/readmail`, type: 'link', active: false, selected: false, title: ' Read-mail' },
                            { path:`${import.meta.env.BASE_URL}pages/mail/mailsetting`, type: 'link', active: false, selected: false, title: ' Mail-settings' },
                            { path:`${import.meta.env.BASE_URL}pages/mail/chat`, type: 'link', active: false, selected: false, title: ' Chat' },
                        ]
                    },
                    {
                        type: 'sub', title: 'E-commerce', active: false, children: [

                            { path:`${import.meta.env.BASE_URL}pages/ecommerce/shop`, type: 'link', active: false, selected: false, title: ' Shop' },
                            { path:`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`, type: 'link', active: false, selected: false, title: ' Product-details' },
                            { path:`${import.meta.env.BASE_URL}pages/ecommerce/cart`, type: 'link', active: false, selected: false, title: ' Cart' },
                            { path:`${import.meta.env.BASE_URL}pages/ecommerce/checkout`, type: 'link', active: false, selected: false, title: ' Check-out' },
                            { path:`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`, type: 'link', active: false, selected: false, title: ' Wish-list' },
                        ]
                    },
                    {
                        type: 'sub', title: ' Custom Pages', active: false, children: [

                            { path:`${import.meta.env.BASE_URL}pages/custompages/signin`, type: 'link', active: false, selected: false, title: ' Sign In' },
                            { path:`${import.meta.env.BASE_URL}pages/custompages/signup`, type: 'link', active: false, selected: false, title: ' Sign Up' },
                            { path:`${import.meta.env.BASE_URL}pages/custompages/forgotpassword`, type: 'link', active: false, selected: false, title: ' Forgot Password' },
                            { path:`${import.meta.env.BASE_URL}pages/custompages/resetpassword`, type: 'link', active: false, selected: false, title: ' Reset Password' },
                            { path:`${import.meta.env.BASE_URL}pages/custompages/lockscreen`, type: 'link', active: false, selected: false, title: ' LockScreen' },
                            { path:`${import.meta.env.BASE_URL}pages/custompages/underconstruction`, type: 'link', active: false, selected: false, title: ' Under Construction' },
                            { path:`${import.meta.env.BASE_URL}pages/custompages/error404`, type: 'link', active: false, selected: false, title: ' 404 Error' },
                            { path:`${import.meta.env.BASE_URL}pages/custompages/error500`, type: 'link', active: false, selected: false, title: ' 500 Error' },
                            { path:`${import.meta.env.BASE_URL}pages/custompages/error501`, type: 'link', active: false, selected: false, title: ' 501 Error' },
                        ]
                    },
                ]
            },
            {
                title: 'Utilities', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10.9 19.91c.36.05.72.09 1.1.09 2.18 0 4.16-.88 5.61-2.3L14.89 13l-3.99 6.91zm-1.04-.21l2.71-4.7H4.59c.93 2.28 2.87 4.03 5.27 4.7zM8.54 12L5.7 7.09C4.64 8.45 4 10.15 4 12c0 .69.1 1.36.26 2h5.43l-1.15-2zm9.76 4.91C19.36 15.55 20 13.85 20 12c0-.69-.1-1.36-.26-2h-5.43l3.99 6.91zM13.73 9h5.68c-.93-2.28-2.88-4.04-5.28-4.7L11.42 9h2.31zm-3.46 0l2.83-4.92C12.74 4.03 12.37 4 12 4c-2.18 0-4.16.88-5.6 2.3L9.12 11l1.15-2z" opacity=".3" /><path d="M12 22c5.52 0 10-4.48 10-10 0-4.75-3.31-8.72-7.75-9.74l-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10zm0-2c-.38 0-.74-.04-1.1-.09L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20zm8-8c0 1.85-.64 3.55-1.7 4.91l-4-6.91h5.43c.17.64.27 1.31.27 2zm-.59-3h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7zM12 4c.37 0 .74.03 1.1.08L10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4zm-8 8c0-1.85.64-3.55 1.7-4.91L8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12zm6.27 3h2.3l-2.71 4.7c-2.4-.67-4.35-2.42-5.28-4.7h5.69z" /></svg>), type: 'sub',  children: [
                    { path:`${import.meta.env.BASE_URL}utlities/background`, type: 'link', active: false, selected: false, title: ' Background' },
                    { path:`${import.meta.env.BASE_URL}utlities/border`, type: 'link', active: false, selected: false, title: ' Border' },
                    { path:`${import.meta.env.BASE_URL}utlities/display`, type: 'link', active: false, selected: false, title: ' Display' },
                    { path:`${import.meta.env.BASE_URL}utlities/flex`, type: 'link', active: false, selected: false, title: ' Flex' },
                    { path:`${import.meta.env.BASE_URL}utlities/height`, type: 'link', active: false, selected: false, title: ' Height' },
                    { path:`${import.meta.env.BASE_URL}utlities/margin`, type: 'link', active: false, selected: false, title: ' Margin' },
                    { path:`${import.meta.env.BASE_URL}utlities/padding`, type: 'link', active: false, selected: false, title: ' Padding' },
                    { path:`${import.meta.env.BASE_URL}utlities/position`, type: 'link', active: false, selected: false, title: ' Position' },
                    { path:`${import.meta.env.BASE_URL}utlities/width`, type: 'link', active: false, selected: false, title: ' Width' },
                    { path:`${import.meta.env.BASE_URL}utlities/extras`, type: 'link', active: false, selected: false, title: ' Extras' },
                ]
            },
        ]
    },
]