const createAdmin_User = async (data, role) => {
  await fetch(`https://json-server-hkhy.onrender.com/${role}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

const getUser = async () => {
  const response = await fetch("https://json-server-hkhy.onrender.com/users");
  return await response.json();
};

const getUserbyID = async (id) => {
  const response = await fetch(
    `https://json-server-hkhy.onrender.com/users/${id}`
  );
  return await response.json();
};

const getAdmins = async () => {
  const response = await fetch("https://json-server-hkhy.onrender.com/admins");
  return await response.json();
};

const createCourse = async (data) => {
  const response = await fetch(
    "https://json-server-hkhy.onrender.com/courses",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
};

const getCourses = async () => {
  const response = await fetch("https://json-server-hkhy.onrender.com/courses");
  return await response.json();
};

const updateCourse = async (data) => {
  const response = await fetch(
    `https://json-server-hkhy.onrender.com/courses/${data.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
};

const updateUser = async (id, data) => {
  const response = await fetch(
    `https://json-server-hkhy.onrender.com/users/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
};

export {
  createAdmin_User,
  getUser,
  getAdmins,
  createCourse,
  getCourses,
  updateUser,
  getUserbyID,
  updateCourse,
};
