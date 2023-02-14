using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Thl.MyChannel.core.common;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.Infra.Repository
{
    public class LikingRepository : ILikingRepository
    {

        private readonly IDBContext DBContext;
        public LikingRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }

        public bool CreateLike(Liking liking)
        {
            var p = new DynamicParameters();
            p.Add("@like_A", liking.Like_, dbType: DbType.String);
            p.Add("@dislike_A", liking.Dislike, dbType: DbType.String);
            p.Add("@likecount_A", liking.LikeCount, dbType: DbType.Int32);
            p.Add("@userid_A", liking.UserId, dbType: DbType.Int32);
            p.Add("@videoid_A", liking.VideoId, dbType: DbType.Int32);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Liking>("liking_Package.CreateLike", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DeleteLike(int likingId)
        {
            var p = new DynamicParameters();
            p.Add("@likingID_A", likingId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Liking>("liking_Package.DeleteLike", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Liking> GetAllLikes()
        {
          IEnumerable<Liking> result = DBContext.Connection.Query<Liking>("liking_Package.GetAllLikes", commandType: CommandType.StoredProcedure);
          return result.ToList();
        }

        public bool UpdateLike(Liking liking)
        {
            var p = new DynamicParameters();
            p.Add("@likingID_A", liking.LikingId, dbType: DbType.Int32) ;
            p.Add("@like_A", liking.Like_, dbType: DbType.String);
            p.Add("@dislike_A", liking.Dislike, dbType: DbType.String);
            p.Add("@likecount_A", liking.LikeCount, dbType: DbType.Int32);
            p.Add("@userid_A", liking.UserId, dbType: DbType.Int32);
            p.Add("@videoid_A", liking.VideoId, dbType: DbType.Int32);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Liking>("liking_Package.UpdateLike", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }
        public List<LikingCounterDTO> likingvideocounter(int Videoid )
        {
            var p = new DynamicParameters();
            p.Add("@pvideoid", Videoid, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<LikingCounterDTO>("liking_Package.likingvideocounter", p, commandType: CommandType.StoredProcedure);
            return result.ToList();

        }
        public List<LikingCounterDTO> dislikevideocounter(int Videoid)
        {
            var p = new DynamicParameters();
            p.Add("@pvideoid", Videoid, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<LikingCounterDTO>("liking_Package.dislikevideocounter", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
    }
}
