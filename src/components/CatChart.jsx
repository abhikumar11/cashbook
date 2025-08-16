import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement,Tooltip,Legend);
const CatChart = () => {
  const cashbook = useSelector((state) => state.cashbook.expenseList);
    const categoryTotals = cashbook.reduce((acc, item) => {
    const category = item.category || "Others";
    const amount = Number(item.amount) || 0;
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});
    const labels = Object.keys(categoryTotals);
    const dataValues = Object.values(categoryTotals);

    const colors = [
    "#FF6384", "#36A2EB", "#FFCE56",
    "#4CAF50", "#FF9800", "#9C27B0", "#00BCD4",
    "#8BC34A", "#FFC107", "#E91E63"
  ];
  const data={
    labels,
    datasets:[
      {
        label:"Amount",
        data: dataValues,
        backgroundColor: colors.slice(0, labels.length),
        borderWidth: 1
      }
    ]
  }
  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h2 className="text-center font-bold mb-4">Category Wise Transactions</h2>
      {labels.length > 0
        ? <Pie data={data} />
        : <p className="text-center text-gray-500">No data available</p>}
    </div>
  )
}

export default CatChart