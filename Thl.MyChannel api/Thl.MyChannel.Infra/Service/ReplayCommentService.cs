using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class ReplayCommentService: IReplayCommentService
    {
        private readonly IReplayCommentRepository replayCommentRepository;
        public ReplayCommentService(IReplayCommentRepository _replayCommentRepository)
        {
            replayCommentRepository = _replayCommentRepository;
        }
        public bool CREATEREPLAYCOMMENT(ReplayComment_ replay)
        {
            return replayCommentRepository.CREATEREPLAYCOMMENT(replay);
        }
             public bool DELETEREPLAYCOMMENT(int replyId)
        {
            return replayCommentRepository.DELETEREPLAYCOMMENT(replyId);
        }
             public List<ReplayComment_> GETALLREPLAYCOMMENT()
        {
            return replayCommentRepository.GETALLREPLAYCOMMENT();
        }

            public List<ReplayCommentDTO> GetReplayComment(int pcommentId)
        {
            return replayCommentRepository.GetReplayComment(pcommentId);
        }
             public bool UPDATEREPLAYCOMMENT(ReplayComment_ replay)
        {
            return  replayCommentRepository.UPDATEREPLAYCOMMENT(replay);
        }





    }
}
