using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.data;

namespace Thl.MyChannel.Core.Repository
{
  public interface ICommentRepository
  {
    bool CREATECOMMENT(Comment_ comment);
    //read
    List<Comment_> GETALLCOMMENT();
    //update 
    bool UPDATECOMMENT(Comment_ comment);
    //delete
    bool DELETECOMMENT(int id);
    List<UserCommentDTO> GETCOMMENTSONVEDIO(int videoId);
  }
}
