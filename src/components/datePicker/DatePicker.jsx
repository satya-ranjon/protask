import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Months from "./Months";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DatePicker = ({ getValue = () => {} }) => {
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  // Function to navigate to the next month
  const nextMonth = () => {
    const newMonth = currMonth === 11 ? 0 : currMonth + 1;
    updateMonthAndYear(newMonth);
  };

  // Function to navigate to the previous month
  const previousMonth = () => {
    const newMonth = currMonth === 0 ? 11 : currMonth - 1;
    updateMonthAndYear(newMonth);
  };

  // Function to update both month and year
  const updateMonthAndYear = (newMonth) => {
    if (newMonth === 0 && currMonth === 11) {
      setCurrYear(currYear + 1);
    } else if (newMonth === 11 && currMonth === 0) {
      setCurrYear(currYear - 1);
    }
    setCurrMonth(newMonth);
  };

  const selectedDate = (day) => {
    getValue({ year: currYear, month: currMonth + 1, date: day });
  };

  return (
    <>
      <div className="w-auto border-solid border-grey-light rounded border shadow-sm select-none ">
        <div className="bg-grey-lighter px-2 py-2 border-solid border-grey-light border-b text-center flex justify-between items-center">
          <div
            className="p-1  text-2xl cursor-pointer hover:bg-hover"
            onClick={previousMonth}>
            <GrFormPreviousLink />
          </div>
          <span className="text-lg font-semibold text-center">
            {months[currMonth]} {currYear}
          </span>
          <div
            className="p-1  text-2xl cursor-pointer hover:bg-hover"
            onClick={nextMonth}>
            <GrFormNextLink />
          </div>
        </div>
        <div className="">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4">S</th>
                <th className="py-3 px-4">M</th>
                <th className="py-3 px-4">T</th>
                <th className="py-3 px-4">W</th>
                <th className="py-3 px-4">T</th>
                <th className="py-3 px-4">F</th>
                <th className="py-3 px-4">S</th>
              </tr>
            </thead>
            <tbody>
              <Months
                month={currMonth}
                year={currYear}
                selectedDay={selectedDate}
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
