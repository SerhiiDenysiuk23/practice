﻿using Microsoft.EntityFrameworkCore;
using practice.Models;

namespace practice.Data
{
    public class ShopDBContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Size> Sizes { get; set; }
        public DbSet<Color> Colors { get; set; }
        public DbSet<Order> Orders { get; set; }

        public ShopDBContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasAlternateKey(u => u.Name);
            modelBuilder.Entity<Color>().HasAlternateKey(u => u.Name);
            modelBuilder.Entity<Size>().HasAlternateKey(u => u.Name);
            modelBuilder.Entity<User>().HasAlternateKey(u => u.Email);
            modelBuilder.Entity<Product>().HasAlternateKey(u => u.Name);
        }
    }
}
