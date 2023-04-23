import React, { useEffect, useState, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import chatBox from '../chats/chatdata';
import { useRouter } from 'next/router';
import { FiArrowRightCircle } from 'react-icons/fi';
import Link from 'next/link';
function ChatBox({ showChat, setShowChat, flag, setFlag }) {
  const [userChat, setUserChat] = useState([]);
  const [val, setVal] = useState('');

  const router = useRouter();
  const chatContainerRef = useRef(null);

  const handleKeyUp = (e) => {
    setVal(e.target.value);
    if (e.key === 'Enter') {
      const inputValue = e.target.value;
      setUserChat((prevUserChat) => [...prevUserChat, inputValue]); // Use functional update

      setVal('');
      setTimeout(() => {
        switch (inputValue.toLowerCase()) {
          case 'a':
            setUserChat((prevUserChat) => [...prevUserChat, chatBox.a]);
            break;
          case 'b':
            setUserChat((prevUserChat) => [...prevUserChat, chatBox.b]);
            break;
          case 'c':
            setUserChat((prevUserChat) => [...prevUserChat, chatBox.c]);
            break;
          case 'd':
            router.push('/projects');
            setShowChat(false);
            setUserChat([]);
            break;
          case 'e':
            router.push('/');
            setShowChat(false);
            setUserChat([]);
            break;
          case 'call':
            window.location.href = 'tel:+2348139781147';
            setShowChat(false);
            setUserChat([]);
            break;
          case 'f':
            setUserChat((prevUserChat) => [...prevUserChat, chatBox.d]);
            setShowChat(false);
            setUserChat([]);
            break;
          case 'co':
            router.push('/contact');
            setShowChat(false);
            setUserChat([]);
            break;
          case 'a1':
            router.push('#plans');
            setShowChat(false);
            setUserChat([]);
            break;
          case 'a2':
            setUserChat((prevUserChat) => [...prevUserChat, chatBox.a2]);
            break;
          case 'a3':
            setUserChat((prevUserChat) => [...prevUserChat, chatBox.a3]);
            break;
          case 'm':
            setUserChat((prevUserChat) => [...prevUserChat, chatBox.welcome]);
            break;
          case 'fn':
            setShowChat(false);
            setUserChat([]);
            break;
          default:
            setUserChat((prevUserChat) => [...prevUserChat, chatBox.default]);
            break;
        }
      }, 1000);
    }
  };

  useEffect(() => {
    let timerId;

    if (showChat && flag) {
      timerId = setTimeout(() => {
        setUserChat([...userChat, chatBox.welcome]);
        setFlag(false);
      }, 1000);
      if (!flag) {
        clearTimeout(timerId);
      }
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [userChat, showChat, flag]);

  useEffect(() => {
    // Scroll to the bottom of the chat container when userChat updates
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [userChat]);

  return (
    <div className="h-[100%] w-full bg-white shadow-md border border-gray-300 overflow-auto relative">
      <FaTimes
        className={`${
          showChat ? '' : 'hidden'
        } absolute text-other2 top-2 left-2 z-50 cursor-pointer`}
        onClick={() => {
          setShowChat(false);
          setUserChat([]);
        }}
      />

      <div
        className="chat mt-7 h-[78%] overflow-auto py-1"
        ref={chatContainerRef}
      >
        <div className="flex flex-col space-y-3 px-1">
          {userChat?.map((e, idx) => (
            <div
              className={`${
                (idx + 1) % 2 !== 0 ? 'justify-start' : 'justify-end'
              } flex `}
              key={idx}
            >
              <div
                className={`${
                  (idx + 1) % 2 !== 0 ? 'bg-gray-400' : 'bg-gray-200'
                } px-2 py-1 rounded-lg text-[10px] max-w-[200px] text-black block whitespace-pre-line`}
              >
                {e}
              </div>
            </div>
          ))}
        </div>
      </div>

      <input
        type="text"
        className="w-full h-10 text-black text-[14px] absolute bottom-0 placeholder:text-[12px] border-t border-other2 focus:outline-none px-3"
        placeholder="chat..."
        value={val}
        onKeyUp={handleKeyUp}
        onChange={handleKeyUp}
      />
      <div className="absolute h-7 w-full border top-0 flex justif-center items-center">
        <p className="text-other2 text-[10px] text-center mx-auto">
          Simple_soul Bot
        </p>
      </div>
    </div>
  );
}

export default ChatBox;
