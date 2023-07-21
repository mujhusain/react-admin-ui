import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 80,
    renderCell: (params) => (
      <img src={params.row.img || "./noavatar.png"} alt="" />
    ),
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 100,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 100,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone No.",
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  }
];

const Users = () => {

  const[open, setOpen] =useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)} >Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen}  />}
    </div>
  );
};

export default Users;
