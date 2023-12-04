import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsStack } from 'react-icons/bs';

function Sidebar({ OpenSidebarToggle, openSidebar, toggleTotalReports }){
  return (
    <aside id="sidebar" className={OpenSidebarToggle ? 'sidebar-responsive' : ''}>
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsStack className='icon_header' /> Features
        </div>
        <span className='icon close_icon' onClick={openSidebar}>
          X
        </span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to='/totalreports' onClick={() => toggleTotalReports()}>
            <BsFillArchiveFill className='icon' /> Total Reports
          </Link>
        </li>
        
        
        <li className='sidebar-list-item'>
          <Link to='/registeredemployees' onClick={openSidebar}>
            <BsListCheck className='icon' /> Total Registered Employee
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/studentSupportDetails' onClick={openSidebar}>
            <BsListCheck className='icon' /> Student Support Details
          </Link>
        </li>
        
       
      </ul>
    </aside>
  );
}

export default Sidebar;
