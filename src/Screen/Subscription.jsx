import { Sidebar } from 'primereact/sidebar';
import React, { useState } from 'react';
import SubscriptionForm from '../Components/Forms/SubscriptionForm';

const SubscriptionCard = ({ plan, onEdit }) => (
  <div className="border rounded-2xl text-center flex flex-col space-y-4 p-5 backdrop-blur-3xl bg-gradient-to-r from-pri/10 to-cyan-400/10 bg-opacity-5">
    <img src={plan.image} alt={plan.title} className="w-52 mx-auto" />

    <div className='text-left'>
      <h2 className="font-semibold text-lg text-blue-900">{plan.title}</h2>
      <p className="text-sm text-gray-500">{plan.subtitle}</p>
    </div>

    <div className='text-left'>
      <p className="text-xl font-semibold text-blue-900">{plan.price}</p>
      <p className="text-sm text-gray-500">{plan.trial}</p>
    </div>

    <ul className="text-base text-left font-semibold space-y-1 text-gray-800">
      {plan.features.map((item, i) => (
        <li key={i}>✅ <span className='mx-3'>{item}</span></li>
      ))}
    </ul>

    <button
      className="bg-pri uppercase text-xs text-white font-semibold py-2 px-4 rounded"
      onClick={onEdit}
    >
      Edit This Plan
    </button>
  </div>
);

export default function Subscription() {
  const [visible, setVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // 🔹 Step 1: Track selected plan
  const [activeTab, setActiveTab] = useState('monthly')
  const subscriptionPlans = [
    {
      title: 'Zatca API Integration',
      subtitle: 'For the professionals',
      price: 'SAR 50/Month',
      trial: '7 Days free trial',
      image: 'https://mylstech.com/assets/api-DK36u2U-.png',
      features: [
        'Unlimited API calls',
        '1 license per business',
        'Unlimited users',
        '24/7 support',
      ],
    },
    {
      title: 'POS Cloud Sync',
      subtitle: 'For small stores',
      price: 'SAR 20/Month',
      trial: '3 Days free trial',
      image: 'https://mylstech.com/assets/api-DK36u2U-.png',
      features: [
        'Sync up to 5 devices',
        'Email support',
        'Daily backups',
        'User analytics',
      ],
    },
    {
      title: 'E-Invoice Pro',
      subtitle: 'For enterprise',
      price: 'SAR 100/Month',
      trial: '14 Days free trial',
      image: 'https://mylstech.com/assets/api-DK36u2U-.png',
      features: [
        'Unlimited invoices',
        'Advanced reporting',
        'Team access',
        'Priority support',
      ],
    },
  ];

  const handleEdit = (plan) => {
    setSelectedPlan(plan);
    setVisible(true);
  };

  return (
    <section className="bg-cover bg-center relative">
      <div className="flex justify-between items-center my-3 gap-4">
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => setActiveTab('monthly')}
            className={`px-5 py-2 text-sm font-medium transition-colors duration-200 ${activeTab === 'monthly' ? 'bg-pri text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            Monthly Plans
          </button>
          <button
            onClick={() => setActiveTab('yearly')}
            className={`px-5 py-2 text-sm font-medium transition-colors duration-200 ${activeTab === 'yearly' ? 'bg-pri text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            Yearly Plans
          </button>
        </div>

        <button
          onClick={() => {
            setSelectedPlan(null);
            setVisible(true);
          }}
          className="bg-pri uppercase px-10 py-2 text-white text-sm font-semibold rounded-lg"
        >
          Add New
        </button>
      </div>


      {activeTab === 'monthly' ? (
        <>
          <h6 className="text-lg font-semibold text-gray-700 mb-2">Monthly Plans</h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl">
            {subscriptionPlans.map((plan, idx) => (
              <SubscriptionCard key={idx} plan={plan} onEdit={() => handleEdit(plan)} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h6 className="text-lg font-semibold text-gray-700 mb-2">Yearly Plans</h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl">
            {subscriptionPlans.map((plan, idx) => (
              <SubscriptionCard key={idx} plan={plan} onEdit={() => handleEdit(plan)} />
            ))}
          </div>
        </>
      )}


      <Sidebar
        position='right'
        className='w-1/3'
        blockScroll={true}
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <SubscriptionForm initialData={selectedPlan} />
      </Sidebar>
    </section>
  );
}
