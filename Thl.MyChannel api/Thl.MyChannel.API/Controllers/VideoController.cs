using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        private readonly IVideoService videoService;
        public VideoController(IVideoService _videoService)
        {
            videoService = _videoService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(Video), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool CREATEVIDEO([FromBody]Video video)
        {
            return videoService.CREATEVIDEO(video);

        }


        [HttpGet]
        [ProducesResponseType(typeof(List<Video>), StatusCodes.Status200OK)]
        public List<Video> GETALLVIDEO()
        {
            return videoService.GETALLVIDEO();
        }


        [HttpPut]
        [ProducesResponseType(typeof(Video), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public bool UPDATEVIDEO([FromBody] Video video)
        {
            return videoService.UPDATEVIDEO(video);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public bool DELETEVIDEO(int id)
        {
            return videoService.DELETEVIDEO(id);
        }
        [HttpGet]
        [ProducesResponseType(typeof(Video), StatusCodes.Status200OK)]
        [Route("GETALLVIDEOBYCHANNELID/{channelId}")]
        public List<Video> GETALLVIDEOBYCHANNELID(int channelId)
        {
            return videoService.GETALLVIDEOBYCHANNELID(channelId);
        }


        [HttpPost]
        [Route("UploadVideo")]
        public Video UploadVideo()
        {
            try
            {
                var video = Request.Form.Files[0];
                var videoPath = Guid.NewGuid().ToString() + "_" + video.FileName;
           
             var FullPath = Path.Combine("C:\\Users\\user\\Desktop\\finalAnwar\\finalAnwar\\src\\assets\\Video", videoPath);
                using (var stream = new FileStream(FullPath, FileMode.Create))
                {
                    video.CopyTo(stream);
                }
                Video video1 = new Video();
                video1.VideoPath = videoPath;
                return video1;
            }
            catch
            {
                return null;
            }
          


        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Video>), StatusCodes.Status200OK)]
        [Route("getVideosByCategoryId/{id}")]
        public List<Video> getVideosByCategoryId(int id)
        {
            return videoService.getVideosByCategoryId(id);
        }










    }
}
