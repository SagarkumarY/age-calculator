

import { createContext, useState } from "react";

const AgeContext = createContext();

export const AgeProvider = ({ children }) => {
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });
  // Function to calculate age based on day, month, and year
  const calculateAge = (birthDay, birthMonth, birthYear) => {
    const currentDate = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate(); // Get the last day of the previous month
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <AgeContext.Provider value={{ age, calculateAge }}>
      {children}
    </AgeContext.Provider>
  );
};

export default AgeContext;

// children props types here

