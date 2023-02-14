using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;

namespace Thl.MyChannel.core.Repository
{
    public interface IUserRepository
    {
        bool CREATEuser(User_ user);
        bool UPDATEuser(User_ user);
        bool DELETEuser(int userId);
        List<User_> GETALLusers();
        List<NumOfRegisterUserDTO> NumOfRegisterUsers();
        List<NumOfRegisterUserDTO> SearchingNumberOFUser(SearchingNumberOfUserCall date);
        public UserLoginDTO UserLogin(UserLoginCallDTO user);
        //PROCEDURE UserRegister(pusername IN VARCHAR2, puserage IN int, puserimage in VARCHAR2, paddressuser in VARCHAR2, pemail in varchar2 , ppassword in varchar2 );
        List<User_> GetUserById(int userId);

    }
}
