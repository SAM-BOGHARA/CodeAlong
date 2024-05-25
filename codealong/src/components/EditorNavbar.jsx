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
  );
};

export default EditorNavbar;
