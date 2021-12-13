import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Dropdown({ isOpen, closeModal }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen bg-black bg-opacity-10  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            {/* <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>  */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full p-6 pt-14 pb-20 mt-16  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl ">
                <Dialog.Title
                  as="h3"
                  className="text-lg mb-5  leading-6 text-gray-900"
                >
                  Features
                </Dialog.Title>
                <Dialog.Title
                  as="h3"
                  className="text-lg mb-5  leading-6 text-gray-900"
                >
                  How it works
                </Dialog.Title>
                <Dialog.Title
                  as="h3"
                  className="text-lg mb-5  leading-6 text-gray-900"
                >
                  Contact us
                </Dialog.Title>

                <div className="mt-8 flex gap-5">
                  <button
                    style={{ background: " #0c7268" }}
                    type="button"
                    className="inline-flex justify-center px-4 py-3 text-base font-medium text-white secondary-bg border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    <Link to="register">Create account</Link>
                  </button>
                  <button
                    style={{ border: "1.2px solid  #0c7268" }}
                    type="button"
                    className="inline-flex justify-center px-5 py-3 text-base font-medium text-black border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    <Link to="login">Sign up</Link>
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
