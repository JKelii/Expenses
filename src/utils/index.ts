export const getEnv = (key: string) => {
  const env = import.meta.env[key] as undefined | string;
  if (env === undefined) {
    throw new Error(`env var ${key} not found`);
  }
  return env;
};
