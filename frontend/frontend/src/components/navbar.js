import React from "react"
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBFormInline,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from "mdbreact";

// https://reactjs.org/docs/faq-functions.html

class Navbar extends React.Component {
    // State for toggle button when screen gets too small
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen}
        );
    }

    render() {
        return (
            <MDBNavbar expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Dog Depot</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse}/>
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/upload">Upload</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>

                    {/*Search bar*/}
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBFormInline waves>
                                <div className="md-form my-0">

                                    {/*When a new character is inputted in the search bar (onChange) then send functionCall using props.*/}
                                    <input className="form-control mr-sm-2"
                                           size="40"
                                           onChange={this.props.functionCall}
                                           type="text" placeholder="Search by Author, Image Name, Tag"
                                           aria-label="Search"/>
                                </div>
                            </MDBFormInline>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        )
    }
}

export default Navbar;