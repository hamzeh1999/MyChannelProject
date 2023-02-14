using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Thl.MyChannel.core.common;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.data;
using Thl.MyChannel.Core.Repository;

namespace Thl.MyChannel.Infra.Repository
{ 
  public class CommentRepository : ICommentRepository
  {
    private readonly IDBContext DBContext;
    public CommentRepository(IDBContext _DBContext)
    {
      DBContext = _DBContext;
    }

    public bool CREATECOMMENT(Comment_ comment)
    {
      var p = new DynamicParameters();
      p.Add("@pCommentText", comment.CommentText, dbType: DbType.String);
      p.Add("@pCommentDate", comment.CommentDate, dbType: DbType.DateTime);
      p.Add("@pUserId", comment.UserId, dbType: DbType.Int32);
      p.Add("@pVideoId", comment.videoId, dbType: DbType.Int32);
      // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
      var result = DBContext.Connection.Query<Comment_>("COMMENT_PACKAGE.CREATECOMMENT", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
      return true;
    }

    public bool DELETECOMMENT(int id)
    {
      var p = new DynamicParameters();
      p.Add("@pCommentId", id, dbType: DbType.Int32);
      var result = DBContext.Connection.Query<Comment_>("COMMENT_PACKAGE.DELETECOMMENT", p, commandType: CommandType.StoredProcedure);
      return true;
    }

    public List<Comment_> GETALLCOMMENT()
    {
      // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
      //بستدعي البكج يلي بالداتابيز ك ليست
      IEnumerable<Comment_> result = DBContext.Connection.Query<Comment_>("COMMENT_PACKAGE.GETALLCOMMENT", commandType: CommandType.StoredProcedure);
      return result.ToList();
    }

    public List<UserCommentDTO> GETCOMMENTSONVEDIO(int videoId)
    {
      var p = new DynamicParameters();
      p.Add("@pVideoId  ", videoId, dbType: DbType.Int32);
      IEnumerable<UserCommentDTO> result = DBContext.Connection.Query<UserCommentDTO>("COMMENT_PACKAGE.GETCOMMENTSONVEDIO", p, commandType: CommandType.StoredProcedure);
      return result.ToList();
    }

    public bool UPDATECOMMENT(Comment_ comment)
    {
      var p = new DynamicParameters();
      p.Add("@pCommentId", comment.CommentId, dbType: DbType.Int32);
      p.Add("@pCommentText", comment.CommentText, dbType: DbType.String);
      p.Add("@pCommentDate", comment.CommentDate, dbType: DbType.DateTime);
      p.Add("@pUserId", comment.UserId, dbType: DbType.Int32);
      p.Add("@pVideoId", comment.videoId, dbType: DbType.Int32);
      // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
      var result = DBContext.Connection.Query<Comment_>("COMMENT_PACKAGE.UPDATECOMMENT", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
      return true;
    }
  }
}
