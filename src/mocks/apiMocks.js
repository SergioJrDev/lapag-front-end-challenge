import { professionalMocks, servicesMocks, clientsMocks } from "./mocks";

export const returnProfessionals = () =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(professionalMocks);
    }, 100);
  });

  export const returnProfessionalByDocument = (professional_document) =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      if(!professional_document) {
        return reject('CPF não informado para filtrar profissional.')
      }

      const professionalFiltered =
        professionalMocks
          .filter(professional => professional.document_number === professional_document)

      resolve(professionalFiltered[0]);
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
        return reject('CPF não informado para filtrar serviços.')
      }

      const servicesFiltered = []
      servicesMocks.map(service => {
        const hasServices = service.available_professionals.filter(({cpf}) => cpf === professional_document)
        hasServices.length > 0 && servicesFiltered.push(service)
        return true
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

export const returnClientById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!id) {
        return reject('ID não informado para filtrar clientes.')
      }

      const clietFiltered =
        clientsMocks
          .filter(client => client._id === id)

      resolve(clietFiltered[0]);
      resolve(clientsMocks)
    }, 200);
  })
};
