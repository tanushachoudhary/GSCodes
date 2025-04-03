import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { API } from "../service/api";

const EditProblem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    questionTitle: "",
    questionDesc: "",
    questionDifficulty: "",
    tags: [],
    testCases: [{ ipData: "", opData: "" }], // Match API structure
  });

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await API.getThisProblem({ id });
        console.log("Raw API response:", response); // Debug log
        
        if (response?.data) {
          const apiData = response.data;
          console.log("API Data:", apiData); // Debug log
          
          // Transform the API data to match our form state structure
          setFormData({
            questionTitle: apiData.questionTitle || "", // Handle both cases
            questionDesc: apiData.questionDesc || "",
            questionDifficulty: apiData.questionDifficulty || "",
            tags: apiData.tags || [],
            testCases: apiData.testCases?.map(tc => ({
              ipData: tc.ipData || "",  // Keep original API field names
              opData: tc.opData || ""   // Keep original API field names
            })) || [{ ipData: "", opData: "" }] // Default empty test case
          });
          
          console.log("FormData after set:", {
            questionTitle: apiData.questionTitle || apiData.functionTitle || "",
            questionDesc: apiData.questionDesc || "",
            questionDifficulty: apiData.questionDifficulty || "",
            tags: apiData.tags || [],
            testCases: apiData.testCases?.map(tc => ({
              ipData: tc.ipData || "",
              opData: tc.opData || ""
            })) || [{ ipData: "", opData: "" }]
          }); // Debug log
        }
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
      testCases: [...formData.testCases, { ipData: "", opData: "" }],
    });
  };

  const removeTestCase = (index) => {
    setFormData({
      ...formData,
      testCases: formData.testCases.filter((_, i) => i !== index),
    });
  };

  
  const updateProblem = async (e) =>{
    e.preventDefault();
    try{
      const dataToSend = {
        questionTitle: formData.questionTitle,
        questionDesc: formData.questionDesc,
        questionDifficulty: formData.questionDifficulty,
        tags: formData.tags,
        testCases: formData.testCases.map(tc => ({
          ipData: tc.ipData,
          opData: tc.opData
        }))
      };
      console.log("handleSubmit has started working");
      console.log(dataToSend);
      
      const response = await API.updateThisProblem({id, dataToSend});
      console.log(response);
      
      navigate(`/problem/${id}`); 
    }catch(err){
      console.log(err,"Some error has occured");
      
    }
  }

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      <Header />
      <div className="max-w-3xl mx-auto w-full md:w-3/4 lg:w-2/5 p-6 bg-gray-400 shadow-md rounded-md mt-32 mb-20">
        <h1 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900">
          Edit Problem
        </h1>

        <form className="space-y-3">
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
            <label className="block font-medium">Test Cases</label>
            {formData.testCases.map((testCase, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:space-x-2 items-center mb-2"
              >
                <input
                  name="ipData"
                  value={testCase.ipData}
                  onChange={(e) =>
                    handleTestCaseChange(index, "ipData", e.target.value)
                  }
                  className="p-2 rounded w-full md:w-1/2 bg-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Input"
                />
                <input
                  name="opData"
                  value={testCase.opData}
                  onChange={(e) =>
                    handleTestCaseChange(index, "opData", e.target.value)
                  }
                  className="p-2 rounded w-full md:w-1/2 bg-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Expected Output"
                />
                <button
                  type="button"
                  className="p-2 bg-red-500 text-white rounded w-full md:w-auto hover:scale-110  transition-all duration-300 ease-in-out transform cursor-pointer"
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
            onClick={updateProblem}
            className="w-full p-3 mt-5 bg-blue-600 text-white rounded hover:bg-blue-800 text-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-102"
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
