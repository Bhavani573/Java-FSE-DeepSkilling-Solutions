import React from 'react';

const CourseDetails = () => {
  const courses = ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'];

  return (
    <div>
      <h2>🎓 Course Details</h2>
      {courses.map((course, index) => (
        <p key={index}>{course}</p>
      ))}
    </div>
  );
};

export default CourseDetails;
