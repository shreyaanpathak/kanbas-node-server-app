import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments/:cid/:uid", async (req, res) => {
        const {cid, uid} = req.params;
        const status = await enrollmentsDao.enrollUserInCourse(uid, cid);
        res.send(status);
    });
    app.delete("/api/enrollments/:cid/:uid", async (req, res) => {
        const {cid, uid} = req.params;
        const status = await enrollmentsDao.unenrollUserFromCourse(uid, cid);
        res.send(status);
    });
    app.get("/api/enrollments/user/:uid", async (req, res) => {
        const userId = req.params.uid;
        const courses = await enrollmentsDao.findUnenrolledCourses(userId);
        res.json(courses);
    });
    app.get("/api/enrollments/", async (req, res) => {
        const enrollments = await enrollmentsDao.allEnrollments();
        res.json(enrollments);
    });
}