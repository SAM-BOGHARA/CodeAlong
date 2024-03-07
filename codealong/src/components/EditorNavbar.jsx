import React from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const EditorNavbar = () => {
  const { roomID } = useParams();

  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(roomID);
      toast.success("Room ID has been copied to your clipboard");
    } catch (err) {
      toast.error("Could not copy the Room ID");
      console.error(err);
    }
  }
  return (
    <>
      <nav className="flex items-center justify-between">
        <div className="pl-3">
          <Button>CodeAlong</Button>
        </div>

        <div className="flex p-2">
          <Button
            size="sm"
            color="warning"
            onClick={copyRoomId}
            className="mr-5"
          >
            Copy Room ID
          </Button>
          <Button size="sm" variant="destructive" ml={2}>
            Leave Room
          </Button>
        </div>
      </nav>
    </>
    // <>
    //   <div className="navbar bg-base-100">
    //     <div className="flex-1">
    //       <a className="btn text-md">Codealong</a>
    //     </div>
    //     <div className="flex-none">
    //       <ul className="menu menu-horizontal px-1">
    //         <div className="flex flex-row justify-between mt-auto">
    //           <button className="btn btn-sm btn-warning" onClick={copyRoomId}>
    //             Copy Room ID
    //           </button>
    //           <button className="btn btn-sm btn-outline btn-error ml-1">
    //             Leave Room
    //           </button>
    //         </div>
    //       </ul>
    //     </div>
    //   </div>
    // </>
  );
};

export default EditorNavbar;
