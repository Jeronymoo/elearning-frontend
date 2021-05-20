import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, CardArea, CardContent } from "./styles";

import api from "../../services/api";

interface Course {
  id: string;
  name: string;
  image_path:string;
  lessons: Array<{
    id: string;
    name: string;
    video_id: string;
    duration: string;
    description: string;
  }>;
}

const Dashboard: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    api.get("/courses").then((response) => {
      setCourses(response.data);
    }); 
  }, []);

  console.log(courses);

  return (
    <>
    <Header />
    <Container>
      <h1>Categorias</h1>
      <p>{courses.length} cursos</p>
      <CardArea>
        {courses.map(course => (
          <Link key={course.id} to={`/lessons/${course.id}`}>
            <CardContent>
              <img src={`http://localhost:3333/files/${course.image_path}`} alt=""/>
              <h2>{course.name}</h2>
              { course.lessons.length === 1 || undefined ? (
                <p>{course.lessons.length} aula</p>
              ) : (
                <p>{course.lessons.length} aulas</p>
              ) }
            </CardContent>
          </Link>
        ))}
      </CardArea>
    </Container>
  </>
  );
}

export default Dashboard;