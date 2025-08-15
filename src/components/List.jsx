import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const cashbook = useSelector((state) => state.cashbook.expenseList);
  const cashin=cashbook.filter((item)=>item.type==="Cash In").reduce((sum,item)=>sum+Number(item.amount),0);
  const cashout=cashbook.filter((item)=>item.type==="Cash Out").reduce((sum,item)=>sum+Number(item.amount),0);

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">💰 Expense History</h1>

      {cashbook.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No expenses recorded yet.</p>
        
      ) : (
        <div className="overflow-x-auto">
          <p className="text-gray-500 text-center py-8">{cashin}.</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-green-50 to-red-50 border-b">
                <th className="p-4 text-gray-700 font-semibold">Date</th>
                <th className="p-4 text-gray-700 font-semibold">Amount</th>
                <th className="p-4 text-gray-700 font-semibold">Remarks</th>
                <th className="p-4 text-gray-700 font-semibold">Category</th>
                <th className="p-4 text-gray-700 font-semibold">Method</th>
                <th className="p-4 text-gray-700 font-semibold">Type</th>
              </tr>
            </thead>
            <tbody>
              {cashbook.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="p-4 text-gray-600">{item.date}</td>
                  <td
                    className={`p-4 font-bold ${
                      item.type === 'Cash In' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    ₹{item.amount}
                  </td>
                  <td className="p-4 text-gray-600">{item.remarks}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
                      {item.method}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full font-semibold ${
                        item.type === 'Cash In'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {item.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default List;
