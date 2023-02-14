using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace Thl.MyChannel.core.data
{
    public class Liking
    {
        [Key]
        public int LikingId { set; get; }
        public string Like_ { set; get; }
        public string Dislike { set; get; }
        public int LikeCount { set; get; }
        public int? UserId { set; get; }
        public int? VideoId { set; get; }



        [ForeignKey("UserId")]
        public virtual User_ User { get; set; }


        [ForeignKey("VideoId")]
        public virtual Video video{get; set;  }
    }
}
