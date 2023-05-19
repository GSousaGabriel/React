import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addCourse = course => {
    setCourseGoals(prevState => {
      course = { text: course, id: 'g' + courseGoals.length + 1 }
      return [course, ...prevState]
    })
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput addNewCourse={addCourse}/>
      </section>
      <section id='goals'>
    <CourseGoalList data={courseGoals}/>
      </section>
    </div>
  );
};

export default App;
