import React from "react";
import { Container, Row } from "react-bootstrap";
import ItemList from "./ItemList.jsx";

const Items = () => {
  const data = [
    {
      id: 1,
      name: "Item 1",
      img: "/img/product.jpg",
      price: "20$",
    },
    {
      id: 2,
      name: "Item 2",
      img: "/img/product.jpg",
      price: "18$",
    },
    {
      id: 3,
      name: "Item 3",
      img: "/img/product.jpg",
      price: "16$",
    },
    {
      id: 4,
      name: "Item 4",
      img: "/img/product.jpg",
      price: "20$",
    },
    {
      id: 5,
      name: "Item 5",
      img: "/img/product.jpg",
      price: "43$",
    },
    {
      id: 6,
      name: "Item 6",
      img: "/img/product.jpg",
      price: "33$",
    },
    {
      id: 7,
      name: "Item 7",
      img: "/img/product.jpg",
      price: "113$",
    },
  ];

  return (
    <>
      <Container className="p-5 m-3">
        <Row className="d-flex justify-content-center align-items-center g-3">
          <ItemList data={data} />
        </Row>
      </Container>
    </>
  );
};

export default Items;
