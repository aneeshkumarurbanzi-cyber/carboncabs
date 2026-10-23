import React from 'react';

export default function Blog_hero() {
  return (
    <div className="w-full h-[70vh] pt-30 md:pt-40 pb-10 flex flex-col justify-center items-center bg-gradient-to-br from-[#232526] to-[#414345] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#CAE942] mb-6 drop-shadow-lg">
        Blog Coming Soon
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl">
        We’re working hard to bring you travel tips, destination guides, and the latest updates from Carbon Cabs. Stay tuned for our upcoming blog!
      </p>
      <a href='/' className="inline-block bg-[#CAE942] text-[#232526] font-bold px-8 py-3 rounded-lg shadow-lg animate-pulse">
        Under Development
      </a>
    </div>
  );
}
