export class MatchLine {
  regexp = /.*/
  _items = []
  _isValid = false

  constructor(
    regexp
  ) {
    this.regexp = new RegExp(regexp)
  }

  get items() {
    return [...this._items]
  }

  get isValid() {
    return this._isValid
  }

  set items(values = []) {
    this._items = values
    this.checkValidity()
  }
  
  setItem(index, item) {
    this._items[index] = item
    this.checkValidity()
  }

  checkValidity() {
    const isFull = this._items.length === this._items.filter(item => item !== null).length
    const regexpPassed = this.regexp.test(this._items.join(''))
    return this._isValid = isFull && regexpPassed
  }
}