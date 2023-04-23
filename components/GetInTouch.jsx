import React, { useEffect, useRef, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import emailJs from '@emailjs/browser';
import { useGlobalContext } from '../context/context';

function GetInTouch() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
const {light} = useGlobalContext()

  const [val, setVal] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await emailJs
      .sendForm(
        'service_k98a6fk',
        'template_v9rl8bh',
        form.current,
        'l1SMwkup0_5uqyGfU'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          setVal({
            user_name: '',
            user_email: '',
            message: '',
          });
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setLoading(false);

          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      );
  };

 


  return (
    <div className="mt-6 mb-10">
      <h1 className="font-bold mb-6 text-center md:text-start">Get in touch</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        ref={form}
        className={`${light?'bg-white':'bg-cards'} p-5 space-y-6`}
      >
        <div className={`${light?'bg-[#F4F4F6]':'bg-cards'} flex w-full h-12`}>
          <FaUserAlt className={`${light?'bg-[#F4F4F6]':'bg-secBG'} px-4 h-[100%] text-other2 text-[45px]`} />
          <input
            type="name"
            name="user_name"
            placeholder="Name"
            value={val.user_name}
            onChange={handleChange}
            required
            className="focus:outline-none placeholder:text-other2 placeholder:text-[12px] px-2 w-full bg-transparent h-full text-other2 text-[14px]"
          />
        </div>
        <div className={`${light?'bg-[#F4F4F6]':'bg-cards'} flex w-full h-12`}>
          <MdOutlineAlternateEmail className={`${light?'bg-[#F4F4F6]':'bg-secBG'} px-4 h-[100%] text-other2 text-[45px]`} />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={val.user_email}
            onChange={handleChange}
            required
            className="focus:outline-none placeholder:text-other2 placeholder:text-[12px] px-2 w-full bg-transparent h-full text-other2 text-[14px]"
          />
        </div>
        <div className={`${light?'bg-[#F4F4F6]':'bg-cards'} flex w-full h-28`}>
          <div className={`${light?'bg-[#F4F4F6]':'bg-secBG'} h-[100%]`}>
            <GoMail className="px-4 text-other2 text-[45px]" />
          </div>
          <textarea
            name="message"
            id=""
            placeholder="Message"
            value={val.message}
            onChange={handleChange}
            required
            className="focus:outline-none placeholder:text-other2 placeholder:text-[12px] p-2 w-full bg-transparent h-full text-other2 text-[14px]"
          ></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className={`${
              loading && 'animate-pulse'
            } px-8 py-2 text-black text-[12px] bg-other1 hover:-translate-y-2 transition-all ease-in-out duration-500`}
          >
            {loading ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
          <p
            className={`${
              success ? 'text-green-500' : error ? 'text-red-500' : ''
            } text-[12px]`}
          >
            {success ? 'Message sent!' : error ? 'Message sending failed' : ''}
          </p>
        </div>
      </form>
    </div>
  );
}

export default GetInTouch;
