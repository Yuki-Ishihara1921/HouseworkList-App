export const getDateInformations = (do_at) => {
    const today = new Date()
    const taskDoAt = new Date(do_at)
    const dateInformations = {
        today: today,
        taskDoAt: taskDoAt,
        todayTime: today.getTime(),
        doAtTime: taskDoAt.getTime(),
        todayString: today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate(),
        doAtString: taskDoAt.getFullYear() + "-" + taskDoAt.getMonth() + "-" + taskDoAt.getDate()
    }
    return dateInformations
}