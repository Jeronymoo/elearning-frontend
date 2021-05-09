import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, Info, LessonsList, LessonArea, LessonDuration } from "./styles";
import { FiClock } from 'react-icons/fi'

import api from "../../services/api";

interface LessonsL {
  id: string;
  name: string;
  duration: string;
  description: string;
  video_id: string;
}

interface IObject {
  name: string;
  description: string;
  video_id: string;
}

const Lessons: React.FC = () => {
  const { id } = useParams<{id: string}>();

  const [lessons, setLessons] = useState<LessonsL[]>([]);
  const [modal, setModal] = useState(false);
  const [object, setObject] = useState<IObject>({} as IObject);

  useEffect(() => {
    api.get(`lessons/${id}/lessons`).then((response) => {
      setLessons(response.data);
    }); 
  }, [id]);

  function handleShowModal(id: IObject) {
    setObject(id);
    setModal(true);
  }

  return (
    <>
    <Header />
    <Info>
      <h1>Categorias</h1>
      <p>{lessons.length} aulas</p>
    </Info>
    <Container>
      <LessonsList>
        {lessons.map((lesson, index) => (
          <button key={lesson.id} onClick={() => handleShowModal(lesson)}>
            <h1>{lesson.name}</h1>
            <LessonDuration>
              <small>Aula {String(index + 1).padStart(2, '0')}</small>
              <FiClock/>
              <small>{lesson.duration}</small>
            </LessonDuration>
        </button>
        ))}
      </LessonsList>
      {modal === true ? (
        <LessonArea>
          <h1>{object.name}</h1>
          <div>
            <iframe title={object.name} width="800" height="450" src={`https://www.youtube.com/embed/${object.video_id}`} ></iframe>
          </div>
          <p>{object.description}</p>
        </LessonArea>
      ) : <div></div> }

    </Container>
  </>
  );
}

export default Lessons;