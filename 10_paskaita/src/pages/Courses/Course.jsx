import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../../routes/consts";
import { fetchCourses } from "../../api/courses";
const User = () => {
  const { id } = useParams();
  const [course, setCourse] = useState("");

  useEffect(() => {
    fetchCourses()
      .then((response) => {
        const foundCourse = response.find((course) => course.id === +id);
        setCourse(foundCourse);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <Link to={ROUTES.HOME}>Go back</Link>
      <h1>Course information</h1>
      <div>
        {course.name} {course.price}
      </div>
    </div>
  );
};

export default User;
