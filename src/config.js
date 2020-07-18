export const config = {
  appName: 'RegExp crossword',
  columnsCount: 5,
  rowsCount: 5,
  columnRegularExpressions: [
    '(11|0)+',
    '[01]+',
    '(10101|01010)',
    '0+1+0+',
    '(0|1)(0|1)\\2\\1\\1'
  ],
  rowRegularExpressions: [
    '(11|00)+1',
    '1{2,}0{2,}',
    '0?1?0?1?0?1?',
    '0?1+0?',
    '0+1+'
  ]
}