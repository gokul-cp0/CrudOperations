import http from "../http-common";

const StudentService = {
  create: (data) => http.post("/students", data),
  getAll: () => http.get("/students"),
  get: (id) => http.get(`/students/${id}`),
  update: (id, data) => http.put(`/students/${id}`, data),
  delete: (id) => http.delete(`/students/${id}`),
  deleteAll: () => http.delete("/students"),
};
export default StudentService;