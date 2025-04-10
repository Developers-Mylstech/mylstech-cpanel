import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { FaDollarSign } from 'react-icons/fa';

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function SubscriptionForm({ initialData }) {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState(null);
    const [trialDays, setTrialDays] = useState(null);
    const [features, setFeatures] = useState('');
    const [monthly, setMonthly] = useState(false);
    const [yearly, setYearly] = useState(false);

    useEffect(() => {
        if (initialData) {
            setImage(initialData.image || null);
            setTitle(initialData.title || '');
            setSubtitle(initialData.subtitle || '');

            const priceMatch = initialData.price?.match(/\d+/);
            setPrice(priceMatch ? parseFloat(priceMatch[0]) : null);

            const trialMatch = initialData.trial?.match(/\d+/);
            setTrialDays(trialMatch ? parseInt(trialMatch[0]) : null);

            setFeatures(initialData.features ? initialData.features.join('\n') : '');

            setMonthly(initialData.price?.toLowerCase().includes('month') || false);
            setYearly(initialData.price?.toLowerCase().includes('year') || false);
        } else {

            setImage(null);
            setTitle('');
            setSubtitle('');
            setPrice(null);
            setTrialDays(null);
            setFeatures('');
            setMonthly(false);
            setYearly(false);
        }
    }, [initialData]);

    return (
        <div className="p-4 flex flex-col gap-5 mx-auto">

            <div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full text-gray-600"
                />
                {/* {typeof image === 'string' && (
                    <img src={image} alt="Plan" className="mt-2 w-24 rounded" />
                )} */}
            </div>

            {/* Title */}
            <InputText
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title here........"
                className="w-full border-0 border-b-2 p-3 border-gray-300 focus:border-blue-500 focus:ring-0 rounded-none"
            />

            {/* Subtitle */}
            <InputText
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Enter Subtitle here........"
                className="w-full border-0 border-b-2 p-3 border-gray-300 focus:border-blue-500 focus:ring-0 rounded-none"
            />

            {/* Price */}
            <div className="flex gap-4 items-center border-b-2">
                <FaDollarSign />
                <InputNumber
                    value={price}
                    onValueChange={(e) => setPrice(e.value)}
                    placeholder="Price"
                    className="w-full p-3 border-gray-300 focus:outline-none focus:ring-0 rounded-none"
                />
            </div>

            {/* Trial Days */}
            <InputNumber
                value={trialDays}
                onValueChange={(e) => setTrialDays(e.value)}
                placeholder="Trial Days"
                className="w-full border-0 border-b-2 p-3 border-gray-300 focus:border-blue-500 focus:ring-0 rounded-none"
            />

            {/* Features */}
            <InputTextarea
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                rows={5}
                placeholder="Feature List..... (one per line)"
                className="w-full border-0 border-b-2 p-3 border-gray-300 focus:border-blue-500 focus:ring-0 rounded-none"
            />

            {/* Monthly / Yearly */}
            <div className="flex items-center gap-6 mb-4">
                <label className="flex items-center gap-2 text-gray-600">
                    <input
                        type="checkbox"
                        checked={monthly}
                        onChange={(e) => setMonthly(e.target.checked)}
                        className="w-4 h-4"
                    />
                    Monthly
                </label>
                <label className="flex items-center gap-2 text-gray-600">
                    <input
                        type="checkbox"
                        checked={yearly}
                        onChange={(e) => setYearly(e.target.checked)}
                        className="w-4 h-4"
                    />
                    Yearly
                </label>
            </div>

            {/* Submit */}
            <Button
                label="Submit"
                className="w-full bg-pri border-none text-white py-2 px-4 rounded-lg text-sm uppercase"
            />
        </div>
    );
}
