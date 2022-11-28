import {useState, useEffect} from 'react'

import "../NewPost.css"

import TextEditor from '../components/TextEditor';

export default function NewPost() {

  const [title, setTitle] = useState('')
  const description = useState('')

  const handleSubmit = () => {

    /* const file = e.target[0]?.files[0] */

    /*
    if (!file){
      alert("Vali pilt!");
      return;
    }
    */

    console.log(title)
    console.log(description)
    
  }
  
  return (
    <form onSubmit={handleSubmit} className='newPost' name='newPost'>
      <h2>Uus arutelu</h2>
        <input 
          type='tekst' 
          name='pealkiri' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Sisesta pealkiri'/>

          <TextEditor />
          
          <p>Lisa postituse failid: </p>
          <input type="file" id="myFile" name="filename"></input>
        <button type='submit'>Postita</button>
      </form>
  )
}