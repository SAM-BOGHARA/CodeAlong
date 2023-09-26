import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Home = () => {
  const navigate = useNavigate();
  const [roomid, setRoomId] = useState('');
  const [username,setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Room Created Successfully");
  }


  const joinRoom = (e) => {
    if (!roomid || !username) {
      toast.error("RoomID and username are required.");
      return
    }
    // On success: Redirect to Editor
    navigate(`/editor/${roomid}`,{
      state:{
        username,
      }
    });
  }

  const handleInputEnter = (e) => {
    if (e.keyCode === 13) {
      joinRoom()
    }
  }

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <Logo/>
        <h4 className="mainLabel">Paste Invitation RoomID</h4>

        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" value={roomid} onChange={(e) => {setRoomId(e.target.value)}} onKeyUp={handleInputEnter} />
          <input type="text" className="inputBox" placeholder="USERNAME" onChange={(e) => {setUsername(e.target.value)}} value={username} onKeyUp={handleInputEnter} />
          <button onClick={joinRoom} className="btn joinBtn">JOIN</button>
          <span className="createInfo">
            If you dont have an invite code then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              New Room
            </a>
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <h4>Building with 💗</h4>
      </footer>
    </div>
  );
};

export default Home;
