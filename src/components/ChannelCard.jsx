import React from 'react'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { demoProfilePicture } from '../utils/constants'
import { width } from '@mui/system'

const ChannelCard = ({ channelDetails, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: {xs: '350px', md: '320px'},
        height: '326px', 
        margin: 'auto',
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetails?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant='h6'>
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: '#ddd', ml: '5px' }} />
          </Typography>

          {
            channelDetails?.statistics?.subscriberCount && (
              <Typography>
                {
                  parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()
                }{" Subscribers"}
              </Typography>
            )
          }
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard