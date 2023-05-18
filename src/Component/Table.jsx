import { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const { data } = props;

  const values = data.map((val, index) => {
    return (
      <tr>
        <td>{val.id}</td>
        <td>{val.name}</td>
      </tr>
    );
  });

  return <tbody>{values}</tbody>;
};

class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <table>
        <TableHead />
        <TableBody data={data} />
      </table>
    );
  }
}

export default Table;
