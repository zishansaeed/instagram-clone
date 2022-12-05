import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="/profile.png"
        className="rounded-full border p-[2px] w-16 h-16"
      ></img>

      <div className="flex-1 mx-4">
        <h2 className="font-bold">zeeshan</h2>
        <h3 className="text-sm text-gray-400">Welcome to Intagram</h3>
      </div>

      <button className="text-blue-500 text-sm font-semibold ">Sign out</button>
    </div>
  );
};

export default MiniProfile;
