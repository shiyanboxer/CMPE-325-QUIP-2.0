import React from "react"

export class Profile extends React.Component{
    render() {
        return (
            <div style={{marginTop:"40px"}}>
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
                                    <p className="text-secondary mb-1">3rd-year Computer Engineering Student</p>
                                    <p className="text-muted font-size-sm"></p>
                                    <button className="btn btn-primary">Resume</button> 
                                    <button className="btn btn-primary">Cover Letter</button>

                                </div>
                            </div>

                            </div>

                        </div>
                        
                        <div className="card mt-3">
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                            <div className="row">
                                {/* <div className="col-sm-3">
                                <h6 className="mb-0">Bio</h6>
                                </div> */}
                                <div className="col-sm-12 text-secondary">
                                Hi, my name is Shiyan. I'm a 3rd year computer engineering student. I'm seeking an internship in the clean energy industry where I can utilize my backend development skills.  
                                </div>
                            
                            </div>
                            </div>
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
                                <h6 className="mb-0">Program</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                B.A.Sc Computer Engineering
                                </div>
                            </div>
                        
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                <h6 className="mb-0">Year</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                3rd Year
                                </div>
                            </div>
                        

                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                shiyan@gmail.com
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                <h6 className="mb-0">Phone</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                (123) 456-7890
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                <h6 className="mb-0">Location</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    Kingston, ON
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                <h6 className="mb-0">Social Links</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <a href="https://github.com/shiyanboxer">GitHub</a>
                                    <p></p>
                                    <a href="https://www.linkedin.com/in/shiyanboxer/">LinkedIn</a>
                                    <p></p>
                                    <a href="https://shiyanboxer.netlify.app/">Personal Website</a>
                                </div>
                            </div>
                            </div>
                        </div>

                        

                        <div className="row gutters-sm">
                            <div className="col-sm-12 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-3"></i>Skills</h6>
                                <small>JavaScript</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>ReactJS</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>MongoDB</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "89%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>Python</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small>Flask</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>
                            </div>
                            </div>


                            <div className="col-sm-6 mb-3">
                            {/* <div className="card h-100">
                                <div className="card-body">
                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2"></i>Project Status</h6>
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
                            </div> */}
                            
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