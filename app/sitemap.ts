import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.logistmovers.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
  url: "https://www.logistmovers.com/about",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://www.logistmovers.com/services",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},
{
  url: "https://www.logistmovers.com/services/service-areas",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},
    {
      url: "https://www.logistmovers.com/dry-van-dispatch",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.logistmovers.com/reefer-dispatch",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.logistmovers.com/flatbed-dispatch",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.logistmovers.com/step-deck-dispatch",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.logistmovers.com/power-only-dispatch",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.logistmovers.com/box-truck-dispatch",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.logistmovers.com/hotshot-dispatch",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.logistmovers.com/gooseneck-hotshot-dispatch",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
  url: "https://www.logistmovers.com/resources",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://www.logistmovers.com/resources/how-truck-dispatch-services-help-owner-operators",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
  ];
}