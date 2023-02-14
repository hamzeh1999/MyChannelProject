using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Thl.MyChannel.Core.data;

namespace Thl.MyChannel.core.data
{
    public class ReplayComment_
    {
        [Key]

        public int ReplayCommentId { set; get; }
        public string ReplayCommentText { set; get; }
        public DateTime ReplayCommentDate { set; get; }
        public int? UserId { set; get; }
        public int? CommentId { set; get; }

        [ForeignKey("UserId")]
        public virtual User_ User { get; set; }

        [ForeignKey("CommentId")]
        public virtual Comment_ comment { get; set; }


    }
}
