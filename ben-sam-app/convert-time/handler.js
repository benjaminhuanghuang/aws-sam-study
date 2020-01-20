// import moment from 'moment'
const moment = require('moment-timezone')

exports.convertTime = async (event, context) => {

  console.log('Convert time is running...')

  let timeZone = event.queryStringParameters && event.queryStringParameters.tz
  let formattedDate = moment().format()

  if (timeZone !== null) {
    formattedDate = moment().tz(timeZone).format()
  }
  else {
    timeZone = "GMT 0"
  }
  const message = `The time in ${timeZone} is ${formattedDate}`

  const response = {
    statusCode: 200,
    body: JSON.stringify(message)
  }
  return response
};
