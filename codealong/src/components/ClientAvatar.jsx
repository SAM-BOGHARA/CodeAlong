import React from 'react'
import Avatar from 'react-avatar'
const ClientAvatar = ({username}) => {
  return (
    <>
      <div className="flex -ml-3">
        <Avatar
          name={username}
          size={45}
          round="50px"
        />
        {/* <span className="text-center">{username?.slice(0,3)}</span> */}
      </div>
    </>
  );
}

export default ClientAvatar