import { Alumno } from "./Alumno.js";
import { Profesor } from "./Profesor.js";

export function crearListaAlumnos() {
  const alumno1 = new Alumno("Pedro", 19354365);
  const alumno2 = new Alumno("Luisa", 19204578);
  const alumno3 = new Alumno("Mario", 21586635);
  const alumno4 = new Alumno("Juan", 18582369);

  const alumnos = [alumno1, alumno2, alumno3, alumno4];
  return alumnos;
}

export function crearListaProfesores() {
    const profesor1 = new Profesor("Leopoldo", 17);
    const profesor2 = new Profesor("Valentino", 5);
    const profesor3 = new Profesor("Sotanito", 3);
    const profesor4 = new Profesor("Pericles", 11);
  
    const profesores = [profesor1, profesor2, profesor3, profesor4];
    return profesores;
  }