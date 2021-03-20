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
          this.filterData = this.filterData.bind(this)
          this.removeFilters = this.removeFilters.bind(this)
    }

    filterData(){
        const location = this.locationRef.current.value
        const postion = this.positionRef.current.value
        const tempData = {...this.state.data}
        let newData = []
        tempData.rows.map((item)=>{
            if ((item.office.includes(location)) && (item.position.includes(postion))){
                return(newData.push(item))
            }
        })
        tempData.rows = newData
        this.setState({filteredData:tempData})
    }

    removeFilters = () => {
        this.locationRef.current.value = ""
        this.positionRef.current.value = ""
        this.setState({filteredData: this.state.data})
    }
    render() {
        return (
            <div style={{marginTop:"10px"}}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <select className={styles.selectTag} ref={this.locationRef} >
                            <option value={""}>By Location</option>
                            <option value={"Edinburgh"}>Edinburgh</option>
                            <option value={"Tokyo"}>Tokyo</option>
                            <option value={"San Francisco"}>San Francisco</option>
                        </select>
                        </div>
                        <div className="col-md-3">
                            <select className={styles.selectTag} ref={this.positionRef}>
                                <option value={""}>By Position</option>
                                <option value={"System Architect"}>System Architect</option>
                                <option value={"Accountant"}>Accountant</option>
                                <option value={"Junior Technical Author"}>Junior Technical Author</option>

                            </select>
                        </div>
                        <div className="col-md-3">
                            <button className={"btn btn-primary"} onClick={()=>this.filterData()}>
                                Apply Filters
                            </button>
                        </div>
                        <div className="col-md-3">
                            <button className={"btn btn-danger"} onClick={()=>this.removeFilters()}>
                                Clear Filters
                            </button>
                        </div>
                    </div>
                </div>

            <div style={{width:"50%", margin:"0 auto"}}>
                <div className="container">            
                    <div className="row">
                        <div className="cold-md-12">
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

  

