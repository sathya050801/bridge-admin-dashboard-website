import "./results.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userResults } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserResults() {
  const [data, setData] = useState(userResults);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", 
    headerName: "ID",
    width: 95
  },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "FA1",
     headerName: "FA1", 
     width: 200 
    },
    {
      field: "FA2",
      headerName: "FA2",
      width: 120,
    },
    {
      field: "HalfYearly",
      headerName: "Half-Yearly",
      width: 160,
    },
    { field: "FA3",
     headerName: "FA3", 
     width: 200 
    },
    {
      field: "FA4",
      headerName: "FA4",
      width: 120,
    },
    {
      field: "Annual",
      headerName: "Annual",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
    <h1>Results</h1>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
