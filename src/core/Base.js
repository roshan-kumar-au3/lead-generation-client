import React from 'react';
import { Link } from 'react-router-dom';

function Base({children}) {
    return (
        <div>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">SOLO-SOS</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="sidebar-sticky pt-3">
                            <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                <span data-feather="home"></span>
                                Dashboard <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                <span data-feather="home"></span>
                                All Lead <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/createlead">
                                <span data-feather="file"></span>
                                Create Lead
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/updatelead">
                                <span data-feather="shopping-cart"></span>
                                Update Lead
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/movelead">
                                <span data-feather="users"></span>
                                Move Lead to Funnel
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sharelead">
                                <span data-feather="bar-chart-2"></span>
                                Share Lead
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signout">
                                <span data-feather="layers"></span>
                                Sign out
                                </a>
                            </li>
                            </ul>
                        </div>
                    </nav>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    {children}
                </main>
            </div>
        </div>
    </div>
    )
}

export default Base
