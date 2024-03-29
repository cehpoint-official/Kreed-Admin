import "./users.scss";
import { useState } from "react";
import DataTableMui from "../../components/dataTableMui/DataTableMui";
import { userRows } from "../../data";
import Add from "../../components/Add/Add";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    id: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    id: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    id: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    id: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    id: "password",
    headerName: "Password",
    width: 150,
    type: "string",
  },
  {
    id: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const columnsTable = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    id: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    id: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    field: "email",
    id: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    id: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },

  {
    field: "verified",
    id: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTableMui slug="users" columns={columnsTable} rows={userRows} />

      {open && <Add slug="user" setOpen={setOpen} />}
    </div>
  );
};

export default Users;
