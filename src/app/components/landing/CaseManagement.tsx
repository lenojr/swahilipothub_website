import React from "react";
import Image from "next/image";
import caseImage from "@/public/case-management.jpg"; // Ensure this image is placed in the public folder

const CaseManagement: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-blue-50 py-10 px-6 md:px-16">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={caseImage}
          alt="Case Management Project"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
        <h3 className="text-sm uppercase text-gray-500 font-semibold">Swahilipot Hub</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Case Management Project</h2>
        <p className="mt-4 text-gray-700">
          Our primary objective is to connect 60,000 youths in the Kenyan Coast to a wide range of 
          opportunities and sustainable employment. We understand that each young person is unique, 
          and to empower them effectively, we emphasize a personalized mentorship approach.
        </p>

        {/* Links */}
        <div className="mt-4">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Learn <span className="font-bold">more about the project here</span>
          </a>
          <br />
          <a href="#" className="text-blue-600 font-semibold hover:underline mt-2">
            You can Join <span className="font-bold">in as a Mentor</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseManagement;
