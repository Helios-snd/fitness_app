import React,{ useEffect, useState } from 'react'
import{ Box, Button, TextField, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('')
 
  const[bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const bodypartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',  exerciseOptions)

      setBodyParts(['all',...bodypartsData])
    }

    fetchExercisesData();
  }, [])

  const handleSearch = async()=>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',  exerciseOptions);

      const SearchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        ||exercise.target.toLowerCase().includes(search)
        ||exercise.equipment.toLowerCase().includes(search)
        ||exercise.bodyPart.toLowerCase().includes(search)
        ||exercise.name.toLowerCase().includes(search)
      )

      setSearch('')
      setExercises(SearchedExercises)
      console.log(exercisesData);
      
    }
  }




  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:"30px"}}} textAlign="center" mb="50px">
      Awesoma exercises you <br />
      should know
    </Typography>
      <Box position="relative" mb="73px">
        <TextField 
        sx={{
          input:{
            fontWeight:'700', border:'none', borderRadius:'4px'},
            width:{lg:'1170px', xs:'350px'},
            backgroundcolor:"#fff",
            borderRadius:'40px'
            
        }}
        height="76px"
        value = {search}
        placeholder='Search Exercises'
        onChange={(e) =>setSearch(e.target.value.toLowerCase())}
        type='text'
        />


        <Button className='search-btn'
        sx={{
          bgcolor:'#FF2625',
          color:'#fff',
          textTransform:'none',
          width:{ lg:'175px', xs:'80px' },
          fontSize:{ lg:'20px', xs:'14px' },
          height:'56px',
          position:'absolute',
          right:'0'
        }}
        onClick={handleSearch}
        >
          Search
        </Button>

      </Box>


      <Box sx={{position:'relative', width:'100%', p:'20%'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises