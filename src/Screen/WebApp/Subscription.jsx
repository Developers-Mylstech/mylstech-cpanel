// import { Sidebar } from 'primereact/sidebar';
// import React, { useState } from 'react';
// import SubscriptionForm from '../../Components/Forms/SubscriptionForm';

// const SubscriptionCard = ({ plan, onEdit }) => (
//   <div className="border rounded-2xl text-center flex flex-col space-y-4 p-5 backdrop-blur-3xl bg-gradient-to-r from-pri/10 to-cyan-400/10 bg-opacity-5">
//     <img src={plan.image} alt={plan.title} className="w-52 mx-auto" />

//     <div className='text-left'>
//       <h2 className="font-semibold text-lg text-blue-900">{plan.title}</h2>
//       <p className="text-sm text-gray-500">{plan.subtitle}</p>
//     </div>

//     <div className='text-left'>
//       <p className="text-xl font-semibold text-blue-900">{plan.price}</p>
//       <p className="text-sm text-gray-500">{plan.trial}</p>
//     </div>

//     <ul className="text-base text-left font-semibold space-y-1 text-gray-800">
//       {plan.features.map((item, i) => (
//         <li key={i}>✅ <span className='mx-3'>{item}</span></li>
//       ))}
//     </ul>

//     <button
//       className="bg-pri uppercase text-xs text-white font-semibold py-2 px-4 rounded"
//       onClick={onEdit}
//     >
//       Edit This Plan
//     </button>
//   </div>
// );

// export default function Subscription() {
//   const [visible, setVisible] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null); // 🔹 Step 1: Track selected plan
//   const [activeTab, setActiveTab] = useState('monthly')
//   const subscriptionPlans = [
//     {
//       title: 'Zatca API Integration',
//       subtitle: 'For the professionals',
//       price: 'SAR 50/Month',
//       trial: '7 Days free trial',
//       image: 'https://mylstech.com/assets/api-DK36u2U-.png',
//       features: [
//         'Unlimited API calls',
//         '1 license per business',
//         'Unlimited users',
//         '24/7 support',
//       ],
//     },
//     {
//       title: 'POS Cloud Sync',
//       subtitle: 'For small stores',
//       price: 'SAR 20/Month',
//       trial: '3 Days free trial',
//       image: 'https://mylstech.com/assets/api-DK36u2U-.png',
//       features: [
//         'Sync up to 5 devices',
//         'Email support',
//         'Daily backups',
//         'User analytics',
//       ],
//     },
//     {
//       title: 'E-Invoice Pro',
//       subtitle: 'For enterprise',
//       price: 'SAR 100/Month',
//       trial: '14 Days free trial',
//       image: 'https://mylstech.com/assets/api-DK36u2U-.png',
//       features: [
//         'Unlimited invoices',
//         'Advanced reporting',
//         'Team access',
//         'Priority support',
//       ],
//     },
//   ];

//   const handleEdit = (plan) => {
//     setSelectedPlan(plan);
//     setVisible(true);
//   };

//   return (
//     <section className="bg-cover bg-center relative">
//       <div className="flex flex-col-reverse md:flex-row justify-between items-end md:items-center my-3 gap-4">
//         <div className="flex  border border-gray-300 rounded-md overflow-hidden w-full md:w-fit">
//           <button
//             onClick={() => setActiveTab('monthly')}
//             className={`px-5 py-2 w-1/2 md:w-64 text-sm font-medium transition-colors duration-200 ${activeTab === 'monthly' ? 'bg-pri text-white' : 'text-gray-700 hover:bg-gray-100'
//               }`}
//           >
//             Monthly Plans
//           </button>
//           <button
//             onClick={() => setActiveTab('yearly')}
//             className={`px-5 py-2 w-1/2 md:w-64 text-sm font-medium transition-colors duration-200 ${activeTab === 'yearly' ? 'bg-pri text-white' : 'text-gray-700 hover:bg-gray-100'
//               }`}
//           >
//             Yearly Plans
//           </button>
//         </div>

//         <button
//           onClick={() => {
//             setSelectedPlan(null);
//             setVisible(true);
//           }}
//           className="bg-pri uppercase px-10 py-2 text-white text-sm font-semibold rounded-lg"
//         >
//           Add New
//         </button>
//       </div>


//       {activeTab === 'monthly' ? (
//         <>
//           <h6 className="text-lg font-semibold text-gray-700 mb-2">Monthly Plans</h6>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl">
//             {subscriptionPlans.map((plan, idx) => (
//               <SubscriptionCard key={idx} plan={plan} onEdit={() => handleEdit(plan)} />
//             ))}
//           </div>
//         </>
//       ) : (
//         <>
//           <h6 className="text-lg font-semibold text-gray-700 mb-2">Yearly Plans</h6>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl">
//             {subscriptionPlans.map((plan, idx) => (
//               <SubscriptionCard key={idx} plan={plan} onEdit={() => handleEdit(plan)} />
//             ))}
//           </div>
//         </>
//       )}


//       <Sidebar
//         position='right'
//         className='md:w-1/3 w-10/12'
//         blockScroll={true}
//         visible={visible}
//         onHide={() => setVisible(false)}
//       >
//         <SubscriptionForm initialData={selectedPlan} />
//       </Sidebar>
//     </section>
//   );
// }
import { Sidebar } from 'primereact/sidebar';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import React, { useState } from 'react';
import SubscriptionForm from '../../Components/Forms/SubscriptionForm';

const SubscriptionCard = ({ plan, onEdit, onDelete, onToggleHold }) => (
  <div className="border rounded-2xl text-center flex flex-col space-y-4 p-5 backdrop-blur-3xl bg-gradient-to-r from-pri/10 to-cyan-400/10 bg-opacity-5">
    <div className="flex justify-between items-center mt-2">
      <div className="flex items-center gap-2">
        <InputSwitch checked={plan.isActive} onChange={() => onToggleHold(plan.title)} />
        <span className="text-xs">{plan.isActive ? 'Active' : 'On Hold'}</span>
      </div>
      <Button
        icon="pi pi-trash text-lg"
        className="p-button-sm p-button-text p-button-danger focus:ring-0"
        onClick={() => onDelete(plan.title)}
      />
    </div>
    <img src={plan.image} alt={plan.title} className="w-52 mx-auto" />

    <div className="text-left">
      <h2 className="font-semibold text-lg text-blue-900">{plan.title}</h2>
      <p className="text-sm text-gray-500">{plan.subtitle}</p>
    </div>

    <div className="text-left">
      <p className="text-xl font-semibold text-blue-900">{plan.price}</p>
      <p className="text-sm text-gray-500">{plan.trial}</p>
    </div>

    <ul className="text-base text-left font-semibold space-y-1 text-gray-800">
      {plan.features.map((item, i) => (
        <li key={i}>✅ <span className="mx-3">{item}</span></li>
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
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeTab, setActiveTab] = useState('monthly');
  const [showConfirm, setShowConfirm] = useState(false);
  const [planToDelete, setPlanToDelete] = useState(null);

  const [plans, setPlans] = useState([
    {
      title: 'Zatca API Integration',
      subtitle: 'For the professionals',
      price: 'SAR 50/Month',
      trial: '7 Days free trial',
      image: 'https://mylstech.com/assets/api-DK36u2U-.png',
      isActive: true,
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
      isActive: true,
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
      isActive: true,
      features: [
        'Unlimited invoices',
        'Advanced reporting',
        'Team access',
        'Priority support',
      ],
    },
  ]);

  const handleEdit = (plan) => {
    setSelectedPlan(plan);
    setVisible(true);
  };

  const toggleHold = (title) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.title === title ? { ...plan, isActive: !plan.isActive } : plan
      )
    );
  };

  const deletePlan = (title) => {
    setPlanToDelete(title);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setPlans((prev) => prev.filter(plan => plan.title !== planToDelete));
    setShowConfirm(false);
    setPlanToDelete(null);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setPlanToDelete(null);
  };

  return (
    <section className="bg-cover bg-center relative">
      <div className="flex flex-col-reverse md:flex-row justify-between items-end md:items-center my-3 gap-4">
        <div className="flex border border-gray-300 rounded-md overflow-hidden w-full md:w-fit">
          <button
            onClick={() => setActiveTab('monthly')}
            className={`px-5 py-2 w-1/2 md:w-64 text-sm font-medium transition-colors duration-200 ${activeTab === 'monthly' ? 'bg-pri text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Monthly Plans
          </button>
          <button
            onClick={() => setActiveTab('yearly')}
            className={`px-5 py-2 w-1/2 md:w-64 text-sm font-medium transition-colors duration-200 ${activeTab === 'yearly' ? 'bg-pri text-white' : 'text-gray-700 hover:bg-gray-100'}`}
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

      <h6 className="text-lg font-semibold text-gray-700 mb-2">
        {activeTab === 'monthly' ? 'Monthly Plans' : 'Yearly Plans'}
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl">
        {plans.map((plan, idx) => (
          <SubscriptionCard
            key={idx}
            plan={plan}
            onEdit={() => handleEdit(plan)}
            onDelete={deletePlan}
            onToggleHold={toggleHold}
          />
        ))}
      </div>

      <Sidebar
        position="right"
        className="md:w-1/3 w-10/12"
        blockScroll={true}
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <SubscriptionForm initialData={selectedPlan} />
      </Sidebar>


      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center  mx-4">
            <h3 className="text-base font-semibold mb-4 text-gray-800 ">Confirm Deletion</h3>
            <p className="mb-6 text-gray-600 text-sm">
              Are you sure you want to delete <strong>{planToDelete}</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="bg-blue-900  text-white px-4 py-2 rounded text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
