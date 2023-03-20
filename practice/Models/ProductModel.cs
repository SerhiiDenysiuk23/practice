namespace practice.Models
{
    public class ProductModel
    {
        public string Name { get; set; }
        public Size SizeValue { get; set; }
        public Color ColorValue { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public string CompositionAndCare { get; set; }
        public List<IFormFile> Photos { get; set; }
        public Category Category { get; set; }
    }
}
