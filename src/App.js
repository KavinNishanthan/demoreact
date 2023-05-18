import { Component } from "react";
import Table from "./Component/Table";
class App extends Component {
  render() {
    const data = [
      { id: 1, name: "dfg" },
      { id: 2, name: "thrh" },
      { id: 3, name: "qwef" },
      { id: 4, name: "dth" },
      { id: 5, name: "hilui" },
      { id: 6, name: "ukyuk" },
      { id: 7, name: "qwerwef" },
      { id: 8, name: "ftjtyuj" },
      { id: 9, name: "io;iol" },
    ];

    return (
      <div>
        <h1>Table 1</h1>
        <Table data={data} />
      </div>
    );
  }
}

export default App;
