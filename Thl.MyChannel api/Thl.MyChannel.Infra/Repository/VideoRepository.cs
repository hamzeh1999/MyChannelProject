using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Thl.MyChannel.core.common;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;


namespace Thl.MyChannel.Infra.Repository
{
    public class VideoRepository : IVideoRepository
    {
        private readonly IDBContext DBContext;
        public VideoRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }
        public bool CREATEVIDEO(Video video)
        {
            var p = new DynamicParameters();
            p.Add("@pVideoname", video.VideoName, dbType: DbType.String);
            p.Add("@pVideopath", video.VideoPath, dbType: DbType.String);
            p.Add("@pReleaseDate", video.ReleaseDate, dbType: DbType.DateTime);
            p.Add("@pVideoDescription", video.VideoDescription, dbType: DbType.String);
            p.Add("@pChannelId", video.channelId, dbType: DbType.Int32);
            p.Add("@pCategoryId", video.CategoryId, dbType: DbType.Int32);

            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Video>("VIDEO_PACKAGE.CREATEVIDEO", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DELETEVIDEO(int VideoId)
        {
            var p = new DynamicParameters();
            p.Add("@pVideoId", VideoId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Video>("VIDEO_PACKAGE.DELETEVIDEO", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Video> GETALLVIDEO()
        {
            IEnumerable<Video> result = DBContext.Connection.Query<Video>("VIDEO_PACKAGE.GETALLVIDEO", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

      



        public List<Video> GETALLVIDEOBYCHANNELID(int channelId )
        {
            var p = new DynamicParameters();
            p.Add("@pChannelId", channelId, dbType: DbType.Int32);
            IEnumerable<Video> result = DBContext.Connection.Query<Video>("VIDEO_PACKAGE.GETALLVIDEOBYCHANNELID",p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }






        public bool UPDATEVIDEO(Video video)
        {
            var p = new DynamicParameters();
            p.Add("@pVideoId", video.VideoId, dbType: DbType.Int32);
            p.Add("@pVideoname", video.VideoName, dbType: DbType.String);
            p.Add("@pVideopath", video.VideoPath, dbType: DbType.String);
            p.Add("@pReleaseDate", video.ReleaseDate, dbType: DbType.DateTime);
            p.Add("@pVideoDescription", video.VideoDescription, dbType: DbType.String);
            p.Add("@pChannelId", video.channelId, dbType: DbType.Int32);
            p.Add("@pCategoryId", video.CategoryId, dbType: DbType.Int32);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Video>("VIDEO_PACKAGE.UPDATEVIDEO", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public List<Video> getVideosByCategoryId(int id)
        {
            var p = new DynamicParameters();
            p.Add("@categoryId_A  ", id, dbType: DbType.Int32);
            IEnumerable<Video> result = DBContext.Connection.Query<Video>("Channel_Package.getVideosByCategoryId", p, commandType: CommandType.StoredProcedure);
            return result.ToList();

        }








    }
}
