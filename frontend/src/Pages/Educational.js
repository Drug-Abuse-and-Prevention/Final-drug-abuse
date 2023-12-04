import React from "react";

const Educational = () => {
  return (
    <div className="container mx-auto mt-8 p-10 ">
      <h1 className="text-4xl font-bold mb-4">Educational Resources</h1>

      {/* Videos Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">Addiction</h2>
            <iframe
              title="Video Title 1"
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/PY9DcIMGxMs"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="text-gray-600 mt-2">
              Everything you think you know about addiction is wrong | Johann Hari
            </p>
          </div>
          {/* Add more video cards as needed */}
          <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Reprogram your brain</h2>
          <iframe
            title="Video Title 1"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/lcoQO_dMDDs"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p className="text-gray-600 mt-2">
          How To REPROGRAM Your Mind To Break ANY ADDICTION In 9 Days! | Dr. Joe Dispenza
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Understanding Addiction</h2>
          <iframe
            title="Video Title 1"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/p3JLaF_4Tz8"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p className="text-gray-600 mt-2">
          Dr. Anna Lembke: Understanding & Treating Addiction | Huberman Lab Podcast #33
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">Drug Addiction Causes</h2>
          <iframe
            title="Video Title 1"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/-zo0FjYsO7I"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p className="text-gray-600 mt-2">
          How to stop a drug addiction FOREVER: #1 Real cause of addiction revealed
          </p>
        </div>
        </div>
      </section>

      {/* Articles Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">Dealing With Addiction</h2>
            <p className="text-gray-600">
              What Do Substance Abuse and Addiction Mean?
            </p>
            <a
              href="https://kidshealth.org/en/teens/addictions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read More
            </a>
          </div>
          
          {/* Add more article cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default Educational;
