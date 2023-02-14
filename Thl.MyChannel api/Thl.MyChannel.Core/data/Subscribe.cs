using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace Thl.MyChannel.core.data
{
    public class Subscribe
    {
        [Key]
        public int SubscribeId { set; get; }
        public double Incomes { set; get; }
        public string SubscribeChannel { set; get; }
        public int? channelId { set; get; }
        public int? userId { set; get; }


        [ForeignKey("channelId")]
        public virtual Channel channel { get; set; }


        [ForeignKey("UserId")]
        public virtual User_ user { get; set; }
    }
}
