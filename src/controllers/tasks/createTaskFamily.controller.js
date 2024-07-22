import { createTaskFamilyModel } from "../../models/tasks/index.js";
import createTaskFamilySchema from "../../validations/createTaskFamilySchema.js";

export default async function createTaskFamilyController(req, res, next) {
  try {
    const body = {
      name: req.body.name,
      color: req.body.color,
      task_id: req.params.idTask,
    };

    const { error, value } = createTaskFamilySchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { name, color, task_id } = value;
    const { taskFamily } = await createTaskFamilyModel(name, color, task_id);

    return res.status(200).json({
      ok: true,
      message: taskFamily,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
