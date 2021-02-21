export const generateRandomArray = () => {
  const arr = new Set();

  function addNewValue() {
    const number = Math.random() * 151
    arr.add(Math.round(number))
  }

  while(arr.size < 15) {
    addNewValue()
  }

  return [...arr]
}