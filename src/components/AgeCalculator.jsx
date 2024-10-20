import { useContext, useState } from "react";
import AgeContext from "../context/AgeContext";
import { Loader } from "lucide-react";
function AgeCalculator() {
  // Local state for day, month, and year inputs
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  // Get age and calculateAge function from context
  const { age, calculateAge } = useContext(AgeContext);
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });

  const validateInputs = () => {
    let valid = true;
    const newErrors = { day: "", month: "", year: "" };

    // Check year (it should not be in the future and should not be too far in the past)
    const currentYear = new Date().getFullYear();
    if (!year || year > currentYear || year < 1900) {
      newErrors.year = "Please enter a valid year.";
      valid = false;
    }

    // Check month (it should be between 1 and 12)
    if (!month || month < 1 || month > 12) {
      newErrors.month = "Please enter a valid month (1-12).";
      valid = false;
    }

    // Check day (ensure it fits the month)
    const maxDays = new Date(year, month, 0).getDate(); // Get the max days in the given month/year
    if (!day || day < 1 || day > maxDays) {
      newErrors.day = `Please enter a valid day (1-${maxDays}) for the selected month.`;
      valid = false;
    }

    setErrors(newErrors); // Update the error messages
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return; // If validation fails, don't proceed
    }

    setLoading(true); // Start loading

    setTimeout(() => {
      calculateAge(day, month, year); // Call the context function to calculate age
      setLoading(false); // Stop loading after the calculation is done
    }, 2000); // Simulate a delay
  };

  return (
    <div
      style={{ height: "calc(100vh - 64px)" }}
      className="w-full  bg-gray-800 text-white flex flex-col items-center justify-center p-6"
    >
      <h1 className="text-4xl font-bold mb-8">Age Calculator</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-700 p-8 rounded-lg shadow-lg"
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-3">
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-1/3 px-4 py-3 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Day"
              min="1"
              max="31"
              required
            />
            {errors.day && (
              <p className="text-red-500 text-sm mt-1">{errors.day}</p>
            )}
            <input
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-1/3 px-4 py-3 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Month"
              min="1"
              max="12"
              required
            />
            {errors.month && (
              <p className="text-red-500 text-sm mt-1">{errors.month}</p>
            )}
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-1/3 px-4 py-3 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Year"
              min="1900"
              required
            />

            {errors.year && (
              <p className="text-red-500 text-sm mt-1">{errors.year}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 text-white font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? (
              // <div className="loader border-t-transparent border-solid border-white rounded-full border-4 h-6 w-6 animate-spin"></div>
              <Loader className=" animate-spin w-5 h-5" />
            ) : (
              "Calculate Age"
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <p className="text-lg">Your age will be displayed below:</p>
        <div className=" flex items-center   justify-center gap-9 my-4">
          <div className="flex flex-col  gap-2">
            <span>Age</span>
            <span className=" p-2 bg-purple-800 text-white px-2  min-w-10 h-10 shadow-md font-bold rounded">
              {age.years}
            </span>
          </div>

          <div className="flex flex-col  gap-2">
            <span>Month</span>
            <span className=" p-2 bg-purple-800 text-white px-2  min-w-10 h-10 shadow-md font-bold rounded">
              {age.months}
            </span>
          </div>

          <div className="flex flex-col  gap-2">
            <span>Days</span>
            <span className=" p-2 bg-purple-800 text-white px-2  min-w-10 h-10 shadow-md font-bold rounded">
              {age.days}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
