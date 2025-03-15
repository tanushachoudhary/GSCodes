import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const EditProblem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    difficulty: "",
    tags: "",
    constraints: "",
    testCases: [],
  });

  useEffect(() => {
    // Fetch existing problem details
    const fetchProblem = async () => {
      try {
        const response = await fetch(`/api/problems/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching problem details:", error);
      }
    };
    fetchProblem();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTestCaseChange = (index, field, value) => {
    const updatedTestCases = [...formData.testCases];
    updatedTestCases[index][field] = value;
    setFormData({ ...formData, testCases: updatedTestCases });
  };

  const addTestCase = () => {
    setFormData({
      ...formData,
      testCases: [...formData.testCases, { input: "", output: "" }],
    });
  };

  const removeTestCase = (index) => {
    setFormData({
      ...formData,
      testCases: formData.testCases.filter((_, i) => i !== index),
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     await fetch(`/api/problems/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     toast.success("Problem updated successfully!");
  //     navigate("/problems");
  //   } catch (error) {
  //     console.error("Error updating problem:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      <Header />
      <div className="max-w-3xl mx-auto w-full md:w-3/4 lg:w-2/5 p-6 bg-gray-400 shadow-md rounded-md mt-32 mb-20">
        <h1 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900">
          Edit Problem
        </h1>

        <form className="space-y-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white focus:ring-2 focus:ring-blue-500"
            placeholder="Enter problem title"
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the problem..."
            required
          />

          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white focus:ring-2 focus:ring-blue-500"
            placeholder="Tags (comma-separated)"
          />

          <textarea
            name="constraints"
            value={formData.constraints}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white focus:ring-2 focus:ring-blue-500"
            placeholder="Constraints (e.g., 1 ≤ n ≤ 10^5)"
          />

          <div>
            <label className="block font-medium">Test Cases</label>
            {formData.testCases.map((testCase, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:space-x-2 items-center mb-2"
              >
                <input
                  value={testCase.input}
                  onChange={(e) =>
                    handleTestCaseChange(index, "input", e.target.value)
                  }
                  className="p-2 rounded w-full md:w-1/2 bg-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Input"
                />
                <input
                  value={testCase.output}
                  onChange={(e) =>
                    handleTestCaseChange(index, "output", e.target.value)
                  }
                  className="p-2 rounded w-full md:w-1/2 bg-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Expected Output"
                />
                <button
                  type="button"
                  className="p-2 bg-red-500 text-white rounded w-full md:w-auto hover:scale-110"
                  onClick={() => removeTestCase(index)}
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              className="w-full md:w-auto p-2 bg-amber-400 text-black rounded mt-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
              onClick={addTestCase}
            >
              ➕ Add Test Case
            </button>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-800 text-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Problem"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditProblem;
