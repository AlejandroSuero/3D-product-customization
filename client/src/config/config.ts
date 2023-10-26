import { ProjectConfig } from "../types";

export const config: ProjectConfig = {
  development: {
    backendUrl: "http://localhost:8080/api/v1/dalle"
  },
  production: {
    backendUrl: "https://threed-product-customization.onrender.com/api/v1/dalle"
  }
};