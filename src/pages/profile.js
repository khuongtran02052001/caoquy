import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AccountSidebar from '../components/elements/AccountSidebar';
import FooterOne from '../components/footer/FooterOne';
import BackToTopButton from '../components/post/post-format/elements/BackToTopButton';
import HeaderOne from '../components/header/HeaderOne';
import Profile from '../components/post/layout/Profile';

function profile() {
    return (
        <>
        <HeaderOne />
        <div className="body container">
            <div className="sidebar" data-module="account-sidebar">
                <div className="_IOX7b9h3ehmfwCtcJlL">
                    <ul className="U2a29pIZKHe_zUk0rnP4">
                        <AccountSidebar />
                    </ul>
                </div>
            </div>
            <div className="content1 page-content" data-module="account-page-content" data-content="saved-articles">
                <div>
                    <Profile/>
                </div>
            </div>
            <div className="infinite-scroll-component__outerdiv">
                <div className="infinite-scroll-component " style={{ height: "auto", overflow: "auto" }}>
                </div>
            </div>
        </div>
        <FooterOne />
        <BackToTopButton />
        </>

    );
}

export default profile;
