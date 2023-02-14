using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Thl.MyChannel.Core.data;

namespace Thl.MyChannel.core.data
{
    public class User_
    {
        [Key]

        public int UserId { set; get; }
        public string UserName { set; get; }

        public string UserImage { set; get; }
        public int UserAge { set; get; }
        public string AddressUser { set; get; }
        public DateTime RegisterDate { set; get; }
        public string Email { set; get; }
        public string Password_ { set; get; }
        public int? roleId { set; get; }


        public ICollection<Comment_> comments { set; get; }
        public ICollection<Channel> channels { set; get; }
        public ICollection<Liking> likings { set; get; }
        public ICollection<Notification_> notifications { set; get; }
        public ICollection<ReplayComment_> replyComments { set; get; }
        public ICollection<Subscribe> subscribes { set; get; }
        public ICollection<Testimonial> Testimonials { set; get; }


        [ForeignKey("RoleId")]
        public virtual Role_ role { get; set; }




    }
}
