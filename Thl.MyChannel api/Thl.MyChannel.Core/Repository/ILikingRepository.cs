using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.core.Repository
{
    public interface ILikingRepository
    {
        List<Liking> GetAllLikes();
        bool UpdateLike(Liking liking);
        bool DeleteLike(int likingId );
        bool CreateLike(Liking liking);
        List<LikingCounterDTO> likingvideocounter(int Videoid);
        public List<LikingCounterDTO> dislikevideocounter(int Videoid);
    }
}
