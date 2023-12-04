import React from "react";

const OnlineServices = () => {
  const counselingServices = [
    {
      name: "TalkToAngel",
      link: "https://www.talktoangel.com/best-therapists-in-india",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrpv94MzdrkHIld1bMrMSuTX8xKVEBhblGn_X-z-J9A&s", // Replace with the actual logo URL
    },
    {
      name: "OnlineCounselling4U",
      link: "https://www.onlinecounselling4u.com/addiction-counselling.php",
      logo: "https://www.onlinecounselling4u.com/images/logo.svg", // Replace with the actual logo URL
    },
    {
      name: "Dr. Prerna Kohli",
      link: "https://www.drprernakohli.in/alcohol-de-addiction/",
      logo: "https://www.drprernakohli.in/wp-content/uploads/2015/11/logo-dr-prerna-kohli-e1517200609698.png", // Replace with the actual logo URL
    },
    {
      name: "Hope Trust India",
      link: "https://hopetrustindia.com/counselling-psychologists/",
      logo: "https://hopetrustindia.com/wp-content/uploads/2022/08/image.jpg", // Replace with the actual logo URL
    },
  ];

  return (
    <div className="container mx-auto mt-8 p-10 h-screen">
      <h1 className="text-4xl font-bold mb-4">Online Counseling Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {counselingServices.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <img
              src={service.logo}
              alt={`${service.name} Logo`}
              className="mb-4 h-16 mx-auto"
            />
            <h2 className="text-xl font-bold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">
              Explore their counseling services and support.
            </p>
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineServices;
