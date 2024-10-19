// App.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    const [data, setdata] = useState("")
    const [deleteitem, setdeleteitem] = useState('')

    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/product/getproducts");
        setdata(res.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    const handleDeleteProduct = async (id)=>{
        try {
            console.log("id============",id)
            const res = await axios.delete(`http://localhost:3000/api/product/delete/${id}`);
            console.log("reeeeeeeeeee",res)
            setdata((prevProducts) => prevProducts.filter((product) => product.id !== id));
          } catch (error) {
            console.error("Error fetching data:", error);
          } 
    }
console.log(data)
  return (
    <Container className="mt-4">
      <h2>Employee List</h2>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id || index}>
                <td>{ index + 1}</td> 
                <td>{item.name || "N/A"}</td> 
                <td>{item.description || "N/A"}</td> 
                <td>{item.price || "N/A"}</td> 
                <td>{item.category || "N/A"}</td> 
                <td >
                    <Link to='' className='btn btn-success me-3'  >Add</Link>
                    <a className='btn btn-primary me-3' >Edit</a>
                    <a className='btn btn-danger' onClick={()=>handleDeleteProduct(item.id)}>Delete</a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
