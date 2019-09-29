/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman()).toBe(false)
  expect(convertBytesToHuman('value')).toBe(false)
  expect(convertBytesToHuman([])).toBe(false)
  expect(convertBytesToHuman({})).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman('100')).toBe(false)
  expect(convertBytesToHuman(140.5)).toBe(false)
  expect(convertBytesToHuman({value: 4})).toBe(false)
  expect(convertBytesToHuman(-100)).toBe(false)
  expect(convertBytesToHuman([5])).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1025)).toBe('1 KB')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(1023)).toBe('1023 B')
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(-0)).toBe('0 B')
  expect(convertBytesToHuman(500)).toBe('500 B')
  expect(convertBytesToHuman(1048576)).toBe('1 MB')
  expect(convertBytesToHuman(1048577)).toBe('1 MB')
  expect(convertBytesToHuman(1048569)).toBe('1023.99 KB')
  expect(convertBytesToHuman(1085632)).toBe('1.04 MB')
  expect(convertBytesToHuman(9033940)).toBe('8.62 MB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(1073741824)).toBe('1 GB')
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB')
  expect(convertBytesToHuman(4123123123)).toBe('3.84 GB')
  expect(convertBytesToHuman(128849018880)).toBe('120 GB')
  expect(convertBytesToHuman(129385889792)).toBe('120.5 GB')
  expect(convertBytesToHuman(1.0995052e+12)).toBe('1023.99 GB')
  expect(convertBytesToHuman(1.0995117e+12)).toBe('1 TB')
  expect(convertBytesToHuman(1.319414e+13)).toBe('12 TB')
  expect(convertBytesToHuman(1.12589999e+15)).toBe('1 PB')
  expect(convertBytesToHuman(1.5762599e+15)).toBe('1.4 PB')
  expect(convertBytesToHuman(1.3510799e+16)).toBe('12 PB')
  expect(convertBytesToHuman(1.3510799e+19)).toBe('12000 PB')
  expect(convertBytesToHuman(1.5351079e+21)).toBe('1363449.71 PB')
  expect(convertBytesToHuman(13342342524543534534534536356356363635635636356)).toBe("1.1850380698546855e+31 PB")
});
