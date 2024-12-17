import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";
const ModalCreateUser = () => {
  // Quản lý trạng thái mở/đóng modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [email, setEmail] = useState("");
  const [password, setPPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("User");
  const [image, setImage] = useState("");
  const [previewimage, setPreviewimage] = useState("");
  const handleUploadImage = (event) => {
    setPreviewimage(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0])
  };
  return (
    <div>
      <button
        className="rounded bg-blue-400 text-white px-4 py-2 hover:bg-blue-500"
        onClick={toggleModal}
      >
        Add new User
      </button>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center">
          <div className="bg-white rounded shadow-lg p-6 w-1/3 absolute top-0 transform transition-transform duration-500 ease-out translate-y-[-100%] animate-slideDown">
            <h2 className="text-lg font-bold mb-4">Add New User</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPPassword(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Role</label>
                <select
                  className="w-full  px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(even) => setRole(event.target.value)}
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              {/* Custom file image*/}
              <div className="mb-4">
                <label
                  htmlFor="upload"
                  className="flex  text-gray-700 hover:bg-slate-300 gap-2 cursor-pointer w-fit p-1 rounded bg-slate-200"
                >
                  {" "}
                  <FcPlus className="flex items-center mt-1 justify-center " />{" "}
                  Upload File Image
                </label>
                <input
                  type="file"
                  hidden
                  id="upload"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(event) => handleUploadImage(event)}
                />
              </div>

              <div className=" flex text-gray-400 h-[150px] border-2 border-dashed border-black-500 justify-center items-center  ">
                {previewimage ? (
                  <img
                    className="max-w-full max-h-full"
                    src={previewimage}
                    alt=""
                  />
                ) : (
                  <span className="">Preview Image </span>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Thêm TailwindCSS vào project */}
      <style>
        {`
                    @layer utilities {
                        @keyframes slideDown {
                            0% {
                                transform: translateY(-100%);
                            }
                            100% {
                                transform: translateY(0);
                            }
                        }

                        .animate-slideDown {
                            animation: slideDown 0.5s ease-out forwards;
                        }
                    }
                `}
      </style>
    </div>
  );
};

export default ModalCreateUser;
