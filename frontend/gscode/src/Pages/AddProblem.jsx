import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const AddProblem = () => {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "testCases",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log("Submitting problem:", data);
      toast.success("Problem submitted successfully!");
      navigate("/problems");
    } catch (error) {
      console.error("Error submitting problem:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      <Header />
      <div className="max-w-3xl mx-auto w-full md:w-3/4 lg:w-2/5 p-6 bg-gray-400 shadow-md rounded-md mt-32 mb-20 ">
        <h1 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900 ">
          Post a New Problem
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-medium">Title</label>
            <input
              {...register("title", { required: true })}
              className="w-full p-2 mt-1 rounded bg-white  focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter problem title"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="w-full p-2 mt-1 rounded bg-white  focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Describe the problem..."
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="block font-medium">Difficulty</label>
            <select
              {...register("difficulty", { required: true })}
              className="w-full p-2 mt-1 rounded bg-white  focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <option value="">Select difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block font-medium">Tags (comma-separated)</label>
            <input
              {...register("tags")}
              className="w-full p-2 mt-1 rounded bg-white  focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="e.g., Array, Dynamic Programming"
            />
          </div>

          {/* Constraints */}
          <div>
            <label className="block font-medium">Constraints</label>
            <textarea
              {...register("constraints")}
              className="w-full p-2 rounded mt-1 bg-white  focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="e.g., 1 ≤ n ≤ 10^5"
            />
          </div>

          {/* Test Cases */}
          <div>
            <label className="block font-medium">Test Cases</label>
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:space-x-2 items-center mb-2  animate__delay-2.2s"
              >
                <input
                  {...register(`testCases.${index}.input`)}
                  className="p-2  rounded w-full md:w-1/2 bg-white mb-2 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Input"
                />
                <input
                  {...register(`testCases.${index}.output`)}
                  className="p-2 border rounded w-full md:w-1/2 bg-white mb-2 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Expected Output"
                />
                <button
                  type="button"
                  className="p-2 bg-red-500 text-white rounded cursor-pointer w-full md:w-auto transition-all duration-300 transform hover:scale-110"
                  onClick={() => remove(index)}
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              className="w-full md:w-auto p-2 bg-amber-400 text-black rounded mt-2 cursor-pointer transition-all duration-300 transform hover:scale-110"
              onClick={() => append({ input: "", output: "" })}
            >
              ➕ Add Test Case
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-800 text-xl cursor-pointer transition-all duration-300 transform hover:scale-102"
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
