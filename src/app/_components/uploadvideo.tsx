import React from 'react'

const Uploadvideo = () => {
  return (
    <div className="h-[100dvh] w-full p-4 border border-x-0">
      <div className="w-fit flex flex-col gap-4">
        <label>Upload a video: </label>
        <input className="text-sm" type="file" accept="video/*" />
      </div>
    </div>
  )
}

export default Uploadvideo
