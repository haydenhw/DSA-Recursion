const sheep = () => {
  const countSheep = (numSheep, logMessage) => {
    if (numSheep === 0) {
      console.log('no more sheep')
      return
    }
    console.log(`${numSheep} sheep left`)
    countSheep(--numSheep)
  }


  console.log = jest.fn()
  test('console.log should be called 4 times', () => {
    const numSheep = 3
    countSheep(numSheep)
    expect(console.log).toBeCalledTimes(numSheep + 1)
  })
}

const powerCalculator = () => {
  const _powerCalculator = (base, power) => {
    if (power === 1) {
      return base
    }

    return _powerCalculator(base * base, --power)
  }

  test('should return 100 if called with 10, 2', () => {
    expect(_powerCalculator(10, 2)).toBe(100)
  })

}

const reverseString = () => {
  const _reverseString = (str) => {
    if (str.length === 0) {
      return str
    }

    return str[str.length - 1] + _reverseString(str.slice(0, str.length - 1))
  }

  test('should reverse a string', () => {
    expect(_reverseString('abc')).toBe('cba')
  })

  test('should reverse a word not in alphabetical order', () => {
    expect(_reverseString('recursion')).toBe('noisrucer')
  })
}

const nthTriagnle = () => {
  const _nthTriagnle = (n) => {
    const makeTriangle = (count, prevTriangleSize=0) => {
      if (count === n ) {
        return prevTriangleSize + n
      }

      prevTriangleSize += count
      return makeTriangle(++count, prevTriangleSize)
    }

    return makeTriangle(1)
  }

  test('_nthTriangle(2) ', () => {
    expect(_nthTriagnle(2)).toBe(3)
  })

  test('_nthTriangle(3) ', () => {
    expect(_nthTriagnle(3)).toBe(6)
  })

  test('_nthTriangle(4) ', () => {
    expect(_nthTriagnle(4)).toBe(10)
  })
}

const fibonacci = () => {
  const _fibonacci = (n, numbers=[1, 1]) => {
    if (numbers.length === n) {
      return numbers
    }

    numbers.push(numbers[numbers.length -1] + numbers[numbers.length -2])

    return _fibonacci(n, numbers)
  }

  test('fib 7', () => {
    const result = _fibonacci((7))
    console.log(result)
    expect(result).toEqual([1,1,2, 3,5,8, 13])
  })

  test('fib 3', () => {
    const result = _fibonacci((3))
    console.log(result)
    expect(result).toEqual([1,1,2])
  })
}

(function main() {
  sheep()
  powerCalculator()
  reverseString()
  nthTriagnle()
  fibonacci()
})()












