using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace Thl.MyChannel.core.data
{
    public class Contact_Us
    {

        [Key]
        public int ContactUsId { set; get; }
        public string Subject { set; get; }
        public string Message { set; get; }
        public string MapAddress { set; get; }
        public string Email { set; get; }

        public ICollection<Home> homes { set; get; }

    }
}
