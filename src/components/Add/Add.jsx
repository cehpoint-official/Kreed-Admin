import React, { useEffect, useState } from "react";
import "../../components/Add/add.scss";
import { FaUpload } from "react-icons/fa6";
import {
  
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { userInputs } from "../../userInputs";

const Add = (props) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [perc, setPerc] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>

        <form onSubmit={handleAdd}>
          <div className="imageContainer">
            <img src={file ? URL.createObjectURL(file) : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} alt="" />
            <div className="fileContainer">
              <label htmlFor="file">
                Upload Image : <FaUpload />
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
          </div>

          {userInputs.
            // .filter((item) => item.field !== "id" && item.field !== "img")
              map((item) => (
              <div className="item" key={item.id}>
                <p>{item.name}</p>
                <input
                  type={item.type}
                  id={item.id}
                  placeholder={item.label}
                  onChange={handleInput}
                />
              </div>
            ))}
          <button disabled={perc != null && perc < 100 }type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
