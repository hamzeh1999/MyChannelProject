using System;
using System.Collections.Generic;
using System.Text;

using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.core.common;
using Dapper;
using System.Data;
using System.Linq;

namespace Thl.MyChannel.Infra.Repository
{
    public class ReplayCommentRepository : IReplayCommentRepository
    {


        private readonly IDBContext DBContext;
        public ReplayCommentRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }



        public bool CREATEREPLAYCOMMENT(ReplayComment_ replay)
        {
            var p = new DynamicParameters();
            p.Add("@pReplayCommentText", replay.ReplayCommentText, dbType: DbType.String);
            p.Add("@pReplayCommentDate", replay.ReplayCommentDate, dbType: DbType.DateTime);
            p.Add("@pUserId", replay.UserId, dbType: DbType.Int32);
            p.Add("@pCommentId", replay.CommentId, dbType: DbType.Int32);

            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<ReplayComment_>("REPLAYCOMMENT_PACKAGE.CREATEREPLAYCOMMENT", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DELETEREPLAYCOMMENT(int replyId)
        {
            var p = new DynamicParameters();
            p.Add("@pReplayCommentId", replyId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<ReplayComment_>("REPLAYCOMMENT_PACKAGE.DELETEREPLAYCOMMENT", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<ReplayComment_> GETALLREPLAYCOMMENT()
        {
            IEnumerable<ReplayComment_> result = DBContext.Connection.Query<ReplayComment_>("REPLAYCOMMENT_PACKAGE.GETALLREPLAYCOMMENT ", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public List<ReplayCommentDTO> GetReplayComment(int pcommentId)
        {
            var p = new DynamicParameters();
            p.Add("@pCommentId", pcommentId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<ReplayCommentDTO>("REPLAYCOMMENT_PACKAGE.GetReplayComment", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UPDATEREPLAYCOMMENT(ReplayComment_ replay)
        {
            var p = new DynamicParameters();
            p.Add("@pReplayCommentId", replay.ReplayCommentId, dbType: DbType.Int32);
            p.Add("@pReplayCommentText", replay.ReplayCommentText, dbType: DbType.String);
            p.Add("@pReplayCommentDate", replay.ReplayCommentDate, dbType: DbType.DateTime);
            p.Add("@pUserId", replay.UserId, dbType: DbType.Int32);
            p.Add("@pCommentId", replay.CommentId, dbType: DbType.Int32);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<ReplayComment_>("REPLAYCOMMENT_PACKAGE.UPDATEREPLAYCOMMENT", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }
    }
}
