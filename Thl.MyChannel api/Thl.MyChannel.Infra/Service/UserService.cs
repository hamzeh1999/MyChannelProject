using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepository userRepository;

        public UserService(IUserRepository _userRepository)
        {
            userRepository = _userRepository;
        }
        public bool CREATEuser(User_ user)
        {
            return userRepository.CREATEuser(user);
        }

        public bool DELETEuser(int userId)
        {
            return userRepository.DELETEuser(userId);
        }

        public List<User_> GETALLusers()
        {
            return userRepository.GETALLusers();
        }

        public List<NumOfRegisterUserDTO> NumOfRegisterUsers()
        {
            return userRepository.NumOfRegisterUsers();
        }

        public List<NumOfRegisterUserDTO> SearchingNumberOFUser(SearchingNumberOfUserCall date)
        {
            return userRepository.SearchingNumberOFUser(date);
        }

        public bool UPDATEuser(User_ user)
        {
            return userRepository.UPDATEuser(user);
        }
        public List<User_> GetUserById(int userId)
        {
            return userRepository.GetUserById(userId);
        }

        public string UserLogin(UserLoginCallDTO user)
        {
           
            //return jwtRepository.Auth(login); result ----> username & Rolename (payload)
            var result = userRepository.UserLogin(user); // result ----> username , Rolename
                                                        //fadel , teacher ---> null
                                                        //abdullah , register ---> null
                                                        // token , null
                if (result == null){ return null;}
                else
                {
                    //Generate token 
                    //1.token holder ---> class (create token )
                    var TokenHandler = new JwtSecurityTokenHandler();
                    //2.token key  -----> the same key in the start up
                    var TokenKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SECRET USED TO VERIFY TOKEN Welcom in API Course"));
                    // 3.descriptor ---> payload (result) + addition propereties
                    var TokenDescriptor = new SecurityTokenDescriptor
                    {
                        //subject (payload)
                        Subject = new ClaimsIdentity(new Claim[]
                        {
                        //result.username
                        //new Claim (Type , value)
                        new Claim (ClaimTypes.Name , result.username) ,
                        //result.rolename
                        new Claim (ClaimTypes.Role, result.position_),
                        new Claim(ClaimTypes.PrimarySid,result.userId.ToString()),
                        }),
                        //Expires
                        Expires = DateTime.UtcNow.AddHours(1),
                        //signing credintial
                        SigningCredentials = new SigningCredentials(TokenKey, SecurityAlgorithms.HmacSha256Signature)
                    };
                    var token = TokenHandler.CreateToken(TokenDescriptor);
                    return TokenHandler.WriteToken(token); //string
                }

           
        
           
            //return userRepository.UserLogin(user);
        }

    }
}
