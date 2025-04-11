import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight, FiEdit2 } from 'react-icons/fi';
import ServiceForm from '../Components/Forms/ServiceForm';
import { FileUpload } from 'primereact/fileupload';

import { IoIosTrash } from "react-icons/io";





const featuredServices = [
    {
        title: 'Hardware Solutions',
        description: 'We provide robust and high-performance hardware solutions to meet industry needs, ensuring efficiency and reliability.',
        image: ['https://img.freepik.com/free-photo/network-mainboard-service-toy-broadcasting_1286-290.jpg','https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg']
    },
    {
        title: 'API Solutions',
        description: 'Develop and integrate secure, scalable, and efficient APIs for seamless connectivity and system interaction.',
        image: ['https://img.freepik.com/free-vector/hand-drawn-flat-design-api-infographic_23-2149383349.jpg',"data:image/jpeg;base64,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"],
    },
    {
        title: 'Mobile/Web Development',
        description: 'Build modern, user-friendly mobile and web applications tailored to your business needs for better digital presence.',
        image: ['https://img.freepik.com/free-vector/man-woman-working-app-development-landing-page_23-2148706844.jpg',]
    },
    {
        title: 'Software Solutions',
        description: 'Customized software development services designed to streamline operations and enhance business productivity.',
        image: ['https://img.freepik.com/free-photo/online-marketing_53876-176744.jpg'],
    },
    {
        title: 'IoT Solutions',
        description: 'Empowering businesses with IoT technology to enable smart connectivity, automation, and data-driven decision-making.',
        image: ['https://img.freepik.com/free-vector/internet-things-home-isometric-banner_1284-11186.jpg',],
    },
    {
        title: 'AI Solutions',
        description: 'Harness the power of AI to automate tasks, analyze data, and improve decision-making with intelligent solutions.',
        image: ['https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg'],
    },
    {
        title: 'SEO Solutions',
        description: 'Optimize your website for search engines to enhance visibility, drive organic traffic, and improve online presence.',
        image: ['https://img.freepik.com/free-vector/online-marketing-landing-page-illustrated_79603-1008.jpg',],
    },
    {
        title: 'Cloud Solutions',
        description: 'Secure and scalable cloud solutions for data storage, application hosting, and business operations.',
        image:[ 'https://img.freepik.com/premium-vector/cloud-network-uploading-various-information-through-digital-systems_49459-616.jpg'],
    },
];

const software = [
    {
        "title": "Construction",
        "description": "Advanced software solutions for the construction industry to streamline project management, budgeting, and workforce coordination.",
        "para_1": "Our construction management software helps companies track projects, manage resources, and ensure compliance with safety regulations.",
        "para_2": "We offer cloud-based solutions for real-time collaboration, cost estimation, and document management.",
        "para_3": "With integrated analytics, businesses can monitor project progress, reduce delays, and improve overall efficiency.",
        "image": ["https://cdn3d.iconscout.com/3d/premium/thumb/under-construction-3d-icon-download-in-png-blend-fbx-gltf-file-formats--worker-site-architecture-safety-helmet-tools-maintenance-and-pack-icons-6407256.png",],
        "type": "Software Solutions"
    },
    {
        "title": "Automobile",
        "description": "Automobile software solutions for vehicle management, maintenance tracking, and dealership automation.",
        "para_1": "We provide software for automobile dealerships, fleet management, and automotive service centers.",
        "para_2": "Our solutions include CRM tools, predictive maintenance, and real-time vehicle tracking systems.",
        "para_3": "Enhanced automation ensures cost-effectiveness, operational efficiency, and improved customer experience.",
        "image": ["https://www.freeiconspng.com/uploads/classic-car-series-texture-png-icon--icon-15.jpg"],
        "type": "Software Solutions"
    },
    {
        "title": "Laundry",
        "description": "Efficient laundry management software to automate order tracking, customer management, and billing.",
        "para_1": "Our software helps laundromats and dry cleaners manage pickups, deliveries, and order processing.",
        "para_2": "Automated invoicing, customer notifications, and seamless payment integration ensure smooth operations.",
        "para_3": "Businesses can track inventory, monitor machine performance, and enhance customer satisfaction.",
        "image": ["https://cdn3d.iconscout.com/3d/premium/thumb/washing-machine-3d-icon-download-in-png-blend-fbx-gltf-file-formats--laundry-household-home-living-pack-furniture-icons-4825944.png?f=webp"],
        "type": "Software Solutions"
    },
    {
        "title": "Grocery/Supermarket",
        "description": "Retail software solutions for inventory management, POS integration, and customer loyalty programs. sales tracking, and order fulfillment.",
        "para_1": "Our grocery store software ensures efficient stock control, sales tracking, and order fulfillment.",
        "para_2": "We offer AI-powered demand forecasting to optimize inventory and reduce wastage.",
        "para_3": "With mobile ordering and self-checkout features, businesses can enhance customer convenience and sales.",
        "image": ["https://cdn3d.iconscout.com/3d/premium/thumb/supermarket-3d-icon-download-in-png-blend-fbx-gltf-file-formats--grocery-shop-store-shopping-buying-and-groceries-pack-marketplace-icons-8817630.png"],
        "type": "Software Solutions"
    },
    {
        "title": "Restaurant/Cafe",
        "description": "Comprehensive restaurant and cafe management software to enhance ordering, kitchen workflows, order management, billing and customer experience.",
        "para_1": "Our POS systems help restaurants streamline order management, billing, and kitchen coordination.",
        "para_2": "Integrated online ordering, table reservations, and digital menus improve customer satisfaction.",
        "para_3": "Advanced analytics provide insights into sales trends, inventory usage, and employee performance.",
        "image": ["https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/845bf0-tea-cup/front/400/color.webp"],
        "type": "Software Solutions"
    },
    {
        "title": "Hotels",
        "description": "Hotel management solutions for reservations, billing, housekeeping, operations, bookings and guest services.",
        "para_1": "Our software helps hotels automate front desk operations, bookings, and customer check-ins.",
        "para_2": "Integrated CRM ensures personalized guest experiences and loyalty program management.",
        "para_3": "Real-time reporting helps managers optimize room occupancy, pricing strategies, and operational efficiency.",
        "image": ["https://cdn3d.iconscout.com/3d/premium/thumb/hotel-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--room-restaurant-rest-house-accommodation-building-city-elements-pack-buildings-illustrations-4497530.png"],
        "type": "Software Solutions"
    },
    {
        "title": "Facilities Management",
        "description": "Facility management software for maintenance tracking, asset management, and space optimization.",
        "para_1": "Our software streamlines facility maintenance by scheduling preventive and reactive repairs.",
        "para_2": "Businesses can track asset lifecycles, monitor energy usage, and improve space utilization.",
        "para_3": "Cloud-based dashboards provide real-time insights into operations and facility performance.",
        "image": ["https://cdn3d.iconscout.com/3d/premium/thumb/property-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--building-apartment-house-real-estate-pack-buildings-icons-5727711.png"],
        "type": "Software Solutions"
    },
    {
        "title": "Saloons",
        "description": "Salon and spa software for appointment scheduling, customer management, and billing.",
        "para_1": "Our software allows salons to manage bookings, track customer preferences, and automate reminders.",
        "para_2": "Integrated POS solutions enable seamless billing, product sales, and financial reporting.",
        "para_3": "With online booking and mobile apps, salons can enhance customer engagement and retention.",
        "image": ["https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/e94351-scissor/front/400/color.webp"],
        "type": "Software Solutions"
    },
    {
        "title": "Blog Material",
        "description": "Content management solutions for bloggers, writers, monetization for bloggers and digital media companies.",
        "para_1": "Our software simplifies content planning, publishing, and monetization for bloggers.",
        "para_2": "SEO tools, analytics, and audience engagement features help optimize digital content.",
        "para_3": "Integrated automation tools improve workflow, collaboration, and content distribution.",
        "image": ["https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/5f20be-computer/front/400/color.webp",],
        "type": "Software Solutions"
    },
    {
        "title": "Logistics",
        "description": "Logistics management software for fleet tracking, warehouse automation, and supply chain optimization.",
        "para_1": "Our software helps logistics businesses manage shipments, reduce delivery times, and optimize routes.",
        "para_2": "Real-time tracking, AI-driven demand forecasting, and automated inventory control improve efficiency.",
        "para_3": "Integrated dashboards provide insights into order status, fleet performance, and cost analysis.",
        "image": ["https://cdn3d.iconscout.com/3d/premium/thumb/package-3d-icon-download-in-png-blend-fbx-gltf-file-formats--box-delivery-parcel-e-commerce-pack-shopping-icons-7849038.png?f=webp",],
        "type": "Software Solutions"
    },
    {
        "title": "Business Setup/Pro Services",
        "description": "Business registration, compliance management, and corporate services for startups and enterprises.",
        "para_1": "We provide end-to-end business setup services, including company registration, legal documentation, and licensing.",
        "para_2": "Our compliance management tools ensure businesses meet regulatory requirements with ease.",
        "para_3": "Advisory services help businesses optimize tax structures, HR policies, and operational strategies.",
        "image": ["https://cdn3d.iconscout.com/3d/premium/thumb/service-3d-icon-download-in-png-blend-fbx-gltf-file-formats--support-cog-setting-business-and-finance-pack-icons-5752009.png?f=webp",],
        "type": "Software Solutions"
    }
]

const otherService = [
    {
        title: "CCTV",
        description:
            "We provide high-quality CCTV solutions for surveillance and security, ensuring real-time monitoring and recording. Our advanced security systems offer 24/7 monitoring, motion detection, night vision, and remote access to keep your premises secure.",
        features: [
            "HD & 4K resolution cameras",
            "Motion detection & alerts",
            "Cloud & local storage options",
            "Mobile & remote monitoring",
            "Weatherproof & vandal-proof designs"
        ],
        type: "Other Services",
        image:
            "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Hardware Equipments",
        description:
            "Offering a wide range of reliable and high-performance hardware components for business and personal needs. From processors and RAM to storage devices and peripherals, we ensure top-tier quality and performance.",
        features: [
            "Latest CPUs, GPUs, and motherboards",
            "High-speed SSD & HDD storage solutions",
            "Reliable networking and power backup equipment",
            "Printers, scanners, and accessories",
            "Affordable and premium options available"
        ],
        type: "Other Services",
        image:
            "https://images.unsplash.com/photo-1586920740280-e7da670f7cb7?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2000"
    },
    {
        title: "Networking",
        type: "Other Services",
        description:
            "From LAN to enterprise-level networking, we provide robust solutions to ensure seamless connectivity, high-speed data transfer, and network security. Our networking solutions are tailored to meet the growing demands of modern businesses and homes.",
        features: [
            "High-speed Wi-Fi routers & mesh networks",
            "Enterprise-grade networking for businesses",
            "VPN & firewall security solutions",
            "Cloud-based network management",
            "Structured cabling & network optimization"
        ],
        image:
           [ "https://img.freepik.com/free-vector/world-map-with-global-technology-social-connection-network-with-nodes-links-vector-illustration_1284-1968.jpg?t=st=1740552377~exp=1740555977~hmac=0d2b58dbe046f8b89a83ce8c38fccc47e07e7f79cc4afa6373eb87d0f9d98ee0&w=2000"]
    },
    {
        title: "Computer/Laptop",
        type: "Other Services",
        description:
            "We offer a wide range of branded and customized computer/laptop solutions tailored to meet personal and business needs. Whether you need a gaming PC, a high-performance workstation, or an affordable office laptop, we have the right solution for you.",
        features: [
            "Latest gaming & business laptops",
            "Custom-built high-performance PCs",
            "Affordable refurbished options",
            "Extended warranty & support",
            "Bulk orders & corporate solutions"
        ],
        image:
            ["https://images.unsplash.com/photo-1545446968-9baea3c7a4db?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    },
    {
        title: "Tailormade ERP Development",
        type: "Other Services",
        description:
            "Custom ERP solutions designed to optimize business operations, enhance efficiency, and drive digital transformation. Our ERP systems integrate inventory, finance, HR, and CRM functionalities for seamless workflow management.",
        features: [
            "Fully customized ERP software",
            "Integration with existing systems",
            "Real-time analytics & reporting",
            "Scalable & cloud-based solutions",
            "User-friendly interface & automation"
        ],
        image:
           [ "https://img.freepik.com/free-vector/teem-discussing-project-kanban-board_1262-19963.jpg?t=st=1740552491~exp=1740556091~hmac=c4c3f3d32e5ddfe18a57737b272fca06dfd956059f60f9da3cbc40be814ecdcc&w=2000"]
    }
];

const servicesData = [
    {
        key: 'featured',
        title: 'Featured Services',
        count: featuredServices?.length,
    },
    {
        key: 'software',
        title: 'Software Solution',
        count: software?.length,
    },
    {
        key: 'other',
        title: 'Other Services',
        count: otherService?.length,
    },
];


export default function Services() {
    const [openIndex, setOpenIndex] = useState('featured');
    const [dialogVisible, setDialogVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const toggleSection = (key) => {
        setOpenIndex(key === openIndex ? null : key);
    };
    const handleDailogBox = (item) => {
        setSelectedItem(item)
        setDialogVisible(true)
    }
    const renderSectionContent = (section) => {
        switch (section.key) {
            case 'featured':
                return (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-xl overflow-hidden">
                            <thead className="bg-lightpri text-left text-pri">
                                <tr>
                                    <th className="px-6 py-3 text-sm font-semibold">Image</th>
                                    <th className="px-6 py-3 text-sm font-semibold">Title</th>
                                    <th className="px-6 py-3 text-sm font-semibold">Description</th>
                                    <th className="px-6 py-3 text-sm font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {featuredServices.map((item, idx) => (
                                    <tr key={idx} className="bg-lightpri">
                                        <td className="px-6 py-4 relative">
                                            <img src={item.image[0]} alt="" className="h-20 w-28 object-cover rounded" />
                                            {item.image.length>1? <div className='py-1 px-2 bg-black/70 rounded absolute bottom-4 left-4 text-[10px] text-white font-semibold'>{item.image.length-1}+</div>:null }
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-pri">{item.title}</td>
                                        <td className="px-6 py-4 text-sm">{item.description}</td>
                                        <td className="px-6 py-4 flex justify-center items-center gap-2">
                                            <button
                                                className="bg-white text-pri p-2 rounded-md shadow"
                                                onClick={() => handleDailogBox(item)}
                                            >
                                                <FiEdit2 size={18} />
                                            </button>
                                            <button
                                                className="bg-white text-pri p-2 rounded-md shadow"
                                               
                                            >
                                                <IoIosTrash size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );

            case 'software':
                return (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-xl overflow-hidden">
                            <thead className="bg-lightpri text-left text-pri">
                                <tr>
                                    <th className="px-6 py-3 text-sm font-semibold">Image</th>
                                    <th className="px-6 py-3 text-sm font-semibold">Title</th>
                                    <th className="px-6 py-3 text-sm font-semibold">Description</th>
                                    <th className="px-6 py-3 text-sm font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {software.map((item, idx) => (
                                    <tr key={idx} className="bg-lightpri">
                                        <td className="px-6 py-4">
                                            <img src={item.image[0]} alt="" className="h-20 w-28 object-contain rounded" />
                                            {item.image.length>1? <div className='py-1 px-2 bg-black/70 rounded absolute bottom-4 left-4 text-[10px] text-white font-semibold'>{item.image.length-1}+</div>:null }
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-pri">{item.title}</td>
                                        <td className="px-6 py-4 text-sm">{item.description}</td>
                                        <td className="px-6 py-4 flex justify-center items-center gap-2">
                                            <button
                                                className="bg-white text-pri p-2 rounded-md shadow"
                                                onClick={() => handleDailogBox(item)}
                                            >
                                                <FiEdit2 size={18} />
                                            </button>
                                            <button
                                                className="bg-white text-pri p-2 rounded-md shadow"
                                               
                                            >
                                                <IoIosTrash size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            

            case 'other':
                return (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-xl overflow-hidden">
                            <thead className="bg-lightpri text-left text-pri">
                                <tr>
                                    <th className="px-6 py-3 text-sm font-semibold">Image</th>
                                    <th className="px-6 py-3 text-sm font-semibold">Title</th>
                                    <th className="px-6 py-3 text-sm font-semibold">Description</th>
                                    <th className="px-6 py-3 text-sm font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {otherService.map((item, idx) => (
                                    <tr key={idx} className="bg-lightpri">
                                        <td className="px-6 py-4">
                                            <img src={item.image} alt="" className="h-20 w-28 object-cover rounded" />
                                            {item.image.length>1? <div className='py-1 px-2 bg-black/70 rounded absolute bottom-4 left-4 text-[10px] text-white font-semibold'>{item.image.length-1}+</div>:null }
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-pri">{item.title}</td>
                                        <td className="px-6 py-4 text-sm">{item.description}</td>
                                        <td className="px-6 py-4 flex justify-center items-center gap-2">
                                            <button
                                                className="bg-white text-pri p-2 rounded-md shadow"
                                                onClick={() => handleDailogBox(item)}
                                            >
                                                <FiEdit2 size={18} />
                                            </button>
                                            <button
                                                className="bg-white text-pri p-2 rounded-md shadow"
                                               
                                            >
                                                <IoIosTrash size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="w-full mx-auto ">
            <div className="flex justify-end">
                <button onClick={()=>setDialogVisible(true)} className="bg-blue-500 uppercase px-10 py-1 my-3 text-white text-sm font-semibold rounded-lg">
                    Add New
                </button>
            </div>
            <Dialog  visible={dialogVisible} className='lg:w-1/2  md:w-[80%] w-[90%] mx-2 h-fit' blockScroll draggable={false} onHide={()=>setDialogVisible(false)}>
                <ServiceForm passedData={selectedItem} />

            </Dialog>

            {servicesData.map((section, index) => {
                const isOpen = openIndex === section?.key;

                return (
                    <div key={index} className="mb-3 bg-white rounded-xl overflow-hidden">
                        <div
                            className={`flex justify-between items-center px-4 py-5  cursor-pointer bg-gray-100 my-2 rounded-lg`}
                            onClick={() => toggleSection(section?.key)}
                        >
                            <div className="flex items-center space-x-2">
                                {isOpen ? <FiChevronDown className='text-xl' /> : <FiChevronRight className='text-xl' />}
                                <h2 className="font-bold uppercase text-sm">{section.title}</h2>
                            </div>
                            <div className="text-sm bg-white text-black w-7 h-7 flex items-center justify-center rounded-full font-medium">
                                {section.count}
                            </div>
                        </div>

                        <div
                            className={`transition-all duration-700 ease-linear ${isOpen ? 'max-h-fit opacity-100 py-4 ' : 'max-h-0 opacity-0'
                                } overflow-hidden`}
                        >
                            {renderSectionContent(section)}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
