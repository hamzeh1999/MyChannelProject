using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.core.Repository
{
    public interface IVideoRepository
    {
        bool CREATEVIDEO(Video video);
        bool UPDATEVIDEO(Video video);
        bool DELETEVIDEO(int VideoId);
        List<Video> GETALLVIDEO();
        List<Video> GETALLVIDEOBYCHANNELID(int channelId);
        List<Video> getVideosByCategoryId(int id);

    }
}
