namespace practice.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public Product[] ProductList { get; set; }
    }
}
