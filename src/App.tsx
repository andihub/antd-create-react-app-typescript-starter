import React from "react";
import { Row, Col, Button, message } from "antd";
import "./App.css";

const App = () => {
  const onClick = () => {
    message.info("Hello, World!");
  };
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ height: "100vh" }}
    >
      <Col>
        <Button type="primary" size="large" onClick={onClick}>
          Say Hello
        </Button>
      </Col>
    </Row>
  );
};

export default App;
