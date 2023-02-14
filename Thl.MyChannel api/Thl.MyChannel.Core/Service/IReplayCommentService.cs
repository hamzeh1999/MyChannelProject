using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;

namespace Thl.MyChannel.Core.Service
{
    public interface IReplayCommentService
    {
        public bool CREATEREPLAYCOMMENT(ReplayComment_ replay);
        public bool DELETEREPLAYCOMMENT(int replyId);

        public List<ReplayComment_> GETALLREPLAYCOMMENT();
        public List<ReplayCommentDTO> GetReplayComment(int pcommentId);

        public bool UPDATEREPLAYCOMMENT(ReplayComment_ replay);
    }
}
