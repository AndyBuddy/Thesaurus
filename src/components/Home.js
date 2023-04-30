import { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

// const getSynonyms = () => {
//     return axios.get(`https://api.datamuse.com/words?ml=${word}`)
// }

export const Home = () => {
    const [word, setWord] = useState('')

    const { /*isLoading,*/ data, /*isFetching,*/ isError, error, refetch } = useQuery('synonym',   
    () => {
        return axios.get(`https://api.datamuse.com/words?ml=${word}`,
        )
    })

    if(isError) {
        return <h2>{error.message}</h2>
    }

    // if(isLoading) {
    //     return <h2>Booting up Thesaurus...</h2>
    // }

    // if(isFetching) {
    //     return <h2>Getting them cinnamons</h2>
    // }


    return (
      <div>
        <div className='enter-text'>
          Enter text below
          <input className='search-input'
            placeholder='HERE'
            type='text' 
            value={word}
            onChange={(e) => setWord(e.target.value)}
            />
            <button onClick={refetch} className='submit-button'>Submit</button>
        </div>
            
            <div className='results'>
            { 
                data?.data.map(words => {
                    return <div className='result-item' key={words.word}>{words.word}</div>
                })
            }
            </div>
      </div>
    )
  }
  