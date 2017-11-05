const expect = require('expect')
const {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'from'
    let text = 'Text'
    let message = generateMessage(from, text)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({from, text})
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'from'
    let latitude = 1
    let longitude = 1
    let url = 'https://www.google.com/maps?q=1, 1'
    let message = generateLocationMessage(from, latitude, longitude)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({from, url})
  })
})

