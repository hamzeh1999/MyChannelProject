using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace Thl.MyChannel.core.data
{
    public class Role_
    {
        [Key]

        public int RoleId { set; get; }
        public string Position_ { set; get; }

        public ICollection<User_> users { set; get; }

    }
}
