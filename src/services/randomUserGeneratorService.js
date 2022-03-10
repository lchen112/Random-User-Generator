export const getUserInfo = async () => {
  const res = await fetch("https://randomuser.me/api/");
  return res.json();
};
