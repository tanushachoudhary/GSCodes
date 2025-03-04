import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
      // API call to backend (replace with actual API)
      // await axios.post("/api/problems", data);
      alert("Problem submitted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error submitting problem:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Post a New Problem</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            {...register("title", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Enter problem title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Describe the problem..."
          />
        </div>

        {/* Difficulty */}
        <div>
          <label className="block font-medium">Difficulty</label>
          <select {...register("difficulty", { required: true })} className="w-full p-2 border rounded">
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
            className="w-full p-2 border rounded"
            placeholder="e.g., Array, Dynamic Programming"
          />
        </div>

        {/* Constraints */}
        <div>
          <label className="block font-medium">Constraints</label>
          <textarea
            {...register("constraints")}
            className="w-full p-2 border rounded"
            placeholder="e.g., 1 ≤ n ≤ 10^5"
          />
        </div>

        {/* Test Cases */}
        <div>
          <label className="block font-medium">Test Cases</label>
          {fields.map((item, index) => (
            <div key={item.id} className="flex space-x-2 items-center">
              <input
                {...register(`testCases.${index}.input`)}
                className="p-2 border rounded w-1/2"
                placeholder="Input"
              />
              <input
                {...register(`testCases.${index}.output`)}
                className="p-2 border rounded w-1/2"
                placeholder="Expected Output"
              />
              <button
                type="button"
                className="p-2 bg-red-500 text-white rounded"
                onClick={() => remove(index)}
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            className="p-2 bg-green-500 text-white rounded mt-2"
            onClick={() => append({ input: "", output: "" })}
          >
            ➕ Add Test Case
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-800"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Problem"}
        </button>
      </form>
    </div>
  );
};

export default AddProblem;
