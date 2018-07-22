import Store from './../store'
import { professionalMocks, servicesMocks, clientsMocks } from "./mocks";
import moment from 'moment'
// console.log('Store mock', Store.getState())

export const getScheduleByDay = (date) => {
  return new Promise((resolve, reject) => {
    if(!date) reject('Informe uma data para filtrar os agendamento')
    const dateFormatted = moment(date).format('DD/MM/YYYY')
    const { schedules = []}  = Store.getState()
    const scheduledFiltered = schedules.filter(schedule => {
      const scheduleDateFormatted = moment(schedule.date).format('DD/MM/YYYY')
      return scheduleDateFormatted === dateFormatted
    })
    console.log('filtered', scheduledFiltered)
    return resolve(scheduledFiltered)
  })
}


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
