﻿namespace practice.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Size SizeValue { get; set; }
        public Color ColorValue { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public string CompositionAndCare { get; set; }
        //public Photo[] PhotoList { get; set; }
        public DateTime AddDate { get; set; }
        public Category Category { get; set; }
    }
}
