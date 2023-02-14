using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace Thl.MyChannel.core.data
{
   public class BadReport_ 
    {

        [Key]
        public int ReportId { set; get; }
        public string ReportText { set; get; }
        public int? ChannelId { set; get; }

        [ForeignKey("ChannelId")]
        public virtual Channel channel { get; set; }
      

    }
}
