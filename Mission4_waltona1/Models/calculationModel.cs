using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_waltona1.Models
{
    public class calculationModel
    {
        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public decimal assignment { get; set; }
        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public decimal groupProject { get; set; }
        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public decimal quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public decimal midterm { get; set; }
        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public decimal final { get; set; }
        [Range(0, 100, ErrorMessage = "Input must be between 0 and 100")]
        public decimal intex { get; set; }

    }
}
