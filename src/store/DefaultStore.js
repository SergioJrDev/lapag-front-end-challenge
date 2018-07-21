

import moment from 'moment'

const mockSchedule = [
  {
  "date": "2018-07-21T17:40:32.871Z",
  "client": {
    "_id": "acovnuzcU0RHWRQT",
    "name": "Adaline Silva Viana"
  },
  "professional": {
    "_id": "BzDQS9nob9rjNppf5",
    "name": "Antonio Carlos Martins",
    "nickname": "Antonio",
    "document_number": "97976183079"
  },
  "services": [
    {
      "_id": "CrP8u4WQaD7Qf7Nyw",
      "name": "Lavagem",
      "duration": null,
      "available_professionals": [
        {
          "commission": "30",
          "cpf": "97976183079"
        },
        {
          "commission": "30",
          "cpf": "37164522000139"
        },
        {
          "commission": "50",
          "cpf": "45810821880"
        }
      ],
      "checked": true
    },
    {
      "_id": "F2ke4teiMDzxKrrKn",
      "name": "Escova",
      "duration": "60",
      "available_professionals": [
        {
          "commission": "50",
          "cpf": "97976183079"
        },
        {
          "commission": "50",
          "cpf": "45810821880"
        },
        {
          "cpf": "45810281820",
          "commission": "50"
        },
        {
          "cpf": "96133358000161",
          "commission": "50"
        }
      ],
      "checked": true
    },
    {
      "_id": "ZYhdxNpdf5K6H323j",
      "name": "Hidratação",
      "duration": "90",
      "available_professionals": [
        {
          "commission": "45",
          "cpf": "97976183079"
        },
        {
          "commission": "50",
          "cpf": "45810821880"
        },
        {
          "cpf": "48511230321",
          "commission": "45"
        }
      ],
      "checked": true
    }
  ],
  "duration": "90",
  "horary": "15:20"
},{
  "date": "2018-07-21T13:09:53.942Z",
  "client": {
    "_id": "qL3xTjfHxfeg7xdJ",
    "name": "Adelir"
  },
  "professional": {
    "_id": "CbyCKeE6eJeBKjrq2",
    "name": "Camila Silva",
    "nickname": "Camila",
    "document_number": "82053478837"
  },
  "services": [
    {
      "_id": "2zt6YKZZA7dCvaZjZ",
      "name": "Perna Inteira",
      "duration": null,
      "available_professionals": [
        {
          "commission": "50",
          "cpf": "82053478837"
        }
      ],
      "checked": true
    },
    {
      "_id": "F56xwREr6sLhmEAuX",
      "name": "Intima",
      "duration": "60",
      "available_professionals": [
        {
          "commission": "50",
          "cpf": "82053478837"
        }
      ],
      "checked": true
    }
  ],
  "duration": "30",
  "horary": "12:10"
}
]

const DefaultStore = {
  user: {
    name: 'Joffrey Lannister'
  },
  scheduleDate: {
    currentDate: moment(),
  },
  schedules: mockSchedule,
  ui: {
    modal: {
      isOpen: true,
      content: null
    },
  },
}


export default DefaultStore