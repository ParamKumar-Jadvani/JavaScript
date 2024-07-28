const isExistUser = async (email) => {
  const user = await getUsers(email);
  return user.length > 0;
};

const createUser = async (data) => {
  if (await isExistUser(data.email)) {
    throw new Error("User already exist");
  }

  fetch("https://json-server-hkhy.onrender.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

const createProducts = (data) => {
  fetch("https://json-server-hkhy.onrender.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

const getProducts = async () => {
  const response = await fetch(
    "https://json-server-hkhy.onrender.com/products"
  );
  return await response.json();
};

const getUsers = async (email) => {
  const response = await fetch(
    `https://json-server-hkhy.onrender.com/users?email=${email}`
  );
  return await response.json();
};

const updateUser = async (id, data) => {
  fetch(`https://json-server-hkhy.onrender.com/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

const updateCartItem = async (userId, item, event = false) => {
  const response = await fetch(
    `https://json-server-hkhy.onrender.com/users/${userId}`
  );
  const user = await response.json();
  let updatedCart = [];
  event === "delete"
    ? (updatedCart = user.cart.filter((i) => i.id !== item.id))
    : updatedCart.push(item);

  console.log(updatedCart);
  // Update the user's cart using PATCH
  await fetch(`https://json-server-hkhy.onrender.com/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart: updatedCart }),
  });
};

export {
  createUser,
  createProducts,
  getUsers,
  getProducts,
  updateUser,
  updateCartItem,
};
