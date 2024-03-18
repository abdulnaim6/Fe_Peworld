export const asset = async (form) => {
  const response = await fetch("/upload", {
    method: "POST",
    body: form,
  });
  const data = await response.json();
  console.log("data", data);
  return data.data.fite_url;
};
