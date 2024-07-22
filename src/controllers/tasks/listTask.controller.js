import Joi from "joi";
import { listTaskModel } from "../../models/tasks/index.js";
import listTaskSchema from "../../validations/validateListTask.js";
export default async function listTaskController(req, res, next) {
  try {
    // obtenemos los datos de ordenado a partir de los params
    const currentUser = req.currentUser;
    // const search = req.query.search;
    // const sort = req.query.sort;
    // const order = req.query.order;
    const body = {
      search: req.query.search,
      sort: req.query.sort,
      order: req.query.order,
    };
    const { error, value } = listTaskSchema.validate(body);
    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }
    const { search, sort, order } = value;
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
