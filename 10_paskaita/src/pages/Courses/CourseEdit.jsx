import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchCourses, updateCourse } from "../../api/courses";
import { ROUTES } from "../../routes/consts";
const CourseEdit = () => {
  const { id } = useParams();
  const [course, setCourse] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // Data fetching after 2s
    fetchCourses()
      .then((response) => {
        const foundCourse = response.find((course) => course.id === +id);
        setCourse(foundCourse);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateCourse(course);
      navigate(ROUTES.COURSES);
    } catch (error) {
      console.error(error);
    }
  };
  return <div>CourseEdit</div>;
};

export default CourseEdit;
