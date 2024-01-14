import React, { useEffect, useState } from "react";
import "../../components/dataTableMui/muiTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase"
import { userColumns } from "../../userColoums";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const fetchData = async()=>{
    //   let list = []
    //   try{

    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({id : doc.id , ...doc.data()})
    //     });
    //     setData(list)
    //     console.log(list);
    //   } catch(err){
    //     console.log(err);
    //   }

    // }
    // fetchData()

    //listen(real-time-database)

    const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
      let list = []
      snapShot.docs.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() })
      })
      setData(list)
    }, (error) => {
      console.log(error);
    });
    return () => {
      unsub()
    }
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ width: "90%" }} className="dataTable">
      <div className="datatableTitle">
        Add New User
     
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default Datatable;
