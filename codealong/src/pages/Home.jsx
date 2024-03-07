import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Home = () => {
  const navigate = useNavigate();
  const [roomid, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Room Created Successfully");
  };

  const joinRoom = (e) => {
    if (!roomid || !username) {
      toast.error("RoomID and username are required.");
      return;
    }
    // On success: Redirect to Editor
    navigate(`/editor/${roomid}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.keyCode === 13) {
      joinRoom();
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center text-white">
        <div className="bg-zinc-900 rounded-lg p-5 w-full max-w-2xl">
          {" "}
          {/* Adjust width here */}
          <Logo />
          <h4 className="mb-3 mt-0 font-semibold">Paste Invitation RoomID</h4>
          <div className="flex flex-col mb-3.5 font-semibold text-xl">
            <Input
              placeholder="ROOM ID"
              value={roomid}
              onChange={(e) => {
                setRoomId(e.target.value);
              }}
              onKeyUp={handleInputEnter}
              className="mb-2 text-black" // Remove width here to allow input to stretch
            />

            <Input
              placeholder="USERNAME"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              onKeyUp={handleInputEnter}
              className="mb-2 text-black" // Remove width here to allow input to stretch
            />
            <div className="flex justify-center mb-2">
              {" "}
              {/* Center the "Create New Room" button */}
              <Button onClick={joinRoom} variant="secondary">
                JOIN
              </Button>
            </div>
            <div className="flex justify-center mb-2">
              {" "}
              {/* Center the "Create New Room" button */}
              <Button onClick={createNewRoom} variant="secondary">
                Create New Room
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
      <footer>
        <h4 className="m-5">Building with 💗</h4>
      </footer>
    </>
  );
};

export default Home;
