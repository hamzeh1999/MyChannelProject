using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Thl.MyChannel.core.data
{
    public class Channel
    {
        [Key]
        public int ChannelId { set; get; }
        public string ChannelName { set; get; }
        public DateTime ChannelDate { set; get; }
        public string ChannelDescription { set; get; }
        public string ChannelImage { set; get; }

        public int? UserId { set; get; }
        public int? CategoryId { set; get; }

        public ICollection<BadReport_> badReports { set; get; }
        public ICollection<Video> videos { set; get; }
        public ICollection<Subscribe> subscribes { set; get; }
 

        [ForeignKey("CategoryId")]
        public virtual Category_ category { get; set; }

        [ForeignKey("UserId")]
        public virtual User_ user { get; set; }

     



    }
}
