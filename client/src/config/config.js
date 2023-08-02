const config = {
  development: {
    // port 8080 doesn't work in nigeria, use other port except port 5000
    backendUrl: "http://localhost:5000/api/v1/dalle",
  },
  production: {
    backendUrl: "",
  },
};

export default config;
