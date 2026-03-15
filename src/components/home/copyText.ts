export function copyText(value: string) {
  if (typeof navigator.clipboard?.writeText === 'function') {
    return navigator.clipboard.writeText(value)
  }

  const input = document.createElement('input')
  input.style.position = 'absolute'
  input.style.left = '-1000px'
  input.value = value
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  input.remove()
  return Promise.resolve()
}
