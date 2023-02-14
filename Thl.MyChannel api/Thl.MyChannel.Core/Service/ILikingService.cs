using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.Core.Service
{
    public interface ILikingService
    {

        public bool CreateLike(Liking liking);
        public bool UpdateLike(Liking liking);
        public bool DeleteLike(int likingId);
        public List<Liking> GetAllLikes();

        public List<LikingCounterDTO> likingvideocounter(int Videoid);
        public List<LikingCounterDTO> dislikevideocounter(int Videoid);
    }
}
