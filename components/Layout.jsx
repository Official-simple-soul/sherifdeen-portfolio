import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import SideBar from './SideBar';
import Loader from './Loader';
import { BsFillChatDotsFill, BsThreeDotsVertical } from 'react-icons/bs';
import { useGlobalContext } from '../context/context';
import ChatBox from './ChatBox';
import SocialMedia from './SocialMedia';
import { GiHamburgerMenu } from 'react-icons/gi';

function Layout({ title, children }) {
  const { timer } = useGlobalContext();
  const [showChat, setShowChat] = useState(false);
  const [flag, setFlag] = useState(true);
  const { showNav, setShowNav } = useGlobalContext();
  const [showHeader, setShowHeader] = useState(false);
const {light} = useGlobalContext()

  return ( 
    <>
      <Head>
        <title>{title ? title : 'Simple_soul'}</title>
        <meta name="description" content="Simple_soul Portfolio" />
        <meta property="og:title" content="Simple_soul portfolio" />
        <meta
          property="og:image"
          content="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"
        />
        <meta
          property="og:url"
          content="https://sherifdeen-portfolio.vercel.app/"
        />
        <link rel="icon" href="codelogo.png" />
      </Head>
      <div className="hidden space-y-4 h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-xl">I say not to open on mobile.</h1>
        <h1>Una no dey hear word. Dah</h1>
      </div>
      <div className={`${light?'text-gray-700':'text-white'} overflow-hidden`}>
        {timer <= 100 ? (
          <Loader />
        ) : (
          <div className={`${light?'bg-[#DFDFE5]':'bg-secBG'} relative flex md:p-8`}>
            <Header showHeader={showHeader} setShowHeader={setShowHeader} />
            <main
              className={`relative ${light?'bgA':'bg'} pt-10 md:px-8 h-[100vh] md:h-[91vh] overflow-auto scroll-smooth w-full md:w-[70%] transition-all ease-in-out duration-500`}
            >
              {children}
            </main>
            <SideBar />
            <div className="relative bg-red-500">
              <div
                className={`${
                  showChat ? 'w-64' : 'w-0'
                } absolute right-2 md:right-10 bottom-0 h-80 overflow-auto transition-all ease-in-out duration-1000`}
              >
                <ChatBox
                  showChat={showChat}
                  setShowChat={setShowChat}
                  flag={flag}
                  setFlag={setFlag}
                />
              </div>
              {!showChat ? (
                <div className="transition-all absolute bottom-4 md:bottom-0 right-5 md:right-10 ease-in-out duration-1000 flex flex-col justify-end items-end">
                  <BsFillChatDotsFill
                    className="text-4xl md:text-[50px] z-40 cursor-pointer"
                    onClick={() => {
                      setShowChat(true);
                      setFlag(true);
                    }}
                  />
                  {/* <p className="text-[10px] text-other2">Chat me</p> */}
                </div>
              ) : (
                ''
              )}
            </div>
            <SocialMedia />
            <div
              className={`${light?'bg-[#E9E9EF] shadow-md':'bg-priBG'} z-20 md:hidden flex justify-between items-center absolute w-full h-10 px-2  transition-all ease-in-out duration-500`}
            >
              <BsThreeDotsVertical
                className={`${
                  showNav && 'hidden'
                } ${light?'text-gray-700':'text-other2'} text-2xl transition-all ease-in-out duration-500 cursor-pointer`}
                onClick={() => setShowHeader(!showHeader)}
              />
              <GiHamburgerMenu
                className={`${
                  showNav && 'hidden'
                } ${light?'text-gray-700':'text-other2'} text-2xl transition-all ease-in-out duration-500 cursor-pointer`}
                onClick={() => setShowNav(!showNav)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Layout;
