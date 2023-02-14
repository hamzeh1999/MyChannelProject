using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.data;
using Thl.MyChannel.Core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
  public class CommentService : ICommentService
  {
    private readonly ICommentRepository commentRepository;

    public CommentService(ICommentRepository _commentRepository)
    {
      commentRepository = _commentRepository;
    }

    public bool CREATECOMMENT(Comment_ comment)
    {
      return commentRepository.CREATECOMMENT(comment);
    }

    public bool DELETECOMMENT(int commentId)
    {
      return commentRepository.DELETECOMMENT(commentId);
    }

    public List<Comment_> GETALLCOMMENT()
    {
      return commentRepository.GETALLCOMMENT();
    }

    public List<UserCommentDTO> GETCOMMENTSONVEDIO(int videoId)
    {
      return commentRepository.GETCOMMENTSONVEDIO(videoId);
    }

    public bool UPDATECOMMENT(Comment_ comment)
    {
      return commentRepository.UPDATECOMMENT(comment);
    }
  }
}
