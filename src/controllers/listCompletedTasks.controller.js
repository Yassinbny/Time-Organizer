import listCompletedTasksModel from "../models/listCompletedTasks.model.js";

export default async function listCompletedTasksController(req, res, next) {
  try {
    const currentUser = req.currentUser.id;

    const { completedTasks } = await listCompletedTasksModel(currentUser);

    const totalTasks = completedTasks.length;
    const totalRatings = completedTasks.filter(task => task.rating !== null).length;
    const averageRating = totalRatings > 0 
      ? completedTasks.reduce((acc, task) => acc + (task.rating || 0), 0) / totalRatings 
      : 0;

    const familyData = completedTasks.reduce((acc, task) => {
      const family = task.family || 'other';
      if (!acc[family]) acc[family] = { count: 0, ratingSum: 0, ratingCount: 0 };
      acc[family].count++;
      if (task.rating !== null) {
        acc[family].ratingSum += task.rating;
        acc[family].ratingCount++;
      }
      return acc;
    }, {});

    const familyRatings = Object.keys(familyData).map(family => ({
      family,
      averageRating: familyData[family].ratingCount > 0
        ? familyData[family].ratingSum / familyData[family].ratingCount
        : 0,
      count: familyData[family].count
    }));

    return res.status(200).json({
      ok: true,
      totalTasks,
      totalRatings,
      averageRating,
      familyRatings,
      completedTasks,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
