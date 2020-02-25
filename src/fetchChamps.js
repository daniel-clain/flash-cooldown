const localAzureFunctionUrl = 'http://localhost:7071/api/getChampData'
const localServerUrl = 'http://localhost:69'
const liveAzureFunctionUrl = 'https://get-champ-data.azurewebsites.net/api/getChampData'

let envUrl
switch(process.env.NODE_ENV){
  case 'development': envUrl = localAzureFunctionUrl; break;
  case 'production': envUrl = liveAzureFunctionUrl; break;
  default: alert('env var doesnt match')
}

const fetchChamps = (server, playerName) => {
  const bodyData = {server, playerName}
  return fetch(
    envUrl, 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(bodyData)
    }
  )
  .then(res => res.json())
}

export default fetchChamps