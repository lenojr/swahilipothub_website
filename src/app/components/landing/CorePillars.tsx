import Image from "next/image";

const CorePillars = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold">Swahilipot Core Pillars</h2>
      <p className="text-blue-600 text-lg my-2">
        <span className="cursor-pointer">Tech</span> | <span className="cursor-pointer">Arts</span> | <span className="cursor-pointer">Heritage</span>
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Technology */}
        <div className="p-6 bg-blue-100 rounded-lg">
          <h3 className="text-xl font-semibold">Technology</h3>
          <p className="text-gray-700 text-sm mt-2">
            Swahilipot Hub empowers young individuals in technology through programs like Data and Research, Digital Literacy, Industrial Attachment, Campus Ambassador, and Pitching Thursday.
          </p>
          <div className="flex justify-center mt-4">
            <Image src="/icons/frame-layouts-tech.svg" alt="Technology Icon" width={100} height={100} />
          </div>
        </div>

        {/* Creatives & Arts */}
        <div className="p-6 bg-orange-100 rounded-lg">
          <h3 className="text-xl font-semibold">Creatives & Arts</h3>
          <p className="text-gray-700 text-sm mt-2">
            The Creative Department brings imagination to life through initiatives like Sanaa Show and Sanaart Shop, nurturing talents in acting, voice arts, and diverse artistic expressions.
          </p>
          <div className="flex justify-center mt-4">
            <Image src="/icons/oc-money-profits-arts.svg" alt="Creatives & Arts Icon" width={100} height={100} />
          </div>
        </div>

        {/* Heritage */}
        <div className="p-6 bg-blue-100 rounded-lg">
          <h3 className="text-xl font-semibold">Heritage</h3>
          <p className="text-gray-700 text-sm mt-2">Connecting the past and the future.</p>
          <div className="flex justify-center mt-4">
            <Image src="/icons/oc-maintenance-heritage.svg" alt="Heritage Icon" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
