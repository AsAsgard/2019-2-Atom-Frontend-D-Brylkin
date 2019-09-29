/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

const index_to_prefix = {
  0: 'B',
  1: 'KB',
  2: 'MB',
  3: 'GB',
  4: 'TB',
  5: 'PB'
}

export default function convertBytesToHuman(bytes) {
  // your solution goes here
  if (!Number.isInteger(bytes) || bytes < 0) {
    return false
  }

  if (bytes === 0) {
    return "0 B";
  }

  let prefix_index = Math.floor(Math.log2(bytes) / 10)
  prefix_index = prefix_index > 5 ? 5 : prefix_index
  return (Math.round(
         (bytes / Math.pow(2, prefix_index * 10)) * 100
         ) / 100)
    .toString()
    + ' '
    + index_to_prefix[prefix_index.toString()]
}
