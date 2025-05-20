import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const API_URL = "https://dummyjson.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();

        if (reqType === "users") setItems(data.users);
        else if (reqType === "posts") setItems(data.posts);
        else if (reqType === "comments") setItems(data.comments);
        else setItems([]);
      } catch (err) {
        console.error("Fetch error:", err.message);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <div className="container my-4">
      <h1 className="mb-4 text-center">DummyJSON Data Fetcher</h1>

      <div className="mb-3">
        <Form reqType={reqType} setReqType={setReqType} />
      </div>

      <Table items={items} />

      <div>
        <List items={items} />
      </div>
    </div>
  );
};

export default App;
