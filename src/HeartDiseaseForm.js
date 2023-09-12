import React, { useState } from "react";

const HeartDiseaseForm = () => {
  const chestPainOptions = [
    { name: "Typical angina", value: "0" },
    { name: "Atypical angina", value: "1" },
    { name: "Non-anginal pain", value: "2" },
    { name: "Asymptomatic", value: "3" },
  ];

  const restecgOptions = [
    { name: "Nothing to note", value: "0" },
    { name: "ST-T Wave abnormality", value: "1" },
    {
      name: "Possible or definite left ventricular hypertrophy, Enlarged heart's main pumping",
      value: "2",
    },
  ];

  const slopeOptions = [
    {
      name: "Upsloping: better heart rate with exercise (uncommon)",
      value: "0",
    },
    { name: "Flatsloping: minimal change (typical healthy heart)", value: "1" },
    { name: "Downsloping: signs of unhealthy heart", value: "2" },
  ];

  const caOptions = [
    { name: "0", value: "0" },
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
  ];

  const thalOptions = [
    { name: "Normal (1-3)", value: "1" },
    {
      name: "Fixed Defect: Used to be defect but OK now (around 6)",
      value: "2",
    },
    {
      name: "Reversible Defect: No proper blood movement when exercising (thal is 7)",
      value: "3",
    },
  ];

  const [formData, setFormData] = useState({
    age: "",
    sex: "", // Default value is an empty string
    cp: "", // Default value is an empty string
    trestbps: "", // Default value is an empty string
    chol: "", // Default value is an empty string
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object in the required format
    const dataToSend = {
      features: [
        [
          formData.age,
          formData.sex,
          formData.cp,
          formData.trestbps,
          formData.chol,
          formData.fbs,
          formData.restecg,
          formData.thalach,
          formData.exang,
          formData.oldpeak,
          formData.slope,
          formData.ca,
          formData.thal,
        ],
      ],
    };

    try {
      // Make a POST request to your Flask API
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      const prediction= responseData.prediction[0];

      // Reset the form data to its initial state (empty values)
      setFormData({
        age: "",
        sex: "",
        cp: "",
        trestbps: "",
        chol: "",
        fbs: "",
        restecg: "",
        thalach: "",
        exang: "",
        oldpeak: "",
        slope: "",
        ca: "",
        thal: "",
      });

        // Display a message based on the prediction result
    if (prediction === 0) {
      // Prediction is 0, indicating no heart disease
      alert("You are safe. No heart disease detected.");
    } else if (prediction === 1) {
      // Prediction is 1, indicating potential heart disease
      alert("You might need further assistance. Potential heart disease detected.");
    }

      // Handle the API response as needed
      // You can update the state or perform any other actions here
    } catch (error) {
      console.error("Error:", error);
      // Handle errors here, e.g., display an error message to the user
    }
  };

  const cholMessage =
    "Serum cholesterol (chol) is typically measured in mg/dL. Values above 200 mg/dL are typically a cause for concern.";
  const fbsMessage =
    "Fasting blood sugar (fbs) is typically measured in mg/dL. A value above 126 mg/dL signals diabetes.";
  const oldpeakMessage =
    "ST Depression Induced by Exercise Relative to Rest (oldpeak) typically ranges from 0.0 to 4.0.";

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Sex:</label>
        <select name="sex" value={formData.sex} onChange={handleChange}>
          <option value="">Select your gender</option>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
      </div>
      <div>
        <label>Chest Pain Type:</label>
        <select name="cp" value={formData.cp} onChange={handleChange}>
          <option value="">Select chest pain type</option>
          {chestPainOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Resting Blood Pressure (trestbps in mm Hg):</label>
        <input
          type="number"
          name="trestbps"
          max="300"
          value={formData.trestbps}
          onChange={handleChange}
        />
        <small>above 130-140 is typically cause for concern</small>
      </div>
      <div>
        <label>Serum Cholesterol (chol in mg/dL):</label>
        <input
          type="number"
          name="chol"
          value={formData.chol}
          onChange={handleChange}
        />
        <small>above 200 is cause for concern,</small>
      </div>
      <div>
        <label>Fasting Blood Sugar (fbs in mg/dL):</label>
        <input
          type="number"
          name="fbs"
          value={formData.fbs}
          onChange={handleChange}
        />
        <small className="info-message">{fbsMessage}</small>
      </div>
      <div>
        <label>Resting Electrocardiographic Results:</label>
        <select name="restecg" value={formData.restecg} onChange={handleChange}>
          <option value="">Select resting ECG results</option>
          {restecgOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Maximum Heart Rate Achieved (thalach):</label>
        <input
          type="number"
          name="thalach"
          max="400"
          value={formData.thalach}
          onChange={handleChange}
        />
        <small>Can have maximum value of 400</small>
      </div>
      <div>
        <label>Exercise-Induced Pain (exang):</label>
        <select name="exang" value={formData.exang} onChange={handleChange}>
          <option value="">Select</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
      <div>
        <label>ST Depression Induced by Exercise (oldpeak):</label>
        <input
          type="number"
          name="oldpeak"
          min="0"
          max="4"
          step="0.1"
          value={formData.oldpeak}
          onChange={handleChange}
        />
        <small className="info-message">{oldpeakMessage}</small>
      </div>
      <div>
        <label>Slope of the Peak Exercise ST Segment:</label>
        <select name="slope" value={formData.slope} onChange={handleChange}>
          <option value="">Select slope</option>
          {slopeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Number of Major Vessels Colored by Fluoroscopy (ca):</label>
        <select name="ca" value={formData.ca} onChange={handleChange}>
          <option value="">Select ca</option>
          {caOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Thalium Stress Result (thal):</label>
        <select name="thal" value={formData.thal} onChange={handleChange}>
          <option value="">Select thal</option>
          {thalOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Predict</button>
    </form>
  );
};

export default HeartDiseaseForm;