import { crearListaAlumnos, crearListaProfesores } from './listas.js';
import express from "express";

const app = express()
const port = 3000

app.get('/alumnos', (req, res) => {
  res.send(crearListaAlumnos())
})

app.get('/profesores', (req, res) => {
  res.send(crearListaProfesores())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})