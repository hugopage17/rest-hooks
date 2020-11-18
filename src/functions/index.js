export const call = async(url, method, headers) => {
  let response = await fetch(url,{method:method,headers:headers})
  let data = await response.json()
  return data
}
