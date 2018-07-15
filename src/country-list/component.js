import React, { Component } from "react";
import styles from "./styles";
//import CountryItem from "../country-item/component";
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
//import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

const URL_TO_FETCH = "https://restcountries.eu/rest/v2/";

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = { teste: [] };
  }

  state = {
    teste: PropTypes.array
  };

  componentDidMount() {
    fetch(URL_TO_FETCH)
      .then(response => response.json()) // retorna uma promise
      .then(result => {
        this.setState({ teste: result });
      })
      .catch(err => {
        // trata se alguma das promises falhar
        console.error("Failed retrieving information", err);
      });
  }


  render() {
    return (
      <div>
        <BootstrapTable data={this.state.teste} pagination>
          <TableHeaderColumn style={styles.header} isKey dataField="callingCodes" dataSort>COD</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort
          filter={ { type: 'TextFilter', delay: 1000 } }>País</TableHeaderColumn>
          <TableHeaderColumn dataField="flag" dataFormat={imageFormatter}>Bandeira</TableHeaderColumn>
        </BootstrapTable>
        
      </div>
    );

    /*
teste
    <BootstrapTable 
      data={this.state.teste} 
      pagination 
      insertRow={ true } 
      deleteRow={ true }>

    </BootstrapTable>


    return (
      <ol style={styles.list}>
        <div style={styles.header}>
          <p>ID</p>
          <p style={styles.header_item}>Nome</p>
          <p style={styles.header_item}>Sigla</p>
          <p style={styles.header_item}>Flag</p>
        </div>
        {this.state.teste.map((country) => (
          <CountryItem country={country} key={country.callingCodes} />
        ))}
      </ol>
    );
    */
  }
}

function imageFormatter(cell, row){
  return (<img style={{width:50}} src={cell} alt='flag'/>)
  //return "<img src='"+cell+"'/>" ;
}


export default CountryList;
