using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.core.Repository
{
    public interface ITestimonialRepository
    {
        bool CREATETESTIMONIAL(Testimonial testimonal);
        bool UPDATETESTIMONIAL(Testimonial testimonal);
        bool DELETETESTIMONIAL(int testimonalId);
        List<Testimonial> GETALLTESTIMONIAL();
        List<Testimonial> GETTESTIMONIALBYID(int id);
        List<Testimonial> getTestimonialByUserId(int userId);

    }
}
