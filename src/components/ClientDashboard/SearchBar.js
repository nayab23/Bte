import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import filter_icon from '../app_assets/img/Final-ICONS_SVG_11-Hours.svg'
import search from '../app_assets/img/Final-ICONS_SVG-17-Search.svg';
import { FaUserAlt, FaUserCog, FaClipboardList } from "react-icons/fa";

class SearchBar extends Component {
      
  state = {
    filter_title: 'All Tickets'
}
setFilter = (filter) =>{
    switch (filter) 
    {
        case 0:
            this.setState({filter_title: 'Search an expert!.....'})
            break;
        case 1:
            this.setState({filter_title: 'Search Experts'})
            break;
        case 2:
            this.setState({filter_title: 'Search Category'})
            break;
        case 3:
            this.setState({filter_title: 'Search Skills'})
            break;
        default:
            break;
    }
    this.setState({filter: true});
}

setActive = (filter) =>
{
    for (let item = 0 ; item < 4 ; item++)
    {
        document.getElementById(`contract-filter-${item}`).classList.remove('active-filter')
    }
    document.getElementById(`contract-filter-${filter}`).classList.add('active-filter')
}

componentDidMount = () =>
{
    this.setFilter(0)
}
    render() {
        return (
            <form className="search-wrapper ui" style={{position: "relative"}}>
                <div className="dashboard-search-field">
                    <img src={search} className="search-icon ml-2" />
                        <MDBDropdown>
                            <MDBDropdownToggle className="globle-search mt-2" caret color="white" id="tab-dropdown-button">
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="search-dropdown">   
                                    {/* <MDBDropdownItem onClick={()=>{this.setFilter(0)}} id="ticket-filter-0" className="filter-item">
                                        <div className="status-icon status-icon-aqua menu-status-icon tranparent-icon"></div>
                                        Search an expert!.....
                                    </MDBDropdownItem> */}
                                    <MDBDropdownItem onClick={()=>{this.setFilter(1)}} className="search-item" id="ticket-filter-1" >
                                        <FaUserAlt className="mr-2" />
                                        Experts
                                        <br />
                                        <span className="ml-4">Hire professionals experts</span>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem onClick={()=>{this.setFilter(2)}} className="search-item" id="ticket-filter-2" >
                                        <FaUserCog className="mr-2" />
                                        Category
                                        <br />
                                        <span className="ml-4">Hire by category </span>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem onClick={()=>{this.setFilter(3)}} className="search-item" id="ticket-filter-3" >
                                        <FaClipboardList className="mr-2" />
                                        Skills
                                        <br />
                                        <span className="ml-4">Hire by skills</span>
                                    </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                <input type="text" name="search_query" placeholder={this.state.filter_title} className="search-field"  />
                </div>
            </form>
        );
    }
}

export default SearchBar;