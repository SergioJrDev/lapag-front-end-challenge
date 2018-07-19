import { professionalMocks, servicesMocks, clientsMocks } from "./mocks";

export const returnProfessionals = () =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(professionalMocks);
    }, 100);
  });

export const returnServices = () =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(servicesMocks);
    }, 200);
  });

export const returnClients = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(clientsMocks)
    }, 200);
  })
};
