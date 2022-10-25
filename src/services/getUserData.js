const getUserData = async () => {
  const response = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=60bb2003028e4dea9b77f672cef6acfc')
  if (!response.ok) return console.log('response not ok')
  return response.json()
}

export default getUserData
