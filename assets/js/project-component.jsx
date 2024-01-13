import React from "react";
import "./style.css";

export const Component = () => {
  return (
    <div className="component">
      <div className="overlap-group">
        <div className="rectangle" />
        <div className="div" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <img className="line" alt="Line" src="line-1.svg" />
        <img className="img" alt="Line" src="line-2.svg" />
        <div className="text-wrapper">Virtual Physics Lab</div>
        <div className="text-wrapper-2">Timetable Generator</div>
        <div className="text-wrapper-3">Nature.</div>
        <div className="text-wrapper-4">TTS Engine Project</div>
        <p className="p">
          A Virtual Physics Lab with Interactive Simulations, to Visualise Physics without the equipment.
        </p>
        <p className="text-wrapper-5">
          A College Project to automate the process of Timetable creation for a specific Department.
        </p>
        <p className="text-wrapper-6">A Text to Speech Converter application to instantly give voice to words.</p>
        <p className="text-wrapper-7">
          A web platform to calculate your carbon footprint and explore the wonderful biodiversity of out planet
        </p>
      </div>
    </div>
  );
};
