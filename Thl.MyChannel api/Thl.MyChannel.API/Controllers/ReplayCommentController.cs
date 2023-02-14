using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ReplayCommentController : ControllerBase
  {
    private readonly IReplayCommentService replayCommentService;
    public ReplayCommentController(IReplayCommentService _replayCommentService)
    {
      replayCommentService = _replayCommentService;
    }
    [HttpPost]
    [ProducesResponseType(typeof(ReplayComment_), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public bool CREATEREPLAYCOMMENT([FromBody] ReplayComment_ replayComment_)
    {
      return replayCommentService.CREATEREPLAYCOMMENT(replayComment_);

    }

    [HttpGet]
    [ProducesResponseType(typeof(List<ReplayComment_>), StatusCodes.Status200OK)]
    public List<ReplayComment_> GETALLREPLAYCOMMENT()
    {
      return replayCommentService.GETALLREPLAYCOMMENT();
    }

    [HttpPut]
    [ProducesResponseType(typeof(ReplayComment_), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]

    public bool UPDATEREPLAYCOMMENT([FromBody] ReplayComment_ replayComment_)
    {
      return replayCommentService.UPDATEREPLAYCOMMENT(replayComment_);
    }

    [HttpDelete]
    [Route("Delete/{id}")]
    public bool DELETEREPLAYCOMMENT(int id)
    {
      return replayCommentService.DELETEREPLAYCOMMENT(id);
    }

    [HttpGet]
    [Route("GetReplayComment/{id}")]
    [ProducesResponseType(typeof(List<ReplayCommentDTO>), StatusCodes.Status200OK)]
    public List<ReplayCommentDTO> GetReplayComment(int id)
    {
      return replayCommentService.GetReplayComment(id);
    }
  }
}
