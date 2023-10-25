interface ProjectConfig {
  development: {
    backendUrl: string;
  };
  production: {
    backendUrl: string;
  };
}

export const config: ProjectConfig = {
  development: {
    backendUrl: "https://localhots:8080/api/v1/dalle"
  },
  production: {
    backendUrl: "https://devswag.onrender.com/api/v1/dalle"
  }
};