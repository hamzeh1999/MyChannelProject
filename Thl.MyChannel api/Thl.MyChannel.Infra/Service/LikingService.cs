using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.DTO;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class LikingService: ILikingService
    {
        private readonly ILikingRepository likingRepository;
        public LikingService(ILikingRepository _likingRepository)
        {
            likingRepository = _likingRepository;
        }
        public bool CreateLike(Liking liking)
        {
           return  likingRepository.CreateLike(liking);
        }





          public bool DeleteLike(int likingId)
        {
            return likingRepository.DeleteLike(likingId);
        }

         public List<Liking> GetAllLikes()
        {
            return likingRepository.GetAllLikes();
        }


        public bool UpdateLike(Liking liking)
        {
          return likingRepository.UpdateLike(liking);
        }
        public List<LikingCounterDTO> likingvideocounter(int Videoid)
        {
            return likingRepository.likingvideocounter(Videoid);
        }
        public List<LikingCounterDTO> dislikevideocounter(int Videoid)
        {
            return likingRepository.dislikevideocounter(Videoid);  
        }
    }
}
