import { useState, useEffect } from "react";
import { fetchCourses } from "../../api/courses";
import CourseList from "./CourseList";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchCourses()
      .then((response) => {
        setCourses(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <CourseList courses={courses} />;
};

export default Courses;
