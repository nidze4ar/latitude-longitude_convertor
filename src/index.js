import React, {useState, Fragment} from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import IOSSwitch from './IOSSwitch'
import Output from './Output'
import Input from './Input'
import {convertDMCtoDec, convertDectoDMC} from './convert'

const maskLat = {
  dms: "+99°59′59.9999′′",
  dec: "+99.9999999"
}
const maskLong = {
  dms: "+189°59′59.9999′′",
  dec: "+189.9999999"
}
const placeholderLat = {
  dms: "+/-79°59′59.9999′′",
  dec: "+/-79.9999999"
}
const placeholderLong = {
  dms: "+/-179°59′59.9999′′",
  dec: "+/179.9999999"
}

const App = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [outputData, setOutputData] = useState({lat: {dec: '', dmc: ''}, long: {dec: '', dmc: ''}})
  const [formatInput, setFormatInput] = useState('dec')
  const switchFormatInput = () => setFormatInput(formatInput === 'dec' ? 'dms' : 'dec')
  const inputLatitude = (value) => {
    setLatitude(value)
    done()
  }
  const inputLongitude = (value) => {
    setLongitude(value)
    done()
  }
  const done = () => {
    setOutputData({
      lat: {
        dec: /°/.test(latitude)? convertDMCtoDec(latitude) : latitude, 
        dms: /°/.test(latitude)? latitude : convertDectoDMC(latitude)
      },
      long: {
        dec: /°/.test(longitude)? convertDMCtoDec(longitude) : longitude,
        dms: /°/.test(longitude)? longitude : convertDectoDMC(longitude)
      }
    }) 
  }
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <form style={{width: '80%', margin: '70px auto'}}>
       <p>Широта</p>
       <Input mask={maskLat[formatInput]} handleChange={inputLatitude} placeholder={placeholderLat[formatInput]} value={latitude} />
       <p>Долгота</p>
       <Input mask={maskLong[formatInput]} handleChange={inputLongitude} placeholder={placeholderLong[formatInput]} value={longitude} />
      </form>
      <IOSSwitch handleSwitch={switchFormatInput} checked={formatInput === 'dec' ? true : false} />
      <p>Введите долготу и широту в {formatInput === 'dec' ? 'цифровом' : 'угловом'} формате.</p>
      <Output data={outputData} />
    </Container>
  </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));



