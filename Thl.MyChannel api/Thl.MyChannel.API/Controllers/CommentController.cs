using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.data;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CommentController : ControllerBase
  {
    private readonly ICommentService commentService;
    public CommentController(ICommentService _commentService)
    {
      commentService = _commentService;
    }

    [HttpPost]
    [ProducesResponseType(typeof(Comment_), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public bool CREATECOMMENT([FromBody] Comment_ comment)
    {
      return commentService.CREATECOMMENT(comment);

    }

    [HttpGet]
    [ProducesResponseType(typeof(List<Comment_>), StatusCodes.Status200OK)]
    public List<Comment_> GETALLCOMMENT()
    {
      return commentService.GETALLCOMMENT();
    }

    [HttpPut]
    [ProducesResponseType(typeof(Comment_), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]

    public bool UPDATECOMMENT([FromBody] Comment_ comment)
    {
      return commentService.UPDATECOMMENT(comment);
    }

    [HttpDelete]
    [Route("Delete/{id}")]
    public bool DELETECOMMENT(int id)
    {
      return commentService.DELETECOMMENT(id);
    }

    [HttpGet]
    [Route("GETCOMMENTSBYID/{id}")]
    [ProducesResponseType(typeof(List<UserCommentDTO>), StatusCodes.Status200OK)]
    public List<UserCommentDTO> GETCOMMENTSONVEDIO(int id)
    {
      return commentService.GETCOMMENTSONVEDIO(id);
    }
  }
}
