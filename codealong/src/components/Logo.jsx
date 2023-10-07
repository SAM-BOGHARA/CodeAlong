import React from 'react'

const Logo = ({className,name}) => {
  return (
    <>
      <div className={`flex flex-row justify-center ${className}`}>
        <img
          className="h-20 md:h-16 sm:h-14"
          src="/vite.svg"
          alt="CodeAlong"
        />

        <h1 className="font-bold  mt-5">{name || ""}</h1>
      </div>
    </>
  );
}

export default Logo