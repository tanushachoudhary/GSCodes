import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
// <<<<<<< HEAD
// import {API} from "../service/api.js";
// import { js } from '@eslint/js';
// =======
import { API } from "../service/api";
import { DataContext } from "../context/DataProvider";

const AddProblem = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    questionTitle: "",
    questionDesc: "",
    questionDifficulty: "",
    tags: [],
    testCases: [{
      ipData:"",
      opData:"",
    }],
    createdBy: "",
  });
  const {account} = useContext(DataContext);

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
      testCases: [...formData.testCases, { ipData: "", opData: "" }],
    });
  };

  const removeTestCase = (index) => {
    setFormData({
      ...formData,
      testCases: formData.testCases.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Submitting problem:", formData);
      const response = await API.addNewProblem(formData);
      console.log(response);
      toast.success("Problem submitted successfully!");
      navigate("/problems");
    } catch (error) {
      console.error("Error submitting problem:", error);
    } finally {
      setLoading(false);
    }
  };

  const onClickAdd = async (e) => {
      e.preventDefault();
      try {
        let response = await API.adminAddQuestion(formData);
  
        if (response?.status === 200 || response?.status === 201) {
          console.log("Question added successfully", response);
          navigate("/problems");
        } else {
          console.log("Failed to add question");
        }
      } catch (err) {
        console.log("Error: ", err);
      }
    }

    useEffect(()=>{
      setFormData((prevFormData)=>({
        ...prevFormData,
        createdBy: account._id
      }))
    },[account._id])

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      <Header />
      <div className="max-w-3xl mx-auto w-full md:w-3/4 lg:w-2/5 p-6 bg-gray-400 shadow-md rounded-md mt-32 mb-20">
        <h1 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900">
          Post a New Problem
        </h1>

        <form onSubmit={onClickAdd} className="space-y-3">
          <label className="block font-medium text-lg">Title</label>
          <input
            name="questionTitle"
            value={formData.questionTitle}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white focus:ring-2 focus:ring-blue-500"
            placeholder="Enter problem title"
            required
          />
          <label className="block font-medium text-lg">Description</label>
          <textarea
            name="questionDesc"
            value={formData.questionDesc}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the problem..."
            required
          />
          <label className="block font-medium text-lg">Difficulty</label>
          <select
            name="questionDifficulty"
            value={formData.questionDifficulty}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <label className="block font-medium text-lg">
            Tags (comma-separated)
          </label>
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white focus:ring-2 focus:ring-blue-500"
            placeholder="Tags (comma-separated)"
          />
         
          <div>
            <label className="block font-medium text-lg">Test Cases</label>
            {formData.testCases.map((testCase, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:space-x-2 items-center mb-2"
              >
                <input
                  value={testCase.ipData}
                  onChange={(e) =>
                    handleTestCaseChange(index, "ipData", e.target.value)
                  }
                  className="p-2 rounded w-full md:w-1/2 bg-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Input"
                />
                <input
                  value={testCase.opData}
                  onChange={(e) =>
                    handleTestCaseChange(index, "opData", e.target.value)
                  }
                  className="p-2 rounded w-full md:w-1/2 bg-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Expected Output"
                />
                <button
                  type="button"
                  className="p-2 bg-red-500 text-white rounded w-full md:w-auto hover:scale-110  cursor-pointer transition-all duration-300 ease-in-out transform"
                  onClick={() => removeTestCase(index)}
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              className="w-full md:w-auto p-2 bg-amber-400 text-black rounded mt-2 hover:scale-110 transition-all duration-300 ease-in-out transform cursor-pointer "
              onClick={addTestCase}
            >
              ➕ Add Test Case
            </button>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-800 text-xl hover:scale-102  cursor-pointer transition-all duration-300 ease-in-out transform mt-5"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Problem"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddProblem;
