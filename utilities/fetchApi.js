import axios from 'axios';

export const url = 'bayut.p.rapidapi.com';

/*
headers: {
    'X-RapidAPI-Key': 'dea9500e07msh3f49ef33dd38b5fp154d91jsnc958bcdb6c49',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  } 
*/

// function

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'dea9500e07msh3f49ef33dd38b5fp154d91jsnc958bcdb6c49',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          } 
    })
}