import * as enrollmentsDao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
export default function EnrollmentRoutes(app) {

      const enrollUserInCourse = async (req, res) => {
        let { uid, cid } = req.params;
        if (uid === "current") {
          const currentUser = req.session["currentUser"];
          uid = currentUser._id;
        }
        const status = await enrollmentsDao.enrollUserInCourse(uid, cid);
        res.send(status);
      };
      const unenrollUserFromCourse = async (req, res) => {
        let { uid, cid } = req.params;
        if (uid === "current") {
          const currentUser = req.session["currentUser"];
          uid = currentUser._id;
        }
        const status = await enrollmentsDao.unenrollUserFromCourse(uid, cid);
        res.send(status);
      };
      app.post("/api/users/:uid/courses/:cid", enrollUserInCourse);
      app.delete("/api/users/:uid/courses/:cid", unenrollUserFromCourse);

}