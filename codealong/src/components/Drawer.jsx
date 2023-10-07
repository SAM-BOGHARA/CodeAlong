import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import ClientAvatar from "./ClientAvatar";

const Drawer = () => {
  return (
    <>
      <aside className="flex md:col-span-1 bg-gray-900 p-4 text-white ">
        <div className="flex flex-col flex-grow">
          <Logo className="w-full" name="CodeAlong" />
          <h4 className="font-bold  mb-2">Connected Users</h4>
          <div className="flex flex-wrap gap-4 font-bold ">
            {clients.map((client) => (
              <ClientAvatar key={client.socketId} username={client.username} />
            ))}
          </div>
          <div className="flex flex-col justify-between mt-auto">
            <button className="btn btn-sm btn-warning m-2">Copy Room ID</button>
            <button className="btn btn-sm btn-outline btn-error m-2">
              Leave Room
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Drawer;
