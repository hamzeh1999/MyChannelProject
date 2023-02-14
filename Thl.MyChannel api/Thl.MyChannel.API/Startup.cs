using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Thl.MyChannel.core.common;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Repository;
using Thl.MyChannel.Core.Service;
using Thl.MyChannel.Infra.common;
using Thl.MyChannel.Infra.Repository;
using Thl.MyChannel.Infra.Service;

namespace Thl.MyChannel.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
          
            Configuration = configuration;
            

        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(corsOptions =>
            {
                corsOptions.AddPolicy("x",
                builder =>
                {
                //builder.WithOrigins("http://127.0.0.1:4200", "http://localhost:4200", "https://localhost:4200")
                // .AllowAnyHeader()
                // .AllowAnyMethod();
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            });
        });








            services.AddRazorPages();
            services.AddScoped<IDBContext, DBContext>();


            services.AddScoped<IAboutUsRepository, AboutUsRepository>();
            services.AddScoped<IBadReportRepository, BadReportRepository>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IChannelRepository, ChannelRepository>();
            services.AddScoped<ICommentRepository, CommentRepository>();
            services.AddScoped<IContactUsRepository, ContactUsRepository>();
            services.AddScoped<IHomeRepository, HomeRepository>();
            services.AddScoped<ILikingRepository, LikingRepository>();
            services.AddScoped<INotificationRepository, NotificationRepository>();
            services.AddScoped<IReplayCommentRepository, ReplayCommentRepository>();
            services.AddScoped<IRoleRepository, RoleRepository>();
            services.AddScoped<ISubscribeRepository, SubscribeRepository>();
            services.AddScoped<ITestimonialRepository, TestimonialRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IVideoRepository, VideoRepository>();
            // for service Pages
            services.AddScoped<IAboutUsService, AboutUsService>();
            services.AddScoped<IBadReportService, BadReportService>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<IChannelService, ChannelService>();
            services.AddScoped<ICommentService, CommentService>();
            services.AddScoped<IContactUsService, ContactUsService>();
            services.AddScoped<IHomeService, HomeService>();
            services.AddScoped<ILikingService, LikingService>();
            services.AddScoped<INotificationService, NotificationService>();
            services.AddScoped<IReplayCommentService, ReplayCommentService>();
            services.AddScoped<IRoleService, RoleService>();
            services.AddScoped<ISubscribeService, SubscribeService>();
            services.AddScoped<ITestimonialService, TestimonialService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IVideoService, VideoService>();

            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"))
        };
    });
            services.AddControllers();
      




        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("x");
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
