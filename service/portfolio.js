export const portfolio = async (form) => {
  try {
    const response = await fetch("/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      credentials: "include",
      body: JSON.stringify(form),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
