import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, CardArea, CardContent } from "./styles";

import api from "../../services/api";
import mathImg from "../../assets/math.svg";

interface Course {
  id: string;
  name: string;
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
              <img src={mathImg} alt=""/>
              <h2>{course.name}</h2>
              <p>15 aulas</p>
            </CardContent>
          </Link>
        ))}
      </CardArea>
    </Container>
  </>
  );
}

export default Dashboard;