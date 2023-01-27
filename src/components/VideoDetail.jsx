import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromApi';
import Videos from './Videos';

const VideoDetail = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        console.log(data)
        setVideoDetail(data?.items[0]);
      })

    fetchFromAPI(`search?part=snippet&realatedToVideoId=${id}&type=video`)
      .then((data) => {
        console.log(data)
        setVideos(data?.items);
      })
  }, [id])

  if (!videoDetail?.snippet) return 'Loading...';
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail ?? {};
  return (
    <Box minHeight={'95vh'}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticy', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls
            />
            <Typography color={"#fff"} variant="h5" fontWeight={"bold"} p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} sx={{ color: "#fff" }} py={1} px={2}>
              <Typography variant={{ sm: 'subtitle1', md: 'h6' }}>
                {channelTitle}
                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
              </Typography>
              <Stack direction={"row"} gap={"20px"} alignItems="center">
                <Typography variant='body1' sx={{ opacity: '0.7' }}>
                  {parseInt(viewCount).toLocaleString()} view
                </Typography>
                <Typography variant='body1' sx={{ opacity: '0.7' }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems={"center"}>
          <Videos videos={videos} direction={"column"} />
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail