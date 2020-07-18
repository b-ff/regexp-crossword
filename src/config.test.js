import { config } from './config'

test('exports config', () => {
  expect(config).toBeDefined()
})

test('has columns count', () => {
  expect(parseInt(config.columnsCount, 10)).not.toBeNaN()
})

test('has rows count', () => {
  expect(parseInt(config.rowsCount, 10)).not.toBeNaN()
})

test('has regular expressions for all columns', () => {
  expect(config.columnRegularExpressions.length).toBe(config.columnsCount)
})

test('has regular expressions for all rows', () => {
  expect(config.rowRegularExpressions.length).toBe(config.rowsCount)
})

test('has all valid regular expressions', () => {
  expect(() => {
    [
      ...config.columnRegularExpressions,
      ...config.rowRegularExpressions
    ]
      .forEach(expression => { 
        if (!expression) { 
          throw new Error('Empty expression!') 
        } else {
          new RegExp(expression)
        }
      })
  }).not.toThrow()
})