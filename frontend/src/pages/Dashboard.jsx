import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();   // ✅ HERE

  useEffect(() => {
    API.get("/courses")
      .then(res => setCourses(res.data));
  }, []);

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>

          <button onClick={() => navigate(`/course/${course.id}`)}>
            View Course
          </button>
        </div>
      ))}
    </div>
  );
}