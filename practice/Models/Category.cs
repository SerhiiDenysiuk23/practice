﻿using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace practice.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
