import React from 'react';
import './CourseGoalItem.css';

const CourseGoalItem = props => {

  return (
    <li className="goal-item">
      {props.text}
    </li>
  );
};

export default CourseGoalItem;
