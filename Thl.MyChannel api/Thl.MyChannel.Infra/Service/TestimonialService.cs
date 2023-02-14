using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class TestimonialService : ITestimonialService
    {
        private readonly ITestimonialRepository testimonialRepository;

        public TestimonialService(ITestimonialRepository _testimonialRepository)
        {
            testimonialRepository = _testimonialRepository;
        }
        public bool CREATETESTIMONIAL(Testimonial testimonal)
        {
            return testimonialRepository.CREATETESTIMONIAL(testimonal);
        }

        public bool DELETETESTIMONIAL(int testimonalId)
        {
            return testimonialRepository.DELETETESTIMONIAL(testimonalId);
        }

        public List<Testimonial> GETALLTESTIMONIAL()
        {
            return testimonialRepository.GETALLTESTIMONIAL();
        }

        public List<Testimonial> GETTESTIMONIALBYID(int id)
        {
            return testimonialRepository.GETTESTIMONIALBYID(id);
        }

        public bool UPDATETESTIMONIAL(Testimonial testimonal)
        {
            return testimonialRepository.UPDATETESTIMONIAL(testimonal);
        }
        public List<Testimonial> getTestimonialByUserId(int userId)
        {
            return testimonialRepository.getTestimonialByUserId(userId);
        }
    }
}
