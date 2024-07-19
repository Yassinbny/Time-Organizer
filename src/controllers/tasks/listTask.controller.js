import { listTaskModel } from "../../models/tasks/index.js";

export default async function listTaskController(req, res, next) {
  try {
    // obtenemos los datos de ordenado a partir de los params
    const currentUser = req.currentUser;
    const search = req.query.search;
    const sort = req.query.sort;
    const order = req.query.order;
    // pasamos estos ultimos a traves de argumento al model para ordenar en caso de que queramos

    const { tasks } = await listTaskModel(currentUser, search, sort, order);
    return res.status(200).json({
      ok: true,

      tasks,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
