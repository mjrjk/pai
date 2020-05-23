using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Song
    {
        public string Name { get; set; }
        public string Artist { get; set; }
        public int GenreId { get; set; }
        [Key]
        public int Id { get; set; }
    }
}