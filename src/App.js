import Header from "./component/header/header";
import ResultTable from "./component/resultsTable/resultTable";
import Input from "./component/useInput/input";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };


  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  console.log(userInput)
  
  return (
    <div>
      <Header />

      <Input onCalculate={calculateHandler} />

      {!userInput && <p>No Investment Calculated yet....</p>}

      {userInput && (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput['current-savings']}
        
        />
      )}
    </div>
  )
}

export default App;
