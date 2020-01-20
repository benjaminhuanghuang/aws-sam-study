import moment from 'moment'

exports.clock = async (event, context) => {

  console.log('Clock function is running...')

  const message = moment().format();

  const response = {
    statusCode: 200,
    body: JSON.stringify(message)
  }
  return response
};
