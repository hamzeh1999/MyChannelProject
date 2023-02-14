using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.data;

namespace Thl.MyChannel.Core.Service
{
    public interface ICommentService
    {
        public List<Comment_> GETALLCOMMENT();
        public bool CREATECOMMENT(Comment_ comment);
        public bool UPDATECOMMENT(Comment_ comment);
        public bool DELETECOMMENT(int commentId);
        public List<UserCommentDTO> GETCOMMENTSONVEDIO(int videoId);
    }
}
