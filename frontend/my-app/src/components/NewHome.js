import React from "react"
import {data} from "./Data"
import { MDBDataTable } from 'mdbreact';
import styles from "../style/NewHome.module.css"


export class NewHome extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            filteredData: {...data}
          }
          this.locationRef = React.createRef()
          this.positionRef = React.createRef()
          this.provinceRef = React.createRef()
          this.skillsRef = React.createRef()
          this.filterData = this.filterData.bind(this)
          this.removeFilters = this.removeFilters.bind(this)
    }

    filterData(){
        const location = this.locationRef.current.value
        const postion = this.positionRef.current.value
        const province = this.provinceRef.current.value
        const skills = this.skillsRef.current.value
        const tempData = {...this.state.data}
        let newData = []
        tempData.rows.map((item)=>{
            if ((item.company.includes(location)) && (item.position.includes(postion)) 
                &&(item.location.includes(province)) && (item.skills.includes(skills))){
                return(newData.push(item))
            }
        })
        tempData.rows = newData
        this.setState({filteredData:tempData})
    }

    removeFilters = () => {
        this.locationRef.current.value = ""
        this.positionRef.current.value = ""
        this.provinceRef.current.value = ""
        this.setState({filteredData: this.state.data})
    }
    render() {
        return (
            <div style={{marginTop:"10px"}}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-2">

                        <select className={styles.selectTag} ref={this.positionRef}>
                                <option value={""}>By Position</option>
                                <option value={"Software Engineer Intern"}>Software Engineer	</option>
                                <option value={"Technical Consulting Intern"}>Technical Consulting</option>
                                <option value={"Data Science Intern"}>Data Science</option>
                                <option value={"Financial Analyst Intern"}>Financial Analyst</option>
                                <option value={"Product Manager Intern"}>Product Manager</option>
                            </select>

                        
                        </div>
                        <div className="col-md-2">
                            <select className={styles.selectTag} ref={this.locationRef} >
                                <option value={""}>By Company</option>
                                <option value={"Google"}>Google</option>
                                <option value={"TD Bank"}>TD Bank</option>
                                <option value={"RBC"}>RBC</option>
                                <option value={"Shopify"}>Shopify</option>
                                <option value={"Microsoft"}>Microsoft</option>
                                <option value={"Quuens University"}>Quuens University</option>
                            </select>
                        </div>


                        <div className="col-md-2">
                            <select className={styles.selectTag} ref={this.provinceRef} >
                                <option value={""}>By Location</option>
                                <option value={"Toronto, ON"}>Toronto, ON</option>
                                <option value={"Ottawa, ON"}>Ottawa, ON</option>
                                <option value={"Vancouver, BC"}>Vancouver, BC</option>
                                <option value={"Kingston, ON"}>Kingston, ON</option>
                            </select>
                        </div>

                        <div className="col-md-2">
                            <select className={styles.selectTag} ref={this.skillsRef} >
                                <option value={""}>By Skills</option>
                                <option value={"Python"}>Python</option>
                                <option value={"Flask"}>Flask</option>
                                <option value={"JavaScript"}>JavaScript</option>
                                <option value={"Docker"}>Docker</option>
                            </select>
                        </div>

                        <div className="col-md-2">
                            <button className={"btn btn-primary"} onClick={()=>this.filterData()}>
                                Apply Filters
                            </button>
                        </div>
                        <div className="col-md-2">
                            <button className={"btn btn-primary"} onClick={()=>this.removeFilters()}>
                                Clear Filters
                            </button>
                        </div>
                    </div>
                </div>

            <div style={{width:"100%", margin:"0 auto"}}>
                <div className="container">            
                    <div className="row">
                        <div className="col-md-12">
                        <MDBDataTable
                            striped
                            bordered
                            small
                            data={this.state.filteredData}
                            />
                        </div>
                    </div>
                </div>
            </div>                   
        </div>
            
          );
    }
}

  

