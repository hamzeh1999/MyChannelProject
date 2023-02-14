using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Thl.MyChannel.Core.data;

namespace Thl.MyChannel.core.data
{
    public class Video
    {
        [Key]

        public int VideoId { set; get; }
        public string VideoPath { set; get; }
        public string VideoName { set; get; }
        public DateTime ReleaseDate { set; get; }
        public string VideoDescription { set; get; }
        public int? channelId { set; get; }
        public int? CategoryId { set; get; }
        public ICollection<Comment_> comments { set; get; }
        public ICollection<Liking> likings { set; get; }

        [ForeignKey("channelId")]
        public virtual Channel channel { get; set; }

        [ForeignKey("CategoryId")]
        public virtual Category_ category { get; set; }



    }
}
