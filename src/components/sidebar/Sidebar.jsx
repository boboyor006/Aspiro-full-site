import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../../constants'
import sidebarNav from '../../configs/sidebarNav'
import Logo from "../../assets/images/avt.jpg"

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }


    const SyStayles = {
        width:"50px",
        hegiht:"50px",
        borderRadius:"50px",
        marginLeft:"75px",
        marginTop:"-80px"

    }
    const Atayless = {
        marginLeft: "5px",
        
    }
    
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={images.logo} alt="" />
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebarNav.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar__menu__item">
                  
                    <div className="sidebar__menu__item__txt">
                        <img src={Logo} style={SyStayles} alt="" />
                       <h3 style={Atayless}> +998 99 713 10 20</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
