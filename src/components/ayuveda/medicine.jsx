import React from "react";
import Card from "./card";
import Neem from "../../assets/neem.jpg";
import Tulsi from "../../assets/tulsi.jpg";
import Amla from "../../assets/amla.jpg";

const Medicine = () => {
  return (
    <div className="py-12 px-8">
      <h1 className="text-center text-3xl font-bold text-green-700 mb-8">Ayurvedic Herbal Medicines</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        <Card
          image={Neem}
          title="Neem"
          main={
            <div>
              
              <p className="text-gray-700 text-sm mt-1">
                Known for its powerful antibacterial and antifungal properties, Neem helps purify blood, boost immunity, and improve skin health.
              </p>
            </div>
          }
        />
        <Card
          image={Tulsi}
          title="Tulsi"
          main={
            <div>
            
              <p className="text-gray-700 text-sm mt-1">
                A natural adaptogen, Tulsi helps relieve stress, supports respiratory health, and strengthens the body's defense system.
              </p>
            </div>
          }
        />
        <Card
          image={Amla}
          title="Amla"
          main={
            <div>
             
              <p className="text-gray-700 text-sm mt-1">
              Amla, also known as Indian gooseberry, is a powerhouse of vitamin C and antioxidants, boosting immunity and promoting radiant skin. It also aids digestion, supports heart health, and enhances hair growth, making it a staple in Ayurvedic wellness.

              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Medicine;