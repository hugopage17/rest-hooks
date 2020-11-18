import {call} from '../functions'
import {useState} from 'react'
import { setUrl } from '../redux/actions.js'

function Interface(){
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users')
  const dispatch = useDispatch()
  const changeUrl = (url) => dispatch(setUrl(user))

  const runCall = () => {
    const headers = {
      'Content-type':'application/json'
    }
    const callable = call(url,'GET',headers)
    callable.then((r)=>{
      console.log(r);
    })
  }

  return(
    <div>
      <input type='text' id='endpoint-url' class='border-input' onChange={(e)=>{
        const u = e.target.value
        setUrl(url => u)
        changeUrl(u)
      }}/>
      <button onClick={runCall} class='but-1'>Run</button>
    </div>
  )
}

export default Interface
