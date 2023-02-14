using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.DTO;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LikingController : ControllerBase
    {
        private readonly ILikingService likingService;
        public LikingController(ILikingService _likingService)
        {
            likingService = _likingService;
        }
    [HttpPost]
    [ProducesResponseType(typeof(Liking), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public bool CreateLike([FromBody] Liking liking)
    {
      return likingService.CreateLike(liking);

    }

    [HttpGet]
    [ProducesResponseType(typeof(List<Liking>), StatusCodes.Status200OK)]
    public List<Liking> GetAllLikes()
    {
      return likingService.GetAllLikes();
    }

    [HttpPut]
    [ProducesResponseType(typeof(Liking), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]

    public bool UpdateLike([FromBody] Liking liking)
    {
      return likingService.UpdateLike(liking);
    }

    [HttpDelete]
    [Route("Delete/{id}")]
    public bool DeleteLike(int id)
    {
      return likingService.DeleteLike(id);
    }
    [HttpGet]
    [Route("likingvideocounter/{Videoid}")]
     public List<LikingCounterDTO> likingvideocounter(int Videoid)
     {
        return likingService.likingvideocounter(Videoid);   
     }

    [HttpGet]
    [Route("dislikevideocounter/{Videoid}")]
     public List<LikingCounterDTO> dislikevideocounter(int Videoid)
     {
        return likingService.dislikevideocounter(Videoid);   
     }


    }
}
