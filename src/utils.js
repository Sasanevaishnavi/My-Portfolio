



// export const getImageUrl = (path) => {
//   return `/assets/${path}`;
// };

export const getImageUrl = (path) => {
  const fullPath = `/assets/${path}`;
  console.log("getImageUrl called with:", path);
  console.log("returning:", fullPath);
  return fullPath;
};