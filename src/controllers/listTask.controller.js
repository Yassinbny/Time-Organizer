import listTaskModel from "../models/listTask.model.js";

export default async function listTaskController(req, res, next) {
  try {
    // hasta que podamos immplementar el front para hacer las pruebas de filtro busqueda, lo pasaremos por argumentos en este orden
    // search, sort, order donde "search" sera la palabra o frase que buscara tanto en title como description
    // "sort" sera a la columna en la que quieres que se base para para ordenar todo
    // "order" sera como quieras que ordene los resultados, en ascendente o descendente
    const { tasks } = await listTaskModel("prueba", "description", "desc");
    return res.status(200).json({
      ok: true,

      tasks,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
