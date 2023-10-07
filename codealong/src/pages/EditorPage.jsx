import React, { useEffect, useRef, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import ACTIONS from "../Actions.js";
import toast, { Toaster } from "react-hot-toast";
import Editor from "../components/Editor";
import { initSocket } from "../socket.js";
import Logo from "../components/Logo.jsx";
import ClientAvatar from "../components/ClientAvatar.jsx";

const EditorPage = () => {
  const socketRef = useRef(null);
  const codeRef = useRef(null);
  const location = useLocation();
  const reactNavigator = useNavigate();
  const { roomID } = useParams();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("socket error:", e);
        toast.error("Socket connection failed,try again later.");
        reactNavigator("/");
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomID,
        username: location.state?.username,
      });

      // Listening to JOINED Event
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username, socketId }) => {
          console.log("Action Joined");
          console.log({ clients, username, socketId });
          if (
            username !== location.state?.username &&
            username !== "undefined"
          ) {
            toast.success(`${username} has joined the room.`);
          }
          setClients(clients);
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            code: codeRef.current,
            socketId,
          });
        }
      );

      // Listening for DISCONNECTED Event
      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        console.log("Action Disconnected");
        console.log({ socketId, username });
        toast.error(`${username} left the room.`);
        setClients((prev) => {
          return prev.filter((client) => client.socketId !== socketId);
        });
      });
    };

    init();
    return () => {
      socketRef.current.off(ACTIONS.JOINED);
      socketRef.current.off(ACTIONS.DISCONNECTED);
      socketRef.current.disconnect();
    };
  }, []);

  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(roomID);
      toast.success("Room ID has been copied to your clipboard");
    } catch (err) {
      toast.error("Could not copy the Room ID");
      console.error(err);
    }
  }


  if (!location.state) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {/* Main Page */}
      <div className="min-h-screen flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-6 flex-grow">
          {/* Drawer (1 grid column) */}
          <div className="md:col-span-1 bg-gray-900  text-white">
            {/* <Drawer clients={clients} /> */}
            <aside className="flex md:col-span-1 bg-gray-900 p-4 text-white ">
              <div className="flex flex-col flex-grow">
                <Logo className="w-full" name="CodeAlong" />
                <h4 className="font-bold  mb-2">Connected Users</h4>
                <div className="flex flex-wrap gap-4 font-bold ">
                  {clients.map((client) => (
                    <ClientAvatar
                      key={client.socketId}
                      username={client.username}
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-between mt-auto">
                  <button
                    className="btn btn-sm btn-warning m-2"
                    onClick={copyRoomId}
                  >
                    Copy Room ID
                  </button>
                  <button
                    className="btn btn-sm btn-outline btn-error m-2"
                    onClick={()=>{reactNavigator("/")}}
                  >
                    Leave Room
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* Editor (5 grid columns) */}
          <div className="md:col-span-5 bg-gray-100 h-full">
            <Editor
              socketRef={socketRef}
              roomID={roomID}
              onCodeChange={(code) => {
                codeRef.current = code;
              }}
            />
          </div>

          {/* Video (To be Continued!!) */}

        </div>
      </div>
    </>
  );
};

export default EditorPage;
