import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { Videos } from './'

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);

  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data?.items ?? [])
    })
  }, [searchTerm])
  return (
    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: '2' }}>
      <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{
        color: 'white'
      }}>
        Search Results for: <span
          style={{
            color: '#F31503'
          }}
        >
          {searchTerm}
        </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed