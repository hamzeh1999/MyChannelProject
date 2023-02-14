using System;
using System.Collections.Generic;
using System.Text;

namespace Thl.MyChannel.Core.DTO
{
    public class ChannelUserDTO
    {
        public int ChannelID { set; get; }
        public string Channelname { set; get; }
        public string ChannelImage { set; get; }
        public DateTime? Channeldate { set; get; }
        public int userId { get; set; }
        public string userImage { get; set; }
        public string userName { get; set; }
        public string addressUser{get; set;}
        public string channeldescription { get; set;}



    }
}
