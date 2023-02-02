namespace practice.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? FName { get; set; }
        public string? LName { get; set; }
        public string? PhoneNumber { get; set; }
        public string? City { get; set; }
        public string? PostOffice { get; set; }

        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime Created { get; set; }
        public string Role { get; set; }
        public Product[] WishList { get; set; }
    }
}
