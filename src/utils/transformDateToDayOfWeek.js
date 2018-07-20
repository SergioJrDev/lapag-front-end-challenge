import moment from 'moment'

const transformDateToDayOfWeek = (date = moment()) => {
  return moment(date).format('dddd')
}

export default transformDateToDayOfWeek