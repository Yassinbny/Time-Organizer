export default function validateCreateTask({
  title,
  description,
  start_on,
  finish_on,
}) {
  if (
    [title, description, start_on, finish_on].includes("") ||
    [title, description, start_on, finish_on].includes(undefined)
  ) {
    /*      let error = new Error("Todos los campos son requeridos");
         error.status = 400;
         throw error; */
    throw {
      message: "Todos los campos son requeridos",
      status: 400,
      code: "BAD REQUEST",
    };
  }

  return {
    title,
    description,
    start_on,
    finish_on,
  };
}
