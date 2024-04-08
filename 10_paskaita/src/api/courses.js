import { API } from "./consts";

export const fetchCourses = async () => {
  const response = await fetch(`${API}/courses`);
  return await response.json();
};
export const updateCourse = async (course) => {
  const response = await fetch(`${API}/course/${course.id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(course),
  });
  return await response.json();
};
