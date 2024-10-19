import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const Products = () => {
  const [data, setdata] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setdata(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("dataa=====", data);
  return (
    <div className="container mt-5">
        <div className="row">

      {data ? (
          data?.map((item) => {
          return (
          
            <div
              key={item.id}
              className="col-md-4 mb-4 "
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={item.image || "https://via.placeholder.com/150"}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="bg-light">{item.category}</Card.Text>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text className="text-danger">Rs.{item.price}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            
              </div>
          );
        })
    ) : (
        <h1>Loading........</h1>
    )}
    </div>
    </div>
  );
};

export default Products;
