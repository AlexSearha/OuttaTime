export const mergeString = (stringToMerge: string) => {
  if (stringToMerge.toLowerCase() === "accueil") {
    return "";
  }
  return stringToMerge.trim().replace(" ", "-").toLowerCase();
};
