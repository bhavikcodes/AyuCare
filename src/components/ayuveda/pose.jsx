import React, { useState } from "react";
import shava from "../../assets/shava.jpg";
import shukha from "../../assets/sukha.jpg";
import tree from "../../assets/tree.jpg"
import child from "../../assets/child.jpg"
import camel from "../../assets/camel.jpg"
import bridge from "../../assets/bridge.jpg"
import legup from "../../assets/legup.jpg"
import handfoot from "../../assets/handfoot.jpg"
import triangle from "../../assets/triangle.jpg"
import plow from "../../assets/plow.jpg"
import forward from "../../assets/forward.jpg"
import wind from "../../assets/wind.jpg"
import ardha from "../../assets/ardha.jpg"
const yogaSuggestions = {
  "stress": [
    { name: "Shavasana (Corpse Pose)", image: shava },
    { name: "Balasana (Child's Pose)", image: child }
  ],
  "depression": [
    { name: "Vrikshasana (Tree Pose)", image: tree },
    { name: "Ustrasana (Camel Pose)", image: camel }
  ],
  "anxiety": [
    { name: "Sukhasana (Easy Pose)", image: shukha },
    { name: "Setu Bandhasana (Bridge Pose)", image: bridge }
  ],
  "lack of sleep": [
    { name: "Viparita Karani (Legs-up-the-wall Pose)", image: legup },
    { name: "Shavasana (Corpse Pose)", image: shava }
  ],
  "insomnia": [
    { name: "Paschimottanasana (Seated Forward Bend)", image: forward },
    { name: "Halasana (Plow Pose)", image: plow }
  ],
  "digestion": [
    { name: "Pavanamuktasana (Wind Relieving Pose)", image: wind },
    { name: "Ardha Matsyendrasana (Half Lord of the Fishes Pose)", image: ardha }
  ],
  "lack of flexibility": [
    { name: "Padahastasana (Hand to Foot Pose)", image: handfoot },
    { name: "Trikonasana (Triangle Pose)", image: triangle }
  ]
};

export default function YogaHealthcareApp() {
  const [problem, setProblem] = useState("");
  const [solutions, setSolutions] = useState([]);
  const [themeChanged, setThemeChanged] = useState(false);

  const handleSearch = () => {
    const result = yogaSuggestions[problem] || [];
    setSolutions(result);
    setThemeChanged(true);
  };

  return (
    <div className={`flex flex-col items-center justify-center p-6 min-h-screen transition-colors duration-500 font-serif ${
      themeChanged ? 'bg-[#e6f2d8] text-[#3e3e1f]' : 'bg-[#fffdf4] text-[#3e3e1f]'
    }`}
      style={{
        backgroundImage: themeChanged ? 'url(/images/ayurveda-bg.png)' : 'none',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center text-green-900">Ayurvedic Yoga </h1>
      <h1 className="text-4xl font-bold mb-6 text-center text-green-900">Aasan Recommendation </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
        <select
          className="flex-1 border border-green-600 rounded-xl p-3 bg-white text-green-900"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        >
          <option value="">Select a problem</option>
          {Object.keys(yogaSuggestions).map((key) => (
            <option key={key} value={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</option>
          ))}
        </select>
        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-xl" onClick={handleSearch}>
          Suggest Aasans
        </button>
      </div>

      {solutions.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto justify-center">
          {solutions.map((pose, index) => (
            <div key={index} className="bg-[#fafbe6] shadow-xl rounded-2xl border border-green-200 p-4 flex flex-col items-center justify-center text-center">
              <img src={pose.image} alt={pose.name} className="w-48 h-48 object-cover rounded-lg mb-4 border border-green-300" />
              <h2 className="text-xl font-semibold text-green-800">{pose.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-green-600">Select a problem to see yoga recommendations.</p>
      )}
    </div>
  );
}