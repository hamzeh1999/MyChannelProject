using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace Thl.MyChannel.core.data
{
    public class Testimonial
    {
        [Key]
        public int TestimonialId { set; get; }
        public string TestimonialImage { set; get; }
        public string TestimonialText { set; get; }
        public int? userId { set; get; }

        [ForeignKey("UserId")]
        public virtual User_ user { get; set; }


    }
}
