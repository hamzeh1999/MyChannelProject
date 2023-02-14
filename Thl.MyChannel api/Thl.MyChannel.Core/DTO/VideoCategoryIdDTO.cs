using System;
using System.Collections.Generic;
using System.Text;

namespace Thl.MyChannel.Core.DTO
{
    public class VideoCategoryIdDTO
    {
        public int videoId { set; get; }
        public string videoName { set; get; }
        public string videoPath { set; get; }
        public string videoDescription { set; get; }
        public DateTime releasedate { set; get; }
        public int? channelId { set; get; }
    }
}
