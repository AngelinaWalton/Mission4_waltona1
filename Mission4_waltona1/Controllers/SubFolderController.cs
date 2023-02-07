using Microsoft.AspNetCore.Mvc;
using Mission4_waltona1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_waltona1.Controllers
{
    public class SubFolderController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult calculation ()
        {
            return View();
        }
        [HttpPost]
        public IActionResult calculation (calculationModel model)
        {
            return View();
        }
    }
}
