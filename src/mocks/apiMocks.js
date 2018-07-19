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

export const returnServicesByProfessional = (professional_document) =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      if(!professional_document) {
        return reject('CPF não informado.')
      }

      const servicesFiltered = []
      servicesMocks.map(service => {
        const hasServices = service.available_professionals.filter(({cpf}) => cpf === professional_document)
        hasServices.length > 0 && servicesFiltered.push(service)
      })

      resolve(servicesFiltered);
    }, 200);
  });

export const returnClients = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(clientsMocks)
    }, 200);
  })
};
