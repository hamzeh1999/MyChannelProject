using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace Thl.MyChannel.core.data
{
    public class Notification_
    {
        [Key]
        
        public int NotificationId { set; get; }
        public string NotificationText { set; get; }
        public DateTime NotificationDate { set; get; }
        public int? UserId { set; get; }

        [ForeignKey("UserId")]
        public virtual User_ User { get; set; }


    }
}
