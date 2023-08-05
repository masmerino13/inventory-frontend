

export const MENUITEMS:any = [
    {
        menutitle: "INICIO",
        Items: [
            { path:`${import.meta.env.BASE_URL}indexpage`,
              icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" /><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></svg>), 
              type: 'link', 
              active: false, 
              selected: false, 
              title: 'Panel de control', 
              badge: "badge bg-success text-light ", 
              badgetxt: "1", },
        ]
    },
    {
        menutitle: "ADMINISTRACION",
        Items: [
            {
                path:`${import.meta.env.BASE_URL}users`,
              icon: (
                <svg className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3"/><circle cx="12" cy="8" opacity=".3" r="2"/><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg>
                ), 
              type: 'link', 
              active: false, 
              selected: false, 
              title: 'Usuarios', 
              badge: "badge bg-success text-light ", 
              badgetxt: "New"
            },
            {
                path:`${import.meta.env.BASE_URL}sucursales`,
              icon: (
                <svg className="side-menu__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"><path d="M18.5,10.2c0,2.57-2.1,5.79-6.16,9.51L12,20.01l-0.34-0.31C7.6,15.99,5.5,12.77,5.5,10.2 c0-3.84,2.82-6.7,6.5-6.7S18.5,6.35,18.5,10.2z" fillOpacity=".3"/><path d="M12,2c4.2,0,8,3.22,8,8.2c0,3.32-2.67,7.25-8,11.8c-5.33-4.55-8-8.48-8-11.8C4,5.22,7.8,2,12,2z M18,10.2 C18,6.57,15.35,4,12,4s-6,2.57-6,6.2c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2z M12,12c-1.1,0-2-0.9-2-2s0.9-2,2-2 s2,0.9,2,2S13.1,12,12,12z"/><path d="M0,0h24v24H0V0z" fill="none"/></svg>
              ), 
              type: 'link', 
              active: false, 
              selected: false, 
              title: 'Sucursales', 
              badge: "badge bg-success text-light ", 
              badgetxt: "New"
            },
            {
                path:`${import.meta.env.BASE_URL}products`,
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z" opacity=".3"/><path d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"/></svg>
            ), 
              type: 'link', 
              active: false, 
              selected: false, 
              title: 'Productos', 
              badge: "badge bg-success text-light ", 
              badgetxt: "New"
            },
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
        ]
    }
]