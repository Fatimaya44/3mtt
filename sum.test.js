const sum = require('./index')

test('add 4 and 3 to get 7', () => {
      expect(sum(3, 4)).toBe(7)
})