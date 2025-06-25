import React from 'react';
import Card from './card';
import sukha from "../../assets/sukha.jpg";
import tada from "../../assets/tada.jpg";
import vira from "../../assets/virabha.jpg";
import bhuja from "../../assets/bhuja.jpg";
import dhanu from "../../assets/dhanu.jpg";
import shava from "../../assets/shava.jpg";

const Detailcard = () => {
  return (
    <div className="py-12 px-8">
      <h1 className="text-center text-3xl font-bold text-green-700 mb-8">Yoga Asanas for Wellness</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        <Card
          image={tada}
          title="Tadasana"
          main={
            <div>
              <span className="block text-sm text-gray-600">(Mountain Pose)</span>
              <p className="text-gray-700 text-sm mt-1">Improves posture, enhances flexibility, and strengthens legs and back. It also helps in achieving mental clarity and balance.</p>
            </div>
          }
        />
        <Card
          image={sukha}
          title="Sukhasana"
          main={
            <div>
              <span className="block text-sm text-gray-600">(Easy Pose)</span>
              <p className="text-gray-700 text-sm mt-1">Promotes relaxation, strengthens back muscles, improves concentration, and cultivates inner peace.</p>
            </div>
          }
        />
        <Card
          image={vira}
          title="Virabhadrasana"
          main={
            <div>
              <span className="block text-sm text-gray-600">(Warrior Pose)</span>
              <p className="text-gray-700 text-sm mt-1">Boosts endurance, strengthens arms and legs, enhances lung capacity, and improves overall balance and focus.</p>
            </div>
          }
        />
        <Card
          image={bhuja}
          title="Bhujangasana"
          main={
            <div>
              <span className="block text-sm text-gray-600">(Cobra Pose)</span>
              <p className="text-gray-700 text-sm mt-1">Enhances spinal flexibility, relieves lower back pain, and opens the chest for better breathing and posture.</p>
            </div>
          }
        />
        <Card
          image={dhanu}
          title="Dhanurasana"
          main={
            <div>
              <span className="block text-sm text-gray-600">(Bow Pose)</span>
              <p className="text-gray-700 text-sm mt-1">Stimulates digestion, strengthens the core, stretches the entire body, and helps in reducing stress and anxiety.</p>
            </div>
          }
        />
        <Card
          image={shava}
          title="Shavasana"
          main={
            <div>
              <span className="block text-sm text-gray-600">(Corpse Pose)</span>
              <p className="text-gray-700 text-sm mt-1">Encourages deep relaxation, relieves stress, lowers blood pressure, and brings a profound sense of calmness and inner awareness.</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Detailcard;