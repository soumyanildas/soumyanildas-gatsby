import { ValidationError, useForm } from '@formspree/react';
import React from 'react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mqkvkgkk');

  const handleFormSubmit = (e: any) => {

    e.preventDefault();

    const form = e.target;
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    handleSubmit({
      name,
      email,
      message
    }).then((response) => {
      if (response.response?.ok) {
        form.reset();
      }
    })
  };

  return (
    <div id="contact-us" className="container mx-auto px-4 pt-20 pb-48 xl:pt-28 xl:px-0">
      <div className="text-center mb-10">
        <h3 className="text-3xl tracking-tight font-bold mb-4">Get In Touch</h3>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col  mx-auto lg:w-[50rem]">
          {state.succeeded ? <div className="mb-4 font-light tracking-tight text-center">Your email has been sent successfully!</div> : null}
          <div className="w-full lg:flex">
            <div className="mb-2 lg:w-1/2 lg:mr-4">
              <label className="text-slate-400 tracking-tight" htmlFor="name">Name</label>
              <input type="text" required className="w-full outline-none border border-gray-200 h-12 p-4 rounded mt-2 text-lg" name="name" aria-label="name"/>
              <ValidationError className="mt-1 text-sm font-light text-rose-600" field="name" prefix="Name" errors={state.errors} />
            </div>
            <div className="mb-2 lg:w-1/2">
              <label className="text-slate-400 tracking-tight" htmlFor="email">Email</label>
              <input type="email" required className="w-full outline-none border border-gray-200 h-12 p-4 rounded mt-2 text-lg" name="email" aria-label="email"/>
              <ValidationError className="mt-1 text-sm font-light text-rose-600" field="email" prefix="Email" errors={state.errors} />
            </div>
          </div>
          <div className="lg:w-full lg:mt-5">
            <label className="text-slate-400 tracking-tight" htmlFor="message">Message</label>
            <textarea required className="w-full outline-none border border-gray-200 h-60 p-4 rounded mt-2 text-lg" name="message" aria-label="message"/>
            <ValidationError className="mt-1 text-sm font-light text-rose-600" field="message" prefix="Message" errors={state.errors} />
          </div>
          <button disabled={state.submitting} type="submit" className="w-1/2 mx-auto mt-10 rounded-full border-2 border-alizarin py-3 px-16 text-alizarin transition-colors duration-300 ease-in-out lg:w-1/4 hover:bg-alizarin hover:text-white">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;