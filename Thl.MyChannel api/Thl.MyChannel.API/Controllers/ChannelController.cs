using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.DTO;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChannelController : ControllerBase
    {
        private readonly IChannelService channelService;
        public ChannelController(IChannelService _channelService)
        {
            channelService = _channelService;
        }


        [HttpPost]
        [Route("UploadImg")]
        public Channel UploadImage()
        {
            try
            {
                var Image = Request.Form.Files[0];
                var ImageName = Guid.NewGuid().ToString() + "_" + Image.FileName;
                var FullPath = Path.Combine("C:\\Users\\user\\Desktop\\finalAnwar\\finalAnwar\\src\\assets\\images", ImageName);
                using (var stream = new FileStream(FullPath, FileMode.Create))
                {
                    Image.CopyTo(stream);
                }
                Channel channel1 = new Channel();
                channel1.ChannelImage = ImageName;
                return channel1;




            }
            catch
            {
                return null;
            }


        }









        [HttpPost]
        [ProducesResponseType(typeof(Channel), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool CREATECATEGORY([FromBody] Channel channel)
        {
            return channelService.CreateChannel(channel);

        }


        [HttpGet]
        [ProducesResponseType(typeof(List<Channel>), StatusCodes.Status200OK)]
        public List<Channel> GetAllChannels()
        {
            return channelService.GetAllChannels();
        }


        [HttpPut]
        [ProducesResponseType(typeof(Channel), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public bool UpdateChannel([FromBody]Channel channel)
        {
            return channelService.UpdateChannel(channel);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public bool DeleteChannel(int id)
        {
            return channelService.DeleteChannel(id);
        }
        [HttpPost]
        [ProducesResponseType(typeof(List<ChannelSearchingDTO>), StatusCodes.Status200OK)]
        [Route("SearchingChannel")]
        public List<ChannelSearchingDTO> SearchingChannel(ChannelSearchingCallDTO channel)
        {
            return channelService.SearchingChannel(channel);
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<ChannelSearchingDTO>), StatusCodes.Status200OK)]
        [Route("getChannelByUserID/{userId}")]
        public List<Channel> getChannelByUserID(int userId)
        {
            return channelService.getChannelByUserID(userId);

        }
        [HttpGet]
        [ProducesResponseType(typeof(List<Channel>), StatusCodes.Status200OK)]
        [Route("getChannelByCategoryId/{id}")]
        public List<Channel> SearchingChannelByCategoryId(int id)
        {
            return channelService.SearchingChannelByCategoryId(id);
        }

        [HttpGet]
        [Route("getChannelById/{channelId}")]
        public List<ChannelUserDTO> getChannelById(int channelId)
        {
            return channelService.getChannelById(channelId);
        }



    }

}
