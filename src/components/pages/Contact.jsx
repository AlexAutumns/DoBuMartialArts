import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false); 
  };

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-4 p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-500">Get In Touch</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-4 w-[80%]"
      >
        <div className="flex justify-evenly items-start w-full">
          <div className="w-[35%]">
            {/* Name Input */}
            <InputField
              id="name"
              label="Name*"
              type="text"
              value={name}
              onChange={setName}
              required
            />

            {/* Email Input */}
            <InputField
              id="email"
              label="Email*"
              type="email"
              value={email}
              onChange={setEmail}
              required
            />

            {/* Phone Input (optional) */}
            <InputField
              id="phone"
              label="Phone"
              type="tel"
              value={phone}
              onChange={setPhone}
            />
          </div>

          {/* Message Textarea */}
          <div className="mb-4 w-[40%] h-full">
            <label className="block mb-1 text-white" htmlFor="message">
              Message*
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-green-500 rounded-xl w-full h-full p-2 text-white bg-gray-700 shadow-sm shadow-yellow-200"
              required
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 lg:text-xl text-lg sm:text-md md:text-lg transition-all duration-300 text-white px-4 py-2 rounded-xl hover:scale-[1.05]"
        >
          Send
        </button>
      </form>

      {/* Modal for feedback */}
      {modalVisible && (
        <Modal onClose={closeModal}>
          <h2 className="text-xl font-bold mb-2 text-white">Not Implemented</h2>
          <p className="text-white">This feature is not yet available.</p>
        </Modal>
      )}
    </div>
  );
};


const InputField = ({ id, label, type, value, onChange, required }) => (
  <div className="mb-4">
    <label className="block mb-1 text-white" htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-green-500 rounded-xl w-full p-2 text-white bg-gray-700 shadow-sm shadow-yellow-200"
      required={required}
    />
  </div>
);


const Modal = ({ onClose, children }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
    <div className="bg-gray-800 p-6 rounded shadow-md w-80">
      {children}
      <button
        onClick={onClose}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Close
      </button>
    </div>
  </div>
);

export default Contact;
