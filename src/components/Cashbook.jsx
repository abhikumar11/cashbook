import React, { useState } from "react";
import { addItem } from "../utils/reducer";
import { useDispatch } from "react-redux";
const Cashbook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("Cash In");

  const [frmData,setFrmData]=useState({});
  const dispatch=useDispatch();

  const handleInput=(e)=>{
    const {name,value}=e.target;
      setFrmData({...frmData,[name]:value});
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(addItem({...frmData,type}));

  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-8">Cashbook</h1>

        {/* Open Modal Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow"
        >
          Add Transaction
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-100">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center text-indigo-600 mb-6">
              Add {type} Transaction
            </h2>

            {/* Toggle */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setType("Cash In")}
                className={`px-4 py-2 rounded-lg font-medium shadow transition ${
                  type === "Cash In"
                    ? "bg-green-500 text-white"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                Cash In
              </button>
              <button
                onClick={() => setType("Cash Out")}
                className={`px-4 py-2 rounded-lg font-medium shadow transition ${
                  type === "Cash Out"
                    ? "bg-red-500 text-white"
                    : "bg-red-100 text-red-700 hover:bg-red-200"
                }`}
              >
                Cash Out
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={handleInput}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  onChange={handleInput}
                  placeholder="Enter amount"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Remarks */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Remarks
                </label>
                <input
                  type="text"
                  name="remarks"
                  onChange={handleInput}
                  placeholder="Write a short note"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Category + Payment */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Category
                  </label>
                  <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" name="category" onChange={handleInput}>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Transport">Transport</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" name="method" onChange={handleInput}>
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="Card">Card</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg shadow"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg shadow"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cashbook;
