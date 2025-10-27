import './App.css'
import { useState, useCallback, useEffect, useRef } from "react"

function App() {





  

  const [length, setLength] = useState(8);
  const [numberAllow, setnumberAllow] = useState(false);
  const [characterAll, setcharacterAll] = useState(false);
  const [password, setPassword] = useState("");

  // using use ref for copy btn ---
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) string += "0123456789"
    if (characterAll) string += "@#!$%&|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllow, characterAll, setPassword,])

  const copyPassword = useCallback(() => {
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, characterAll, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-900 py-4 text-center'>
        <h1 className='my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='password'
            readOnly
            ref={passwordref}
          />
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 shrink-0 bold'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>

          <div className=' flex items-center gap-x-1'>
            <input type="range" min={8} max={100} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label> Length: {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllow}
              id='numberInput'
              onChange={() => {
                setnumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={characterAll}
              id='characterInput'
              onChange={() => {
                setcharacterAll((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput"> Character</label>
          </div>
        </div>
      </div>

    </>

  )

}

export default App
