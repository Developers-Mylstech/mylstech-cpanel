import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight, FiEdit2 } from 'react-icons/fi';
import ServiceForm from '../Components/Forms/ServiceForm';




const featuredServices = [
    {
        title: 'Hardware Solutions',
        description: 'We provide robust and high-performance hardware solutions to meet industry needs, ensuring efficiency and reliability.',
        image: 'https://img.freepik.com/free-photo/network-mainboard-service-toy-broadcasting_1286-290.jpg',
    },
    {
        title: 'API Solutions',
        description: 'Develop and integrate secure, scalable, and efficient APIs for seamless connectivity and system interaction.',
        image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-api-infographic_23-2149383349.jpg',
    },
    {
        title: 'Mobile/Web Development',
        description: 'Build modern, user-friendly mobile and web applications tailored to your business needs for better digital presence.',
        image: 'https://img.freepik.com/free-vector/man-woman-working-app-development-landing-page_23-2148706844.jpg',
    },
    {
        title: 'Software Solutions',
        description: 'Customized software development services designed to streamline operations and enhance business productivity.',
        image: 'https://img.freepik.com/free-photo/online-marketing_53876-176744.jpg',
    },
    {
        title: 'IoT Solutions',
        description: 'Empowering businesses with IoT technology to enable smart connectivity, automation, and data-driven decision-making.',
        image: 'https://img.freepik.com/free-vector/internet-things-home-isometric-banner_1284-11186.jpg',
    },
    {
        title: 'AI Solutions',
        description: 'Harness the power of AI to automate tasks, analyze data, and improve decision-making with intelligent solutions.',
        image: 'https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg',
    },
    {
        title: 'SEO Solutions',
        description: 'Optimize your website for search engines to enhance visibility, drive organic traffic, and improve online presence.',
        image: 'https://img.freepik.com/free-vector/online-marketing-landing-page-illustrated_79603-1008.jpg',
    },
    {
        title: 'Cloud Solutions',
        description: 'Secure and scalable cloud solutions for data storage, application hosting, and business operations.',
        image: 'https://img.freepik.com/premium-vector/cloud-network-uploading-various-information-through-digital-systems_49459-616.jpg',
    },
];

const software = [
    {
        "title": "Construction",
        "description": "Advanced software solutions for the construction industry to streamline project management, budgeting, and workforce coordination.",
        "para_1": "Our construction management software helps companies track projects, manage resources, and ensure compliance with safety regulations.",
        "para_2": "We offer cloud-based solutions for real-time collaboration, cost estimation, and document management.",
        "para_3": "With integrated analytics, businesses can monitor project progress, reduce delays, and improve overall efficiency.",
        "image": "https://cdn3d.iconscout.com/3d/premium/thumb/under-construction-3d-icon-download-in-png-blend-fbx-gltf-file-formats--worker-site-architecture-safety-helmet-tools-maintenance-and-pack-icons-6407256.png",
        "type": "Software Solutions"
    },
    {
        "title": "Automobile",
        "description": "Automobile software solutions for vehicle management, maintenance tracking, and dealership automation.",
        "para_1": "We provide software for automobile dealerships, fleet management, and automotive service centers.",
        "para_2": "Our solutions include CRM tools, predictive maintenance, and real-time vehicle tracking systems.",
        "para_3": "Enhanced automation ensures cost-effectiveness, operational efficiency, and improved customer experience.",
        "image": "https://www.freeiconspng.com/uploads/classic-car-series-texture-png-icon--icon-15.jpg",
        "type": "Software Solutions"
    },
    {
        "title": "Laundry",
        "description": "Efficient laundry management software to automate order tracking, customer management, and billing.",
        "para_1": "Our software helps laundromats and dry cleaners manage pickups, deliveries, and order processing.",
        "para_2": "Automated invoicing, customer notifications, and seamless payment integration ensure smooth operations.",
        "para_3": "Businesses can track inventory, monitor machine performance, and enhance customer satisfaction.",
        "image": "https://cdn3d.iconscout.com/3d/premium/thumb/washing-machine-3d-icon-download-in-png-blend-fbx-gltf-file-formats--laundry-household-home-living-pack-furniture-icons-4825944.png?f=webp",
        "type": "Software Solutions"
    },
    {
        "title": "Grocery/Supermarket",
        "description": "Retail software solutions for inventory management, POS integration, and customer loyalty programs. sales tracking, and order fulfillment.",
        "para_1": "Our grocery store software ensures efficient stock control, sales tracking, and order fulfillment.",
        "para_2": "We offer AI-powered demand forecasting to optimize inventory and reduce wastage.",
        "para_3": "With mobile ordering and self-checkout features, businesses can enhance customer convenience and sales.",
        "image": "https://cdn3d.iconscout.com/3d/premium/thumb/supermarket-3d-icon-download-in-png-blend-fbx-gltf-file-formats--grocery-shop-store-shopping-buying-and-groceries-pack-marketplace-icons-8817630.png",
        "type": "Software Solutions"
    },
    {
        "title": "Restaurant/Cafe",
        "description": "Comprehensive restaurant and cafe management software to enhance ordering, kitchen workflows, order management, billing and customer experience.",
        "para_1": "Our POS systems help restaurants streamline order management, billing, and kitchen coordination.",
        "para_2": "Integrated online ordering, table reservations, and digital menus improve customer satisfaction.",
        "para_3": "Advanced analytics provide insights into sales trends, inventory usage, and employee performance.",
        "image": "https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/845bf0-tea-cup/front/400/color.webp",
        "type": "Software Solutions"
    },
    {
        "title": "Hotels",
        "description": "Hotel management solutions for reservations, billing, housekeeping, operations, bookings and guest services.",
        "para_1": "Our software helps hotels automate front desk operations, bookings, and customer check-ins.",
        "para_2": "Integrated CRM ensures personalized guest experiences and loyalty program management.",
        "para_3": "Real-time reporting helps managers optimize room occupancy, pricing strategies, and operational efficiency.",
        "image": "https://cdn3d.iconscout.com/3d/premium/thumb/hotel-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--room-restaurant-rest-house-accommodation-building-city-elements-pack-buildings-illustrations-4497530.png",
        "type": "Software Solutions"
    },
    {
        "title": "Facilities Management",
        "description": "Facility management software for maintenance tracking, asset management, and space optimization.",
        "para_1": "Our software streamlines facility maintenance by scheduling preventive and reactive repairs.",
        "para_2": "Businesses can track asset lifecycles, monitor energy usage, and improve space utilization.",
        "para_3": "Cloud-based dashboards provide real-time insights into operations and facility performance.",
        "image": "https://cdn3d.iconscout.com/3d/premium/thumb/property-management-3d-icon-download-in-png-blend-fbx-gltf-file-formats--building-apartment-house-real-estate-pack-buildings-icons-5727711.png",
        "type": "Software Solutions"
    },
    {
        "title": "Saloons",
        "description": "Salon and spa software for appointment scheduling, customer management, and billing.",
        "para_1": "Our software allows salons to manage bookings, track customer preferences, and automate reminders.",
        "para_2": "Integrated POS solutions enable seamless billing, product sales, and financial reporting.",
        "para_3": "With online booking and mobile apps, salons can enhance customer engagement and retention.",
        "image": "https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/e94351-scissor/front/400/color.webp",
        "type": "Software Solutions"
    },
    {
        "title": "Blog Material",
        "description": "Content management solutions for bloggers, writers, monetization for bloggers and digital media companies.",
        "para_1": "Our software simplifies content planning, publishing, and monetization for bloggers.",
        "para_2": "SEO tools, analytics, and audience engagement features help optimize digital content.",
        "para_3": "Integrated automation tools improve workflow, collaboration, and content distribution.",
        "image": "https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/5f20be-computer/front/400/color.webp",
        "type": "Software Solutions"
    },
    {
        "title": "Logistics",
        "description": "Logistics management software for fleet tracking, warehouse automation, and supply chain optimization.",
        "para_1": "Our software helps logistics businesses manage shipments, reduce delivery times, and optimize routes.",
        "para_2": "Real-time tracking, AI-driven demand forecasting, and automated inventory control improve efficiency.",
        "para_3": "Integrated dashboards provide insights into order status, fleet performance, and cost analysis.",
        "image": "https://cdn3d.iconscout.com/3d/premium/thumb/package-3d-icon-download-in-png-blend-fbx-gltf-file-formats--box-delivery-parcel-e-commerce-pack-shopping-icons-7849038.png?f=webp",
        "type": "Software Solutions"
    },
    {
        "title": "Business Setup/Pro Services",
        "description": "Business registration, compliance management, and corporate services for startups and enterprises.",
        "para_1": "We provide end-to-end business setup services, including company registration, legal documentation, and licensing.",
        "para_2": "Our compliance management tools ensure businesses meet regulatory requirements with ease.",
        "para_3": "Advisory services help businesses optimize tax structures, HR policies, and operational strategies.",
        "image": "https://cdn3d.iconscout.com/3d/premium/thumb/service-3d-icon-download-in-png-blend-fbx-gltf-file-formats--support-cog-setting-business-and-finance-pack-icons-5752009.png?f=webp",
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
            "https://img.freepik.com/free-vector/world-map-with-global-technology-social-connection-network-with-nodes-links-vector-illustration_1284-1968.jpg?t=st=1740552377~exp=1740555977~hmac=0d2b58dbe046f8b89a83ce8c38fccc47e07e7f79cc4afa6373eb87d0f9d98ee0&w=2000"
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
            "https://images.unsplash.com/photo-1545446968-9baea3c7a4db?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            "https://img.freepik.com/free-vector/teem-discussing-project-kanban-board_1262-19963.jpg?t=st=1740552491~exp=1740556091~hmac=c4c3f3d32e5ddfe18a57737b272fca06dfd956059f60f9da3cbc40be814ecdcc&w=2000"
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {featuredServices.map((item, idx) => (
                            <div
                                key={idx}
                                // style={{ backgroundImage: `url(${item.image})` }}
                                className="relative rounded-xl border bg-lightpri overflow-hidden space-y-3"
                            >
                                <img src={item.image} alt="" className='h-40 object-cover w-full' />
                                <div className='px-3 pb-4 space-y-2'>
                                    <h6 className='font-semibold text-lg text-pri'>{item.title}</h6>
                                    <p className='text-sm'>{item.description}</p>
                                    <button className="absolute bottom-2 right-2 bg-white text-pri p-1 rounded-md shadow">
                                        <FiEdit2 size={18} onClick={() => handleDailogBox(item)} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'software':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {software.map((item, idx) => (
                            <div
                                key={idx}
                                // style={{ backgroundImage: `url(${item.image})` }}
                                className="relative rounded-xl border bg-lightpri overflow-hidden space-y-3"
                            >
                                <img src={item.image} alt="" className='h-40 object-contain w-full' />
                                <div className='px-3 pb-4 space-y-2'>
                                    <h6 className='font-semibold text-lg text-pri'>{item.title}</h6>
                                    <p className='text-sm'>{item.description}</p>
                                    <button className="absolute bottom-2 right-2 bg-white text-pri p-1 rounded-md shadow">
                                        <FiEdit2 size={18} onClick={() => handleDailogBox(item)} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'other':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {otherService.map((item, idx) => (
                            <div
                                key={idx}
                                // style={{ backgroundImage: `url(${item.image})` }}
                                className="relative rounded-xl border bg-lightpri overflow-hidden space-y-3"
                            >
                                <img src={item.image} alt="" className='h-40 object-cover w-full' />
                                <div className='px-3 pb-4 space-y-2'>
                                    <h6 className='font-semibold text-lg text-pri'>{item.title}</h6>
                                    <p className='text-sm'>{item.description}</p>
                                    <button className="absolute bottom-2 right-2 bg-white text-pri p-1 rounded-md shadow">
                                        <FiEdit2 size={18} onClick={() => handleDailogBox(item)} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="w-full mx-auto ">
            
            <div className="flex justify-end">
                <button onClick={() => setDialogVisible(true)} className="bg-blue-500 uppercase px-10 py-1 my-3 text-white text-sm font-semibold rounded-lg">
                    Add New
                </button>
            </div>

            <Dialog visible={dialogVisible} className='lg:w-1/2  md:w-[80%] w-[90%] mx-2 h-fit' blockScroll draggable={false} onHide={() => setDialogVisible(false)}>
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
