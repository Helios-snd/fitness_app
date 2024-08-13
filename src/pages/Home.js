import React, {useState} from 'react'
import { Box }  from '@mui/material'

import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'


function Home(){

  const [bodyPart, setBodyPart] =useState('all')
  const [exercises, setExercises] =useState([])


  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises}
      bodypart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises 
       setExercises={setExercises}
       bodypart={bodyPart}
       setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home




