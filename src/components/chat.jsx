import React from "react";

export default function Chat() {
    return (
        <React.Fragment>
            <div>
                <div class="navbar-header">
                    <div class="d-flex">
                        <div class="navbar-brand-box">
                            <a href="#" class="logo logo-dark">
                                <span class="logo-sm">
                                    <img src="assets/images/logo-sm.svg" alt="" height="24" />
                                </span>
                                <span class="logo-lg">
                                    <img src="assets/images/logo-sm.svg" alt="" height="24" /> <span class="logo-txt">Minia</span>
                                </span>
                            </a>

                            <a href="#" class="logo logo-light">
                                <span class="logo-sm">
                                    <img src="assets/images/logo-sm.svg" alt="" height="24" />
                                </span>
                                <span class="logo-lg">
                                    <img src="assets/images/logo-sm.svg" alt="" height="24" /> <span class="logo-txt">Minia</span>
                                </span>
                            </a>
                        </div>


                        <form class="app-search d-none d-lg-block">
                            <div class="position-relative">
                                <input type="text" class="form-control" placeholder="Search..." />
                                <button class="btn btn-primary" type="button"><i class="bx bx-search-alt align-middle"></i></button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="vertical-menu">

                    <div data-simplebar className="h-100">

                        {/*- Sidemenu */}
                        <div id="sidebar-menu">
                            {/* Left Menu Start */}
                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li className="menu-title" data-key="t-menu">Menu</li>

                                <li>
                                    <a href="#">
                                        <i data-feather="home"></i>
                                        <span data-key="t-dashboard">Dashboard</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow">
                                        <i data-feather="grid"></i>
                                        <span data-key="t-apps">Apps</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li>
                                            <a href="#">
                                                <span data-key="t-calendar">Calendar</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <span data-key="t-chat">Chat</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="javascript: void(0);" className="has-arrow">
                                                <span data-key="t-email">Email</span>
                                            </a>

                                        </li>
                                        <li>
                                            <a href="javascript: void(0);" className="has-arrow">
                                                <span data-key="t-invoices">Invoices</span>
                                            </a>

                                        </li>
                                        <li>
                                            <a href="javascript: void(0);" className="has-arrow">
                                                <span data-key="t-contacts">Contacts</span>
                                            </a>
                                            <ul className="sub-menu" aria-expanded="false">
                                                <li><a href="#" data-key="t-user-grid">User Grid</a></li>
                                                <li><a href="#" data-key="t-user-list">User List</a></li>
                                                <li><a href="#" data-key="t-profile">Profile</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript: void(0);" className="">
                                                <span data-key="t-blog">Blog</span>
                                                <span className="badge rounded-pill badge-soft-danger float-end" key="t-new">New</span>
                                            </a>
                                            <ul className="sub-menu" aria-expanded="false">
                                                <li><a href="#" data-key="t-blog-grid">Blog Grid</a></li>
                                                <li><a href="#" data-key="t-blog-list">Blog List</a></li>
                                                <li><a href="#" data-key="t-blog-details">Blog Details</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow">
                                        <i data-feather="users"></i>
                                        <span data-key="t-authentication">Authentication</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="auth-login.html" data-key="t-login">Login</a></li>
                                        <li><a href="auth-register.html" data-key="t-register">Register</a></li>
                                        <li><a href="auth-recoverpw.html" data-key="t-recover-password">Recover Password</a></li>
                                        <li><a href="auth-lock-screen.html" data-key="t-lock-screen">Lock Screen</a></li>
                                        <li><a href="auth-logout.html" data-key="t-logout">Log Out</a></li>
                                        <li><a href="auth-confirm-mail.html" data-key="t-confirm-mail">Confirm Mail</a></li>
                                        <li><a href="auth-email-verification.html" data-key="t-email-verification">Email Verification</a></li>
                                        <li><a href="auth-two-step-verification.html" data-key="t-two-step-verification">Two Step Verification</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow">
                                        <i data-feather="file-text"></i>
                                        <span data-key="t-pages">Pages</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="pages-starter.html" data-key="t-starter-page">Starter Page</a></li>
                                        <li><a href="pages-maintenance.html" data-key="t-maintenance">Maintenance</a></li>
                                        <li><a href="pages-comingsoon.html" data-key="t-coming-soon">Coming Soon</a></li>
                                        <li><a href="pages-timeline.html" data-key="t-timeline">Timeline</a></li>
                                        <li><a href="pages-faqs.html" data-key="t-faqs">FAQs</a></li>
                                        <li><a href="pages-pricing.html" data-key="t-pricing">Pricing</a></li>
                                        <li><a href="pages-404.html" data-key="t-error-404">Error 404</a></li>
                                        <li><a href="pages-500.html" data-key="t-error-500">Error 500</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="layouts-horizontal.html">
                                        <i data-feather="layout"></i>
                                        <span data-key="t-horizontal">Horizontal</span>
                                    </a>
                                </li>

                                <li className="menu-title mt-2" data-key="t-components">Elements</li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow">
                                        <i data-feather="briefcase"></i>
                                        <span data-key="t-components">Components</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="ui-alerts.html" data-key="t-alerts">Alerts</a></li>
                                        <li><a href="ui-buttons.html" data-key="t-buttons">Buttons</a></li>
                                        <li><a href="ui-cards.html" data-key="t-cards">Cards</a></li>
                                        <li><a href="ui-carousel.html" data-key="t-carousel">Carousel</a></li>
                                        <li><a href="ui-dropdowns.html" data-key="t-dropdowns">Dropdowns</a></li>
                                        <li><a href="ui-grid.html" data-key="t-grid">Grid</a></li>
                                        <li><a href="ui-images.html" data-key="t-images">Images</a></li>
                                        <li><a href="ui-modals.html" data-key="t-modals">Modals</a></li>
                                        <li><a href="ui-offcanvas.html" data-key="t-offcanvas">Offcanvas</a></li>
                                        <li><a href="ui-progressbars.html" data-key="t-progress-bars">Progress Bars</a></li>
                                        <li><a href="ui-placeholders.html" data-key="t-progress-bars">Placeholders</a></li>
                                        <li><a href="ui-tabs-accordions.html" data-key="t-tabs-accordions">Tabs & Accordions</a></li>
                                        <li><a href="ui-typography.html" data-key="t-typography">Typography</a></li>
                                        <li><a href="ui-toasts.html" data-key="t-typography">Toasts</a></li>
                                        <li><a href="ui-video.html" data-key="t-video">Video</a></li>
                                        <li><a href="ui-general.html" data-key="t-general">General</a></li>
                                        <li><a href="ui-colors.html" data-key="t-colors">Colors</a></li>
                                        <li><a href="ui-utilities.html" data-key="t-colors">Utilities</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow">
                                        <i data-feather="gift"></i>
                                        <span data-key="t-ui-elements">Extended</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="extended-lightbox.html" data-key="t-lightbox">Lightbox</a></li>
                                        <li><a href="extended-rangeslider.html" data-key="t-range-slider">Range Slider</a></li>
                                        <li><a href="extended-sweet-alert.html" data-key="t-sweet-alert">SweetAlert 2</a></li>
                                        <li><a href="extended-session-timeout.html" data-key="t-session-timeout">Session Timeout</a></li>
                                        <li><a href="extended-rating.html" data-key="t-rating">Rating</a></li>
                                        <li><a href="extended-notifications.html" data-key="t-notifications">Notifications</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);">
                                        <i data-feather="box"></i>
                                        <span className="badge rounded-pill bg-soft-danger text-danger float-end">7</span>
                                        <span data-key="t-forms">Forms</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="form-elements.html" data-key="t-form-elements">Basic Elements</a></li>
                                        <li><a href="form-validation.html" data-key="t-form-validation">Validation</a></li>
                                        <li><a href="form-advanced.html" data-key="t-form-advanced">Advanced Plugins</a></li>
                                        <li><a href="form-editors.html" data-key="t-form-editors">Editors</a></li>
                                        <li><a href="form-uploads.html" data-key="t-form-upload">File Upload</a></li>
                                        <li><a href="form-wizard.html" data-key="t-form-wizard">Wizard</a></li>
                                        <li><a href="form-mask.html" data-key="t-form-mask">Mask</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow">
                                        <i data-feather="sliders"></i>
                                        <span data-key="t-tables">Tables</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="tables-basic.html" data-key="t-basic-tables">Bootstrap Basic</a></li>
                                        <li><a href="tables-datatable.html" data-key="t-data-tables">DataTables</a></li>
                                        <li><a href="tables-responsive.html" data-key="t-responsive-table">Responsive</a></li>
                                        <li><a href="tables-editable.html" data-key="t-editable-table">Editable</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow">
                                        <i data-feather="pie-chart"></i>
                                        <span data-key="t-charts">Charts</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="charts-apex.html" data-key="t-apex-charts">Apexcharts</a></li>
                                        <li><a href="charts-echart.html" data-key="t-e-charts">Echarts</a></li>
                                        <li><a href="charts-chartjs.html" data-key="t-chartjs-charts">Chartjs</a></li>
                                        <li><a href="charts-knob.html" data-key="t-knob-charts">Jquery Knob</a></li>
                                        <li><a href="charts-sparkline.html" data-key="t-sparkline-charts">Sparkline</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow">
                                        <i data-feather="cpu"></i>
                                        <span data-key="t-icons">Icons</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="icons-boxicons.html" data-key="t-boxicons">Boxicons</a></li>
                                        <li><a href="icons-materialdesign.html" data-key="t-material-design">Material Design</a></li>
                                        <li><a href="icons-dripicons.html" data-key="t-dripicons">Dripicons</a></li>
                                        <li><a href="icons-fontawesome.html" data-key="t-font-awesome">Font Awesome 5</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow">
                                        <i data-feather="map"></i>
                                        <span data-key="t-maps">Maps</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="maps-google.html" data-key="t-g-maps">Google</a></li>
                                        <li><a href="maps-vector.html" data-key="t-v-maps">Vector</a></li>
                                        <li><a href="maps-leaflet.html" data-key="t-l-maps">Leaflet</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow">
                                        <i data-feather="share-2"></i>
                                        <span data-key="t-multi-level">Multi Level</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li><a href="javascript: void(0);" data-key="t-level-1-1">Level 1.1</a></li>
                                        <li>
                                            <a href="javascript: void(0);" className="has-arrow" data-key="t-level-1-2">Level 1.2</a>
                                            <ul className="sub-menu" aria-expanded="true">
                                                <li><a href="javascript: void(0);" data-key="t-level-2-1">Level 2.1</a></li>
                                                <li><a href="javascript: void(0);" data-key="t-level-2-2">Level 2.2</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>

                            <div className="card sidebar-alert border-0 text-center mx-4 mb-0 mt-5">
                                <div className="card-body">
                                    <img src="assets/images/giftbox.png" alt="" />
                                    <div className="mt-4">
                                        <h5 className="alertcard-title font-size-16">Unlimited Access</h5>
                                        <p className="font-size-13">Upgrade your plan from a Free trial, to select ‘Business Plan’.</p>
                                        <a href="#!" className="btn btn-primary mt-2">Upgrade Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar */}
                    </div>
                </div>


                <div className="main-content">

                    <div className="page-content">
                        <div className="container-fluid">

                            {/* start page title */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 className="mb-sm-0 font-size-18">Chat</h4>

                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item"><a href="javascript: void(0);">Apps</a></li>
                                                <li className="breadcrumb-item active">Chat</li>
                                            </ol>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* end page title */}

                            <div className="d-lg-flex">
                                <div className="chat-leftsidebar card">
                                    <div className="p-3 px-4 border-bottom">
                                        <div className="d-flex align-items-start ">
                                            <div className="flex-shrink-0 me-3 align-self-center">
                                                <img src="assets/images/users/avatar-1.jpg" className="avatar-sm rounded-circle" alt="" />
                                            </div>

                                            <div className="flex-grow-1">
                                                <h5 className="font-size-16 mb-1"><a href="#" className="text-dark">Shawn <i className="mdi mdi-circle text-success align-middle font-size-10 ms-1"></i></a></h5>
                                                <p className="text-muted mb-0">Available</p>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <div className="dropdown chat-noti-dropdown">
                                                    <button className="btn dropdown-toggle p-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="bx bx-dots-horizontal-rounded"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">Profile</a>
                                                        <a className="dropdown-item" href="#">Edit</a>
                                                        <a className="dropdown-item" href="#">Add Contact</a>
                                                        <a className="dropdown-item" href="#">Setting</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-3">
                                        <div className="search-box position-relative">
                                            <input type="text" className="form-control rounded border" placeholder="Search..." />
                                            <i className="bx bx-search search-icon"></i>
                                        </div>
                                    </div>

                                    <div className="chat-leftsidebar-nav">
                                        <ul className="nav nav-pills nav-justified bg-soft-light p-1">
                                            <li className="nav-item">
                                                <a href="#chat" data-bs-toggle="tab" aria-expanded="true" className="nav-link active">
                                                    <i className="bx bx-chat font-size-20 d-sm-none"></i>
                                                    <span className="d-none d-sm-block">Chat</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#groups" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                    <i className="bx bx-group font-size-20 d-sm-none"></i>
                                                    <span className="d-none d-sm-block">Groups</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#contacts" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                    <i className="bx bx-book-content font-size-20 d-sm-none"></i>
                                                    <span className="d-none d-sm-block">Contacts</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane show active" id="chat">
                                                <div className="chat-message-list" data-simplebar>
                                                    <div className="pt-3">
                                                        <div className="px-3">
                                                            <h5 className="font-size-14 mb-3">Recent</h5>
                                                        </div>
                                                        <ul className="list-unstyled chat-list">
                                                            <li className="active">
                                                                <a href="#">
                                                                    <div className="d-flex align-items-start">

                                                                        <div className="flex-shrink-0 user-img online align-self-center me-3">
                                                                            <img src="assets/images/users/avatar-2.jpg" className="rounded-circle avatar-sm" alt="" />
                                                                            <span className="user-status"></span>
                                                                        </div>

                                                                        <div className="flex-grow-1 overflow-hidden">
                                                                            <h5 className="text-truncate font-size-14 mb-1">Jennie Sherlock</h5>
                                                                            <p className="text-truncate mb-0">Hey! there I'm available</p>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <div className="font-size-11">02 min</div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="unread">
                                                                <a href="#">
                                                                    <div className="d-flex align-items-start">
                                                                        <div className="flex-shrink-0 user-img online align-self-center me-3">
                                                                            <div className="avatar-sm align-self-center">
                                                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                    S
                                                                                </span>
                                                                            </div>
                                                                            <span className="user-status"></span>
                                                                        </div>

                                                                        <div className="flex-grow-1 overflow-hidden">
                                                                            <h5 className="text-truncate font-size-14 mb-1">Stacie Dube</h5>
                                                                            <p className="text-truncate mb-0">I've finished it! See you so</p>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <div className="font-size-11">10 min</div>
                                                                        </div>
                                                                        <div className="unread-message">
                                                                            <span className="badge bg-danger rounded-pill">1</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-start">
                                                                        <div className="flex-shrink-0 user-img away align-self-center me-3">
                                                                            <img src="assets/images/users/avatar-3.jpg" className="rounded-circle avatar-sm" alt="" />
                                                                            <span className="user-status"></span>
                                                                        </div>

                                                                        <div className="flex-grow-1 overflow-hidden">
                                                                            <h5 className="text-truncate font-size-14 mb-1">Katie Olson</h5>
                                                                            <p className="text-truncate mb-0">This theme is awesome!</p>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <div className="font-size-11">22 min</div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-start">

                                                                        <div className="flex-shrink-0 user-img align-self-center me-3">
                                                                            <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-sm" alt="" />
                                                                            <span className="user-status"></span>
                                                                        </div>

                                                                        <div className="flex-grow-1 overflow-hidden">
                                                                            <h5 className="text-truncate font-size-14 mb-1">Marshall Wilson</h5>
                                                                            <p className="text-truncate mb-0">Nice to meet you</p>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <div className="font-size-11">01 Hr</div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-start">

                                                                        <div className="flex-shrink-0 user-img online align-self-center me-3">
                                                                            <div className="avatar-sm align-self-center">
                                                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                    J
                                                                                </span>
                                                                            </div>
                                                                            <span className="user-status"></span>
                                                                        </div>

                                                                        <div className="flex-grow-1 overflow-hidden">
                                                                            <h5 className="text-truncate font-size-14 mb-1">James Lee</h5>
                                                                            <p className="text-truncate mb-0">Wow that's great</p>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <div className="font-size-11">04 Hrs</div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-start">

                                                                        <div className="flex-shrink-0 user-img align-self-center me-3">
                                                                            <img src="assets/images/users/avatar-5.jpg" className="rounded-circle avatar-sm" alt="" />
                                                                            <span className="user-status"></span>
                                                                        </div>

                                                                        <div className="flex-grow-1 overflow-hidden">
                                                                            <h5 className="text-truncate font-size-14 mb-1">Ronald Tucker</h5>
                                                                            <p className="text-truncate mb-0">Nice to meet you</p>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <div className="font-size-11">22/04</div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-start">

                                                                        <div className="flex-shrink-0 user-img align-self-center me-3">
                                                                            <img src="assets/images/users/avatar-6.jpg" className="rounded-circle avatar-sm" alt="" />
                                                                            <span className="user-status"></span>
                                                                        </div>

                                                                        <div className="flex-grow-1 overflow-hidden">
                                                                            <h5 className="text-truncate font-size-14 mb-1">Dennis Stewart</h5>
                                                                            <p className="text-truncate mb-0">Nice to meet you</p>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <div className="font-size-11">22/04</div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-start">
                                                                        <div className="flex-shrink-0 user-img away align-self-center me-3">
                                                                            <img src="assets/images/users/avatar-3.jpg" className="rounded-circle avatar-sm" alt="" />
                                                                            <span className="user-status"></span>
                                                                        </div>

                                                                        <div className="flex-grow-1 overflow-hidden">
                                                                            <h5 className="text-truncate font-size-14 mb-1">Katie Olson</h5>
                                                                            <p className="text-truncate mb-0">This theme is awesome!</p>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <div className="font-size-11">22 min</div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-start">

                                                                        <div className="flex-shrink-0 user-img align-self-center me-3">
                                                                            <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-sm" alt="" />
                                                                            <span className="user-status"></span>
                                                                        </div>

                                                                        <div className="flex-grow-1 overflow-hidden">
                                                                            <h5 className="text-truncate font-size-14 mb-1">Marshall Wilson</h5>
                                                                            <p className="text-truncate mb-0">Nice to meet you</p>
                                                                        </div>
                                                                        <div className="flex-shrink-0">
                                                                            <div className="font-size-11">01 Hr</div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="groups">
                                                <div className="chat-message-list" data-simplebar>
                                                    <div className="pt-3">
                                                        <div className="px-3">
                                                            <h5 className="font-size-14 mb-3">Groups</h5>
                                                        </div>
                                                        <ul className="list-unstyled chat-list">
                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-sm me-3">
                                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                G
                                                                            </span>
                                                                        </div>

                                                                        <div className="flex-grow-1">
                                                                            <h5 className="font-size-14 mb-0">General</h5>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-sm me-3">
                                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                R
                                                                            </span>
                                                                        </div>

                                                                        <div className="flex-grow-1">
                                                                            <h5 className="font-size-14 mb-0">Reporting</h5>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-sm me-3">
                                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                M
                                                                            </span>
                                                                        </div>

                                                                        <div className="flex-grow-1">
                                                                            <h5 className="font-size-14 mb-0">Meeting</h5>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-sm me-3">
                                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                A
                                                                            </span>
                                                                        </div>

                                                                        <div className="flex-grow-1">
                                                                            <h5 className="font-size-14 mb-0">Project A</h5>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0 avatar-sm me-3">
                                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                B
                                                                            </span>
                                                                        </div>

                                                                        <div className="flex-grow-1">
                                                                            <h5 className="font-size-14 mb-0">Project B</h5>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="contacts">
                                                <div className="chat-message-list" data-simplebar>
                                                    <div className="pt-3">
                                                        <div className="px-3">
                                                            <h5 className="font-size-14 mb-3">Contacts</h5>
                                                        </div>

                                                        <div>
                                                            <div>
                                                                <div className="px-3 contact-list">A</div>

                                                                <ul className="list-unstyled chat-list">
                                                                    <li>
                                                                        <a href="#">
                                                                            <h5 className="font-size-14 mb-0">Adam Miller</h5>
                                                                        </a>
                                                                    </li>

                                                                    <li>
                                                                        <a href="#">
                                                                            <h5 className="font-size-14 mb-0">Alfonso Fisher</h5>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="mt-4">
                                                                <div className="px-3 contact-list">B</div>

                                                                <ul className="list-unstyled chat-list">
                                                                    <li>
                                                                        <a href="#">
                                                                            <h5 className="font-size-14 mb-0">Bonnie Harney</h5>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="mt-4">
                                                                <div className="px-3 contact-list">C</div>

                                                                <ul className="list-unstyled chat-list">
                                                                    <li>
                                                                        <a href="#">
                                                                            <h5 className="font-size-14 mb-0">Charles Brown</h5>
                                                                        </a>
                                                                        <a href="#">
                                                                            <h5 className="font-size-14 mb-0">Carmella Jones</h5>
                                                                        </a>
                                                                        <a href="#">
                                                                            <h5 className="font-size-14 mb-0">Carrie Williams</h5>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="mt-4">
                                                                <div className="px-3 contact-list">D</div>

                                                                <ul className="list-unstyled chat-list">
                                                                    <li>
                                                                        <a href="#">
                                                                            <h5 className="font-size-14 mb-0">Dolores Minter</h5>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* end chat-leftsidebar */}

                                <div className="w-100 user-chat mt-4 mt-sm-0 ms-lg-1">
                                    <div className="card">
                                        <div className="p-3 px-lg-4 border-bottom">
                                            <div className="row">
                                                <div className="col-xl-4 col-7">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 avatar-sm me-3 d-sm-block d-none">
                                                            <img src="assets/images/users/avatar-2.jpg" alt="" className="img-fluid d-block rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h5 className="font-size-14 mb-1 text-truncate"><a href="#" className="text-dark">Jennie Sherlock</a></h5>
                                                            <p className="text-muted text-truncate mb-0">Online</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-5">
                                                    <ul className="list-inline user-chat-nav text-end mb-0">
                                                        <li className="list-inline-item">
                                                            <div className="dropdown">
                                                                <button className="btn nav-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-search"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-md p-2">
                                                                    <form className="px-2">
                                                                        <div>
                                                                            <input type="text" className="form-control border bg-soft-light" placeholder="Search..." />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="list-inline-item">
                                                            <div className="dropdown">
                                                                <button className="btn nav-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item" href="#">Profile</a>
                                                                    <a className="dropdown-item" href="#">Archive</a>
                                                                    <a className="dropdown-item" href="#">Muted</a>
                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="chat-conversation p-3 px-2" data-simplebar>
                                            <ul className="list-unstyled mb-0">
                                                <li className="chat-day-title">
                                                    <span className="title">Today</span>
                                                </li>
                                                <li>
                                                    <div className="conversation-list">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <h5 className="conversation-name"><a href="#" className="user-name">Jennie Sherlock</a> <span className="time">10:00</span></h5>
                                                                <p className="mb-0">Good morning !</p>
                                                            </div>
                                                            <div className="dropdown align-self-start">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Copy</a>
                                                                    <a className="dropdown-item" href="#">Save</a>
                                                                    <a className="dropdown-item" href="#">Forward</a>
                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </li>

                                                <li className="right">
                                                    <div className="conversation-list">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <h5 className="conversation-name"><a href="#" className="user-name">Shawn</a> <span className="time">10:02</span></h5>
                                                                <p className="mb-0">Good morning</p>
                                                            </div>
                                                            <div className="dropdown align-self-start">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Copy</a>
                                                                    <a className="dropdown-item" href="#">Save</a>
                                                                    <a className="dropdown-item" href="#">Forward</a>
                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </li>

                                                <li>
                                                    <div className="conversation-list">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <h5 className="conversation-name"><a href="#" className="user-name">Jennie Sherlock</a> <span className="time">10:04</span></h5>
                                                                <p className="mb-0">
                                                                    Hello!
                                                                </p>
                                                            </div>
                                                            <div className="dropdown align-self-start">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Copy</a>
                                                                    <a className="dropdown-item" href="#">Save</a>
                                                                    <a className="dropdown-item" href="#">Forward</a>
                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <h5 className="conversation-name"><a href="#" className="user-name">Jennie Sherlock</a> <span className="time">10:04</span></h5>
                                                                <p className="mb-0">
                                                                    What about our next meeting?
                                                                </p>
                                                            </div>
                                                            <div className="dropdown align-self-start">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Copy</a>
                                                                    <a className="dropdown-item" href="#">Save</a>
                                                                    <a className="dropdown-item" href="#">Forward</a>
                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </li>

                                                {/* <li>
                                                    <div className="conversation-list">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <h5 className="conversation-name"><a href="#" className="user-name">Jennie Sherlock</a> <span className="time">10:06</span></h5>
                                                                <p className="mb-0">
                                                                    Next meeting tomorrow 10.00AM
                                                                </p>
                                                            </div>
                                                            <div className="dropdown align-self-start">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Copy</a>
                                                                    <a className="dropdown-item" href="#">Save</a>
                                                                    <a className="dropdown-item" href="#">Forward</a>
                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </li> */}

                                                {/* <li className="right">
                                                    <div className="conversation-list">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <h5 className="conversation-name"><a href="#" className="user-name">Shawn</a> <span className="time">10:08</span></h5>
                                                                <p className="mb-0">
                                                                    Wow that's great
                                                                </p>
                                                            </div>
                                                            <div className="dropdown align-self-start">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Copy</a>
                                                                    <a className="dropdown-item" href="#">Save</a>
                                                                    <a className="dropdown-item" href="#">Forward</a>
                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </li> */}

                                                {/* <li>
                                                    <div className="conversation-list">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <h5 className="conversation-name"><a href="#" className="user-name">Jennie Sherlock</a> <span className="time">10:09</span></h5>
                                                                <p className="mb-0">
                                                                    img-1.jpg & img-2.jpg images for a New Projects
                                                                </p>

                                                                <ul className="list-inline message-img mt-3  mb-0">
                                                                    <li className="list-inline-item message-img-list">
                                                                        <a className="d-inline-block m-1" href="#">
                                                                            <img src="assets/images/small/img-1.jpg" alt="" className="rounded img-thumbnail" />
                                                                        </a>
                                                                    </li>

                                                                    <li className="list-inline-item message-img-list">
                                                                        <a className="d-inline-block m-1" href="#">
                                                                            <img src="assets/images/small/img-2.jpg" alt="" className="rounded img-thumbnail" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="dropdown align-self-start">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#">Copy</a>
                                                                    <a className="dropdown-item" href="#">Save</a>
                                                                    <a className="dropdown-item" href="#">Forward</a>
                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li> */}
                                            </ul>
                                        </div>

                                        <div className="p-3 border-top">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="position-relative">
                                                        <input type="text" className="form-control border bg-soft-light" placeholder="Enter Message..." />
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <button type="submit" className="btn btn-primary chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block me-2">Send</span> <i className="mdi mdi-send float-end"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end user chat */}
                            </div>
                            {/* End d-lg-flex  */}

                        </div> {/* container-fluid */}
                    </div>
                    {/* End Page-content */}


                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    <script>document.write(new Date().getFullYear())</script> © Minia.
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-sm-end d-none d-sm-block">
                                        Design & Develop by <a href="#!" className="text-decoration-underline">Themesbrand</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            {/*} JAVASCRIPT */}
            <script src="assets/libs/jquery/jquery.min.js"></script>
            <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/libs/metismenu/metisMenu.min.js"></script>
            <script src="assets/libs/simplebar/simplebar.min.js"></script>
            <script src="assets/libs/node-waves/waves.min.js"></script>
            <script src="assets/libs/feather-icons/feather.min.js"></script>

            <script src="assets/libs/pace-js/pace.min.js"></script>

            <script src="assets/js/app.js"></script>
        </React.Fragment>
    );
}