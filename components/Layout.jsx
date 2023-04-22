import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import SideBar from './SideBar';
import Loader from './Loader';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { useGlobalContext } from '../context/context';
import ChatBox from './ChatBox';
import { FaTimes } from 'react-icons/fa';
import {FaCode} from 'react-icons/fa'

function Layout({ title, children }) {
  const { timer } = useGlobalContext();
  const { showNav } = useGlobalContext();
  const [showChat, setShowChat] = useState(false);
  const [flag, setFlag] = useState(true);

  return (
    <>
      <Head>
        <title>{title ? title : 'Simple_soul'}</title>
        <meta name="description" content="Simple_soul Portfolio" />
        <link rel="icon" href="codelogo.png" />
      </Head>
      <div className="hidden md:block text-white">
      {timer <= 100 ? (
        <Loader />
      ) : (
        <div className="relative flex p-8">
          <Header />
          <main
          data-aos="fade-up"
            className={`relative bg pt-10 px-8 h-[91vh] overflow-auto scroll-smooth w-[70%] transition-all ease-in-out duration-500`}
          >
            {children}
          </main>
          <SideBar />
          <div className="relative bg-red-500">
            <div
              className={`${
                showChat ? 'w-64' : 'w-0'
              } absolute right-10 bottom-0 h-80 overflow-auto transition-all ease-in-out duration-1000`}
            >
              <ChatBox
                showChat={showChat}
                setShowChat={setShowChat}
                flag={flag}
                setFlag={setFlag}
              />
            </div>
            {!showChat ? (
              <div className="transition-all absolute bottom-0 right-10 ease-in-out duration-1000 flex flex-col justify-end items-end">
                <BsFillChatDotsFill
                  className="text-[50px] z-40 cursor-pointer"
                  onClick={() => {
                    setShowChat(true);
                    setFlag(true);
                  }}
                />
                <p className="text-[10px] text-other2">Chat with me</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
      </div>
      
    </>
  );
}

export default Layout;
