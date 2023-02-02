using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using practice.Data;

var builder = WebApplication.CreateBuilder(args);

string? connStr = builder.Configuration.GetConnectionString("ShopDb");

// Add services to the container.


builder.Services.AddControllers();
builder.Services.AddDbContext<ShopDBContext>(options => options.UseSqlServer(connStr));
builder.Services.AddHttpContextAccessor();


builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/build";
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();


app.UseStaticFiles();
app.UseRouting();

app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

app.UseSpaStaticFiles();
app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";
    if (app.Environment.IsDevelopment())
    {
        spa.UseReactDevelopmentServer(npmScript: "start");
    }
});

app.Run();
