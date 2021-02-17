using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ResumeApp.Models
{
    public class Information
    {
        [Key] public int ID { get; set; }
        public string FullName { get; set;}
        public string Email { get; set;}
        public string Birthday { get; set;}
        public int PhoneNumber { get; set;}
        public string AboutMe { get; set;}
        public string Experience { get; set;}
        public string Skills { get; set;}
        public string Hobbies { get; set;}


        public Information()
        {

        }
    }
}
