export const getVariablesByEnvironment = (
  ifProd: string,
  ifOtherwise: string
) => {
  return process.env.NODE_ENV === "production" ? ifProd : ifOtherwise;
};
