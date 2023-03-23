const config = () => {
  return {
    environment: process.env.ENVIRONMENT || "dev",
  };
};

module.exports = config();
