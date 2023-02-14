using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.Core.data
{
  public class Comment_
  {
    
      [Key]
      public int CommentId { set; get; }
      public string CommentText { set; get; }
      public DateTime CommentDate { set; get; }
      public int? UserId { set; get; }
      public int? videoId { set; get; }


      [ForeignKey("videoId")]
      public virtual Video video { get; set; }

      [ForeignKey("UserId")]
      public virtual User_ user { get; set; }

      public ICollection<ReplayComment_> replyComments { set; get; }



    
  }
}
