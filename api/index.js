export default (req, res) => {

  const response_type = 'in_channel'
  // const message = 'If you haven\'t failed, you haven\'t tried'
  const message = 'Hello slack'

  res.json({ response_type, text: message })
}
