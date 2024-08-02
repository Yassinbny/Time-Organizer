export default function verifyOwner(task, currentUser) {
  if (task.user_id != currentUser) {
    throw {
      status: 403,
      message: "No estás acreditado",
      code: "UNAUTHORIZED",
    };
  }
}
