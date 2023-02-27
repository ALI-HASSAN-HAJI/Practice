import React, { useEffect, useState } from 'react';
import countriesApi from '../Api/countriesApi';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Countries = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const fetchData = () => {
        countriesApi.get('/all/?data=30')
        .then(({data}) => {
        setData(data);
        })
    }
    const getSearch = () =>{
      return data.filter((item) => {
        return search.toLowerCase() === '' ? item : item.name.common.toLowerCase().includes(search.toLowerCase());})
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(data)
    
    return (
        <div>
            <h1>Data about all the Countries:</h1>
            <input type="text"
             placeholder='Search for a country' 
             onChange={(event) => setSearch(event.target.value)}/>
            <Button variant="warning" onClick={()=> getSearch()}>Warning</Button>

            <Table style={styles.table} striped bordered hover variant="dark">
      <thead style={styles.thead}>
        <tr>
          <th>Name</th>
          <th>Flag</th>
          <th>Population</th>
          <th>Language</th>
          <th>Region</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {         
             getSearch().map((item) => {
             return(
                <tr>
                <td>{item.name.common}</td>
                <td> <img style={styles.img} src={item.flags.png} alt="flag photo" /></td>
                <td>{item.population.toLocaleString('en-KE')}</td>
                <td></td>
                <td>{item.region}</td>
                <td>{item.capital}</td>
              </tr>
             )
            })
        }
      </tbody>
    </Table>
        </div>
    )
}
const styles = {
 img: {
    width: '150px',
    height: '100px',
    
 },
 table: {
    backgroundColor: '#bfeaf5',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '20px',
   
    
 },
 thead: {
    backgroundColor: 'blue'
 }
}

export default Countries;