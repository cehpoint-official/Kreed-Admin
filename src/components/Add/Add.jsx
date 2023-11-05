import "./add.scss";
import toast from "react-hot-toast";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import noImg from "../../assets/noImage.jpg";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { MdDriveFolderUpload } from "react-icons/md";
const Add = (props) => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", data.email), {
        ...data,
        timeStamp: serverTimestamp(),
      });

      toast("User Added");
    } catch (error) {
      toast(error);
    }

    props.setOpen(false);
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>

        <form onSubmit={handleSubmit}>
          <div className="imageContainer">
            <img src={file ? URL.createObjectURL(file) : noImg } alt="" />
            <div className="fileContainer">
              <label htmlFor="file">
               Upload Image : <MdDriveFolderUpload />
              </label>
              <input  onChange={e=>setFile(e.target.files[0])} type="file" id="file" style={{display:"none"}} />
            </div>
          </div>

          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.id}>
                <p>{column.headerName}</p>
                <input
                  type={column.type}
                  id={column.id}
                  placeholder={column.field}
                  onChange={handleInput}
                />
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
