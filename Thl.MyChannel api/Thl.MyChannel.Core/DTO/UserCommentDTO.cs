using System;
using System.Collections.Generic;
using System.Text;

namespace Thl.MyChannel.core.DTO
{
    public class UserCommentDTO
    {
        public int commentId { get; set; }
        public string commenttext { get; set; }
        public DateTime commentdate { get; set; }
        public string username { get; set; }
        public string userImage { get; set; }

        public int videoId { get; set; }




    }
}
