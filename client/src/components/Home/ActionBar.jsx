import React, { useState } from 'react'
import Picker from "emoji-picker-react";

const ActionBar = () => {
  const [showAddPost,setShowAddPost] = useState(false)
  const [isPickerVisible, setPickerVisible] = useState(false);
    const onEmojiClick = (event, emojiObject) => {
      setTextareaValue((prev) => prev + emojiObject.emoji);
      setPickerVisible(false); // Optionally close picker after selection
    };
  return (
    <>
      <div className="bg-white w-full overflow-hidden border border-slate-200">
        <ul className="flex w-full ">
          <li className="px-4 py-2 bg-white font-medium border-r  text-slate-600 flex-1 text-center hover:bg-slate-100 cursor-pointer">
            Ask
          </li>
          <li
            onClick={() => setShowAddPost(true)}
            className="px-4 py-2 bg-white font-medium border-r  text-slate-600 flex-1 text-center hover:bg-slate-100 cursor-pointer"
          >
            Post
          </li>
          <li className="px-4 py-2 bg-white font-medium border-r  text-slate-600 flex-1 text-center hover:bg-slate-100 cursor-pointer">
            Answer
          </li>
          <li className="px-4 py-2 bg-white font-medium  text-slate-600 flex-1 text-center hover:bg-slate-100 cursor-pointer">
            Poll
          </li>
        </ul>
      </div>
      {showAddPost && (
        <div className=" w-full bg-white p-4  border rounded-md overflow-hidden">
          <textarea
            className="w-full resize-none focus:outline-none "
            rows={3}
            placeholder="Write something..."
          />
          <div className="flex w-full justify-between">
            <p className='relative' onClick={() => setPickerVisible(!isPickerVisible)}>
              Emojis
              {isPickerVisible && (
                <div className="absolute top-4 left-0 z-10">
                  <Picker onEmojiClick={onEmojiClick} />
                </div>
              )}
            </p>
            <button className="btn-primary">Post</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ActionBar