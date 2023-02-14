using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.Core.Service
{
    public interface IVideoService
    {
        bool CREATEVIDEO(Video video);
        bool UPDATEVIDEO(Video video);
        bool DELETEVIDEO(int VideoId);
        List<Video> GETALLVIDEO();
        List<Video> GETALLVIDEOBYCHANNELID(int channelId);
        List<Video> getVideosByCategoryId(int id);

    }
}
