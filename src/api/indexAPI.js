import studentService from "./services/studentService";
import instance from "./instance";

export default {
    students: studentService(instance),
}