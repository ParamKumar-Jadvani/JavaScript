const createAdmin_User = async (data, role) => {
  await fetch(`http://localhost:3000/${role}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

const getUser = async () => {
  const response = await fetch("http://localhost:3000/users");
  return await response.json();
};

const getAdmins = async () => {
  const response = await fetch("http://localhost:3000/admins");
  return await response.json();
};

const createCourse = async (data) => {
  const response = await fetch("http://localhost:3000/courses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

const getCourses = async () => {
  const response = await fetch("http://localhost:3000/courses");
  return await response.json();
};

export { createAdmin_User, getUser, getAdmins, createCourse , getCourses };
