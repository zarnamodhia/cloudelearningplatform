import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

export default function CourseView() {
  const { id } = useParams();

  const [lessons, setLessons] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    API.get(`/courses/lesson/${id}`)
      .then(res => {
        setLessons(res.data);
        if (res.data.length > 0) {
          setCurrentVideo(res.data[0].video_url);
        }
      })
      .catch(() => alert("Error loading lessons"));
  }, [id]);

  return (
    <div style={styles.container}>

      {/* LEFT SIDE - LESSON LIST */}
      <div style={styles.sidebar}>
        <h3>Lessons</h3>

        {lessons.map(lesson => (
          <div
            key={lesson.id}
            style={styles.lesson}
            onClick={() => setCurrentVideo(lesson.video_url)}
          >
            ▶ {lesson.title}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE - VIDEO PLAYER */}
      <div style={styles.player}>
        {currentVideo ? (
          <video width="700" controls src={currentVideo} />
        ) : (
          <p>No video available</p>
        )}
      </div>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    padding: "20px"
  },

  sidebar: {
    width: "250px",
    marginRight: "20px",
    borderRight: "1px solid #ccc"
  },

  lesson: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #eee"
  },

  player: {
    flex: 1
  }
};