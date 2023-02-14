using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;

namespace Thl.MyChannel.core.Repository
{
    public interface IReplayCommentRepository
    {
       bool CREATEREPLAYCOMMENT(ReplayComment_ replay);
       bool UPDATEREPLAYCOMMENT(ReplayComment_ replay);
        bool DELETEREPLAYCOMMENT(int replyId);
        List<ReplayComment_> GETALLREPLAYCOMMENT();
        List<ReplayCommentDTO> GetReplayComment( int pcommentId);
        
    }
}
