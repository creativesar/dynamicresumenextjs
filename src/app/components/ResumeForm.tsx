// components/ResumeForm.tsx
"use client";  // Add this line at the top

import { useState } from 'react';

const ResumeForm = () => {
  // State to store form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [generatedResume, setGeneratedResume] = useState<string>('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate resume content
    const resumeData = `
      <h2><b>Resume</b></h2>
      <h3>Personal Information</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>

      <h3>Education</h3>
      <p>${education}</p>

      <h3>Experience</h3>
      <p>${experience}</p>

      <h3>Skills</h3>
      <p>${skills}</p>
    `;

    // Update state to display the resume
    setGeneratedResume(resumeData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-center text-3xl font-semibold mb-8">Editable Resume Builder</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info Section */}
        <fieldset className="border-2 border-blue-300 p-4 rounded-lg">
          <legend className="font-semibold text-lg">Personal Information</legend>
          <div>
            <label htmlFor="name" className="block text-sm">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-2 w-full border border-blue-300 rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-2 w-full border border-blue-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 p-2 w-full border border-blue-300 rounded-lg"
              placeholder="Enter your contact number"
              required
            />
          </div>
        </fieldset>

        {/* Education Section */}
        <fieldset className="border-2 border-blue-300 p-4 rounded-lg">
          <legend className="font-semibold text-lg">Education</legend>
          <textarea
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="mt-2 p-2 w-full border border-blue-300 rounded-lg"
            placeholder="Enter your education"
            rows={3}
            required
          />
        </fieldset>

        {/* Experience Section */}
        <fieldset className="border-2 border-blue-300 p-4 rounded-lg">
          <legend className="font-semibold text-lg">Experience</legend>
          <textarea
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mt-2 p-2 w-full border border-blue-300 rounded-lg"
            placeholder="Enter your work experience"
            rows={3}
            required
          />
        </fieldset>

        {/* Skills Section */}
        <fieldset className="border-2 border-blue-300 p-4 rounded-lg">
          <legend className="font-semibold text-lg">Skills</legend>
          <textarea
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="mt-2 p-2 w-full border border-blue-300 rounded-lg"
            placeholder="Enter your skills"
            rows={3}
            required
          />
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-400 text-white p-3 rounded-lg mt-4 hover:bg-blue-500"
        >
          Generate Resume
        </button>
      </form>

      {/* Generated Resume */}
      {generatedResume && (
        <div
          className="mt-10 p-6 border-2 border-blue-300 rounded-lg bg-blue-50"
          dangerouslySetInnerHTML={{ __html: generatedResume }}
        />
      )}
    </div>
  );
};

export default ResumeForm;
