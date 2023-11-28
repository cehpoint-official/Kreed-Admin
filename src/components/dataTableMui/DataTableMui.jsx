import React, { useEffect, useState } from "react";
import "./muiTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

const DataTableMui = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let list = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        // setData(list)
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    console.log(id + " has been deleted");
  };
  const actionCol = {
    field: "action",
    headerName: "Action",
    width: "200",
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/svgs/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/svgs/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };
  return (
    <div className="muiTable">
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={[...props.columns, actionCol]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTableMui;
