import React from 'react'
import Avatar from 'react-avatar'
const ClientAvatar = ({username}) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Avatar
          name={username}
          size={50}
          round="14px"
        />
        <span className="text-center">{username?.slice(0,3)}</span>
      </div>
    </>
  );
}

export default ClientAvatar