using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class VideoService : IVideoService
    {
        private readonly IVideoRepository videoRepository;

        public VideoService(IVideoRepository _videoRepository)
        {
            videoRepository = _videoRepository;
        }
        public bool CREATEVIDEO(Video video)
        {
            return videoRepository.CREATEVIDEO(video);
        }

        public bool DELETEVIDEO(int VideoId)
        {
            return videoRepository.DELETEVIDEO(VideoId);
        }

        public List<Video> GETALLVIDEO()
        {
            return videoRepository.GETALLVIDEO();
        }

        public bool UPDATEVIDEO(Video video)
        {
            return videoRepository.UPDATEVIDEO(video);
        }
        public List<Video> GETALLVIDEOBYCHANNELID(int channelId)
        {
            return videoRepository.GETALLVIDEOBYCHANNELID(channelId);
        }
        public List<Video> getVideosByCategoryId(int id)
        {
            return videoRepository.getVideosByCategoryId(id);
        }
       
    }
}
