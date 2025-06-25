import React from "react";
import ProjectCard from "./projectcard";
import shilajit from "../../assets/shilajit.jpg";
import sanjeevni from "../../assets/sanjeevni.jpg";
import ashwagandha from "../../assets/ashwangandha.jpg";
import turmeric from "../../assets/turmaric.webp";
import gok from "../../assets/gok.webp";
import bph from "../../assets/bph.jpg";
import karela from "../../assets/karela juice.jpg";
import liver from "../../assets/liver care.jpg";
import livital from "../../assets/livital.webp";
import b12 from "../../assets/b12.webp";
import champ from "../../assets/chyawanprash.webp";
import kidneycare from "../../assets/kidney care.webp";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white text-center">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Supplements...</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          title="Shilajit"
          price="Rs.1400-20g"
          main="A powerful Ayurvedic resin known for boosting energy, stamina, and overall wellness."
          image={shilajit}
          link={"https://amzn.in/d/9XkZyOb"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="Ashwagandha Powder"
          price="Rs.200-150g"
          main="A natural adaptogen that helps reduce stress, improve strength, and enhance immunity."
          image={ashwagandha}
          link={"https://amzn.in/d/9XkZyOb"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="Turmeric Capsule"
          price="Rs.151-60capsules"
          main="Rich in curcumin, known for its anti-inflammatory and antioxidant properties."
          image={turmeric}
          link={"https://amzn.in/d/0fC2ySb"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="Gokshura"
          price="Rs.218-60capsules"
          main="A traditional herb used for improving urinary health and enhancing strength."
          image={gok}
          link={"https://amzn.in/d/83S486A"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="BPH-GO Capsule"
          price="Rs.1425-60capsules"
          main="Formulated to support prostate health and reduce discomfort associated with BPH."
          image={bph}
          link={"https://amzn.in/d/3Dhc7WU"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="Sanjeevani"
          price="Rs.410-30capsules"
          main="A rejuvenating herbal blend designed to promote overall vitality and wellness."
          image={sanjeevni}
          link={"https://dl.flipkart.com/s/Vt1ZTwuuuN"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="Karela Juice"
          price="Rs.249- 1litre"
          main="A natural detoxifier that helps regulate blood sugar levels and improve digestion."
          image={karela}
          link={"https://amzn.in/d/7g3Bns1"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="Livital Tablet"
          price="Rs.202-90capsules"
          main="A potent blend for liver health, detoxification, and improved metabolism."
          image={livital}
          link={"https://amzn.in/d/8bsJRv3"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="Vitamin B-12"
          price="Rs.299-120capsules"
          main="Essential for nerve health, energy production, and red blood cell formation."
          image={b12}
          link={"https://amzn.in/d/2EY4XZb"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="Chyawanprash"
          price="Rs.336-960g"
          main="A nutritious herbal jam rich in antioxidants to support immunity and overall health."
          image={champ}
          link={"https://amzn.in/d/auNT0KU"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="Liver Care Juice"
          price="Rs.699-1litre"
          main="A cleansing formula that  supports  liver  detoxification  and digestion."
          image={liver}
          link={"https://amzn.in/d/idTHiFR"}
          discription={"Purchase"}
        />
        <ProjectCard
          title="Kidney Care Syrup"
          price="Rs.997-1litre"
          main="Helps in  maintaining  kidney  health and supporting urinary tract function."
          image={kidneycare}
          link={"https://amzn.in/d/4M3GFkj"}
          discription={"Purchase"}
        />
      </div>
    </div>
  );
};

export default Projects;