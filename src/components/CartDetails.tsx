import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate, useNavigation, useParams } from "react-router-dom";

function CartDetails() {
  var { id } = useParams();
  const [item, setItem] = useState<any>();
  const [currentItem, setCurrentItem] = useState<any>();
  const [showModal, setShowModal] = React.useState(false);
  const [showEditModal, setEditShowModal] = React.useState(false);
  const navigate = useNavigate();
  debugger;
  useEffect(() => {
    getCurrentCart();
  }, []);
  const getBack = () => {
    navigate("/");
  };
  const getCurrentCart = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        debugger;
        setItem(res.data);
        setCurrentItem(res.data);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };
  const remove = () => {
    axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
        debugger
      navigate("/");
    })
    .catch((err) => {
      console.log(err);
    });
  };
  const update = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, currentItem)
      .then((res) => {
        setEditShowModal(false);
        getCurrentCart();
      })
      .catch((err) => {
        prompt("Error occured")
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-5 flex flex-row justify-between w-full">
        <div
          className="bg-slate-400 rounded-full justify-center items-center w-10 h-10 flex"
          onClick={getBack}
        >
          <MdArrowBackIosNew size={25} />
        </div>
        <button className="bg-blue-600 rounded-sm p-2 text-white">
          Create A Post
        </button>
      </div>
      <div className="w-100 shadow-lg h-56">
        <div className="container  p-5">
          <span className="font-medium">{item?.title}</span>
        </div>
        <div className="container  p-5">
          <span className="font-normal">{item?.body}</span>
        </div>
        <div className="p-5 flex flex-row justify-between w-full">
          <button
            className="bg-blue-600 rounded-lg p-2 text-white"
            onClick={() => setEditShowModal(true)}
          >
            Update
          </button>
          <button
            className="bg-red-400 rounded-lg p-2 text-white"
            onClick={() => setShowModal(true)}
          >
            Delete
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Delete Alert</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    No
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={remove}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showEditModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Alert</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Title"
                        value={currentItem.title}
                        onChange={(args: any) => {
                          setCurrentItem({
                            ...currentItem,
                            title: args.target.value,
                          });
                        }}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Body
                      </label>
                      <input
                        type="text"
                        id="body"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Body"
                        value={currentItem.body}
                        onChange={(args: any) => {
                          setCurrentItem({
                            ...currentItem,
                            body: args.target.value,
                          });
                        }}
                      />
                    </div>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setEditShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={update}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default CartDetails;
