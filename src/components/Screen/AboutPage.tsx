import React from 'react';
import PageLayout from '../layout/PageLayout';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <PageLayout showSearch={false} title="About Us">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Off Campus Directory (OCD)</h2>
        <p className="mb-4">
          The Off Campus Directory (OCD) is designed to help university students discover the best dining options available in their local area. 
          We understand that navigating food choices off-campus can be overwhelming, especially when you want to make the most of your campus card.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Our Mission</h3>
        <p className="mb-4">
        Our mission is to connect students with local restaurants that accept campus cards, providing a seamless dining experience. 
        We aim to highlight hidden gems and popular spots alike, ensuring that students have access to a variety of cuisines and dining options. 
        At the same time, we strive to equip small eateries with the best tools to compete with larger chains, enhancing the dining experience for college students through personalized recommendations, loyalty rewards, and community-driven engagement.
       <br/>
       <br/>
       <p>To learn more about our mission to be the best food ordering and rewards app for college students and local restaurants, please visit our <Link className="text-blue-600" to="https://xeddy.app">Xeddy</Link> page.
       </p>
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Features</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Search for restaurants by name or cuisine type.</li>
          <li>Filter options based on your nearest university.</li>
          <li>View restaurant details, including menus and delivery options.</li>
          <li>Access user ratings and reviews to make informed choices.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">Get Involved</h3>
        <p className="mb-4">
          We encourage feedback from our users! If you have suggestions for new features or restaurants to add, please reach out to us. 
          Your input helps us improve and serve you better.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
        <p>
          For any inquiries, please email us at <a href="mailto:admin@joinxeddy.com" className="text-blue-600">admin@joinxeddy.com</a>.
        </p>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
