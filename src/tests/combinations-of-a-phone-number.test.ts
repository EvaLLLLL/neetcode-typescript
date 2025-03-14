import { combinationsOfAPhoneNumber } from '../problems/combinations-of-a-phone-number'

describe('combinations-of-a-phone-number', () => {
  test('empty string returns empty array', () => {
    expect(combinationsOfAPhoneNumber('')).toEqual([])
  })

  test('single digit returns its mapped letters', () => {
    expect(combinationsOfAPhoneNumber('2')).toEqual(['a', 'b', 'c'])
    expect(combinationsOfAPhoneNumber('5')).toEqual(['j', 'k', 'l'])
  })

  test('two digits returns all combinations', () => {
    expect(combinationsOfAPhoneNumber('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf'
    ])
  })

  test('three digits returns all combinations', () => {
    expect(combinationsOfAPhoneNumber('234')).toEqual([
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi'
    ])
  })

  test('handles digits 7 and 9 with 4 letters', () => {
    expect(combinationsOfAPhoneNumber('79')).toEqual([
      'pw',
      'px',
      'py',
      'pz',
      'qw',
      'qx',
      'qy',
      'qz',
      'rw',
      'rx',
      'ry',
      'rz',
      'sw',
      'sx',
      'sy',
      'sz'
    ])
  })
})
