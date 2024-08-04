export default function verifyOwner(entity, currentUser) {
  if (entity.user_id != currentUser) {
    throw {
      status: 403,
      message: "No estás acreditado",
      code: "UNAUTHORIZED",
    };
  }
}
