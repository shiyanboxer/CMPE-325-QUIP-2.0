import React from "react"

export class Profile extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="main-body">
                    <br/>
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src= {window.location.origin +"/Profilepic.png"} alt="Admin" className="rounded-circle" width="250"/>
                                <div className="mt-3">
                                    <h4>Shiyan Boxer</h4>
                                    <p className="text-secondary mb-1">3rd Year Computer Engineering Student</p>
                                    <p className="text-muted font-size-sm">Ontario, CA</p>
                                    {/* <button className="btn btn-primary">Follow</button>
                                    <button className="btn btn-success">Message</button> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                        </div>
                        </div>
                        <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                <h6 className="mb-0">Full Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                Shiyan Boxer
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                shiyan.boxer@gmail.com
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                <h6 className="mb-0">Mobile</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                (320) 380-4539
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                <h6 className="mb-0">Address</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    Ontario, CA
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                <h6 className="mb-0">Github</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <a href="https://github.com/shiyanboxer">shiyanboxer</a>
                                </div>
                            </div>


                            </div>
                        </div>
                        <div className="row gutters-sm">
                            <div className="col-sm-6 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                <small>Web Design</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>Website Markup</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>One Page</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "89%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>Mobile Template</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>Backend API</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                <small>Web Design</small>
                                <div className="progress mb-3"style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>Website Markup</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>One Page</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "89%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>Mobile Template</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>Backend API</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div classNameName="progress-bar bg-primary" role="progressbar" style={{width: "66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}