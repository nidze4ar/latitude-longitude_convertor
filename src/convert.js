const formatNull = number => number.toString().length < 2 ? '0' + number.toString() : number

export const convertDMCtoDec = str => {
  if(str.replace(/\_/g, '').length > 5) {
  let amd = str.replace(/\_/g, '0').match(/\b\d+\b/g).map(v => new Number(v) ) // angularMinuteDigits
  amd[1] = formatNull(Math.floor( (amd[1] / 60) * 100) )
  amd[2] = formatNull(Math.floor( (amd[2] / 60) * 100) )
  amd[3] = amd[3].toString().length < 2? '00' + amd[3].toString(): amd[3].toString().length < 3? '0' + amd[3].toString() : amd[3]
  return `${str[0]}${amd[0]}.${amd[1]}${amd[2]}${amd[3]}`
  } else {
    return ''
  }
}

export const convertDectoDMC = str => {    
  if(str.replace(/\_/g, '').length > 4) {    
  let fr = str.replace(/\_/g, '0').slice(1).match(/\b\d+\b/g)[1] // fractionalRemainder
  let asec = Math.floor( (+fr.slice(0, 4) / 10000) * 3600) // angularSecunds
  let famin = formatNull(Math.floor(asec / 60) ) //formatedAngularMin
  let frasec = formatNull(asec - famin * 60 ) // formatedRemainderAngularSecunds
  return `${str[0]}${str.match(/\b\d+\b/g)[0]}°${famin}′${frasec}.${fr.slice(4)}′′` 
  } else {
    return ''
  }
}

