import { createContext, useEffect, useState } from 'react';
import moneyData from '../moneyData.json';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const savedMonth = JSON.parse(localStorage.getItem('month')) || [];
  const [selectedMonth, setSelectedMonth] = useState(savedMonth);
  const [activeIndex, setActiveIndex] = useState(
    savedMonth.length === 0 ? null : savedMonth
  );
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(moneyData);
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        savedMonth,
        selectedMonth,
        setSelectedMonth,
        activeIndex,
        setActiveIndex,
        filteredData,
        setFilteredData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
