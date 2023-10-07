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
    <div className="card h-screen flex items-center justify-center text-white">
      <div className="bg-zinc-900 rounded-lg p-5 w-100 max-w-80">
        <Logo/>
        <h4 className="mb-3 mt-0 font-semibold">Paste Invitation RoomID</h4>

        <div className="flex flex-col outline-none mb-3.5 bg-white-400 font-semibold text-xl">

          <input type="text" className="input input-bordered input-primary w-full  mb-2" placeholder="ROOM ID" value={roomid} onChange={(e) => {setRoomId(e.target.value)}} onKeyUp={handleInputEnter} />
          <input type="text" className="input input-bordered input-primary w-full  mb-2" placeholder="USERNAME" onChange={(e) => {setUsername(e.target.value)}} value={username} onKeyUp={handleInputEnter} />
          <button onClick={joinRoom} className="btn w-full btn-accent text-xl">JOIN</button>
          <span className="mt-2 mb-2">
            Don't have an invite code,
            <a onClick={createNewRoom} href="" className="btn btn-accent btn-block text-xl">
              Create New Room
            </a>
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <h4 className="m-5">Building with 💗</h4>
      </footer>
    </div>
  );
};

export default Home;
