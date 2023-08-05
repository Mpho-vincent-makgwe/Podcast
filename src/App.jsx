import React from 'react';
// import './App.css';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header name="Mpho Vincent Makgwe" title="Software Engineer" />
      <ContactInfo
        email="mpho@example.com"
        phone="+27 603 597941"
        location="Johannesburg, South Africa"
      />
      <Education
        degree="Bachelor of Science in Computer Science"
        university="University of Cape Town"
        graduationDate="December 20XX"
      />
      <Experience
        title="Software Engineer - ABC Tech Solutions"
        startDate="July 20XX"
        endDate="Present"
        responsibilities={[
          "Developed and maintained web applications using React and Node.js",
          "Collaborated with cross-functional teams to deliver high-quality software",
          "Participated in code reviews and provided constructive feedback to teammates",
        ]}
      />
      <Skills
        skills={[
          "JavaScript (React, Node.js)",
          "HTML5, CSS3",
          "Git and Version Control",
          "Problem Solving",
          "Teamwork and Collaboration",
        ]}
      />
      <Footer />
    </div>
  );
};

export default App;
