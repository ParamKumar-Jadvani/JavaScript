const createAdmin_User = async (data, role) => {
  await fetch(`https://e-learning-json-server.onrender.com/${role}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

const getUser = async () => {
  const response = await fetch(
    "https://e-learning-json-server.onrender.com/users"
  );
  return await response.json();
};

const getAdmins = async () => {
  const response = await fetch(
    "https://e-learning-json-server.onrender.com/admins"
  );
  return await response.json();
};

const createCourse = async (data) => {
  const response = await fetch(
    "https://e-learning-json-server.onrender.com/courses",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
};

const getCourses = async () => {
  const response = await fetch(
    "https://e-learning-json-server.onrender.com/courses"
  );
  return await response.json();
};

export { createAdmin_User, getUser, getAdmins, createCourse, getCourses };
