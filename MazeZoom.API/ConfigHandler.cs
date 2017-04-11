using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace MazeZoom.API
{
    public class ConfigHandler
    {
        public static string Get(string key)
        {
            return ConfigurationManager.AppSettings[key];           
        }

        public static void Update(string key, string value)
        {
            ConfigurationManager.AppSettings.Add(key, value);
        }

        public static string[] GetAllKeys()
        {
            return ConfigurationManager.AppSettings.AllKeys;
        }
    }
}