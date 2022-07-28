import "./styles.css";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const Search = (props) => {
  const [search] = useState("test");
  return (
    <InputGroup className="mb-3" id="search-form">
      <Button
        disabled
        variant="outline-secondary"
        id="search-button"
        onClick={() => {
          props.updateFilters(search);
        }}
      >
        <ion-icon name="search-circle-outline" size="large" />
      </Button>
      <Form.Control
        disabled
        aria-label="text with button addon"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
};

export default Search;
