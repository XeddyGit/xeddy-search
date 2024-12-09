import React from 'react';
import PageLayout from '../layout/PageLayout';

const ContactPage: React.FC = () => {
  return (
    <PageLayout title="Contact Us">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">
          We would love to hear from you! If you have any questions, suggestions, or feedback, please reach out to us using the links below.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">Contact Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Email us at: 
            <a href="mailto:admin@joinxeddy.com" className="text-blue-600 hover:underline"> admin@joinxeddy.com</a>
          </li>
          <li>
            For partnership inquiries: 
            <a href="mailto:hello@xeddy.app" className="text-blue-600 hover:underline"> hello@xeddy.app</a>
          </li>
          <li>
            For LinkedIn: 
            <a href="https://www.linkedin.com/company/xeddy/?viewAsMember=true" className="text-blue-600 hover:underline"> Follow us on LinkedIn</a>
          </li>
        </ul>

        <p>
          We appreciate your feedback and look forward to connecting with you!
        </p>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
