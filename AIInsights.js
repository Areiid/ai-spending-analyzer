function AIInsights({ expenses }) {
  const totalFood = expenses
    .filter(item => item.category === "Food")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="ai-insights">
      <h2>AI Financial Insights</h2>

      {totalFood > 300 ? (
        <p>⚠️ High food spending detected this month.</p>
      ) : (
        <p>✅ Food spending is within budget.</p>
      )}
    </div>
  );
}

export default AIInsights;
