import React from 'react';

const PageCard = ({ title }) => (
  <div className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden p-12">
    <h1 className="text-5xl font-bold text-white">{title}</h1>
    <p className="text-gray-300 mt-4">
      This is the {title} section. Content will go here.
    </p>
  </div>
);

const Portfolio = () => {
  return <PageCard title="My Portfolio" />;
};

export default Portfolio;