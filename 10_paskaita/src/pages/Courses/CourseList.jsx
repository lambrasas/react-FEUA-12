import PropTypes from "prop-types";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "../../routes/consts";
import { useNavigate } from "react-router-dom";

const CourseList = ({ courses }) => {
  const navigate = useNavigate();
  const handleEditCourse = (id) => {
    const path = generatePath(ROUTES.EDIT_COURSE, { id });
    navigate(path);
  };
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <Link to={generatePath(ROUTES.COURSE, { id: course.id })}>
            {course.name} {course.price}
          </Link>
          <button
            onClick={() => handleEditCourse(course.id)}
            style={{ marginLeft: 16 }}
          >
            Edit
          </button>
          <span
            // onClick={() => handleDeleteUser(user.id)}
            style={{ marginLeft: 16, color: "red" }}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};
CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};
export default CourseList;
