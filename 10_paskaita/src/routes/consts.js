import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import NewUser from "../pages/NewUser/NewUser";
import EditUser from "../pages/EditUser/EditUser";
import Courses from "../pages/Courses/Courses";
import Course from "../pages/Courses/Course";
import CourseEdit from "../pages/Courses/CourseEdit";
export const ROUTES = {
  HOME: "/",
  USER: "/:id",
  NEW_USER: "/new",
  EDIT_USER: "/:id/edit",
  COURSES: "/courses",
  COURSE: "/course/:id",
  EDIT_COURSE: "/course/:id/edit",
};

export const routes = [
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.NEW_USER,
    Component: NewUser,
  },
  {
    path: ROUTES.EDIT_USER,
    Component: EditUser,
  },
  {
    path: ROUTES.USER,
    Component: User,
  },
  {
    path: ROUTES.COURSES,
    Component: Courses,
  },
  {
    path: ROUTES.COURSE,
    Component: Course,
  },
  {
    path: ROUTES.EDIT_COURSE,
    Component: CourseEdit,
  },
];
