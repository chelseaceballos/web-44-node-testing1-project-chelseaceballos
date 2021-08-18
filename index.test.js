const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
   test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
   })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
   test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
   })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
   test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
     const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
     const input2 = [{ integer: 4 }, { integer: 3 }, { integer: 2 }, { integer: 1 }]
     const input3 = [{ integer: 1 }, { integer: 3 }, { integer: 2 }, { integer: 4 }]
     const actual = utils.findLargestInteger(input)
     const actual2 = utils.findLargestInteger(input2)
     const actual3 = utils.findLargestInteger(input3)
     expect(actual).toBe(3)
     expect(actual2).toBe(4)
     expect(actual3).toBe(4)
   })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter(3)
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3) // if done once 3
  })
 test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
 counter.countDown() //3
 expect(counter.countDown()).toBe(2) // if done again 2

 })
 test('[8] the count eventually reaches zero but does not go below zero', () => {
  counter.countDown() // 3
  counter.countDown() // 2
  counter.countDown() // 1
  counter.countDown() // 0
  expect(counter.countDown()).toBe(0) // if done again will be 0 
 })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
   test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe('summer')

   })
   test('[10] the SECOND call of seasons.next returns "fall"', () => {
     seasons.next()
      expect(seasons.next()).toBe('fall')      

   })
   test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('winter')


   })
   test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('spring')


   })
   test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('summer')


   })
   test('[14] the 40th call of seasons.next returns "spring"', () => {
    for ( let i = 0 ; i < 39 ; i++){ // checks at 39 // initialize indx at 0
      seasons.next()
    }
    expect(seasons.next()).toBe('spring') // assert 40th call to be spring
   })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
   test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toBe(100) // adds miles driven
    expect(focus.drive(100)).toBe(200)
    expect(focus.drive(100)).toBe(300)
    expect(focus.drive(200)).toBe(500)
    
  })
   test('[16] driving the car uses gas', () => {
    focus.drive(600)
    expect(focus.drive(1)).toBe(600) // cannot surpass vehicle ability to drive 600mi per tank
    expect(focus.drive(1)).toBe(600) // no more gas in tank after 600 miles
    expect(focus.drive(1)).toBe(600) // must refuel if driven over 600 mi
    expect(focus.tank).toBe(0)
   })
   test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    focus.refuel(10) // in gallons = 300 miles = 1/2 tank
    focus.drive(600)
    expect(focus.odometer).toBe(900)
    focus.refuel(20) // in gallons = 600 miles = full tank
    focus.drive(600) 
    expect(focus.odometer).toBe(1500) // odometer + 600driven miles = 1500
   })
   test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(200) // in gallons = 6000 miles = 10 full tanks
    focus.drive(1000) // drives over 600 with insane amount of gas in tank, 
    //but car's odometer will only reach 600, because that's how much fits truck
    expect(focus.odometer).toBe(600)
   })
})

describe('[Exercise 7] isEvenNumberAsync',  () => {
   test('[19] resolves true if passed an even number', async () => {
    const result = await utils.isEvenNumberAsync(2)
    expect(result).toBe(true)
   })
   test('[20] resolves false if passed an odd number', async () => {
    const result = await utils.isEvenNumberAsync(3)
    expect(result).toBe(false)
   })
})
