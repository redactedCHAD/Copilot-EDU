
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const CheckIcon = () => <Check className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />;

const features = [
    'Access to all current and future courses',
    'Downloadable project files and resources',
    'Exclusive access to the community forum',
    'Submit projects to the showcase gallery',
    'Certificate of completion for each course'
];

const faqs = [
    {
        q: 'Can I cancel my subscription anytime?',
        a: 'Yes, you can cancel your subscription at any time from your profile page. You will retain access to all content until the end of your current billing period.'
    },
    {
        q: 'What is your refund policy?',
        a: 'We offer a 14-day money-back guarantee. If you are not satisfied with the platform for any reason, contact our support within 14 days of your initial purchase for a full refund.'
    },
    {
        q: 'Do you offer team or enterprise plans?',
        a: 'Yes! We have plans for teams of all sizes. Please contact our sales team for more information on team licensing and volume discounts.'
    }
]

const PricingPage: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

    const plans = {
        monthly: {
            price: 24,
            per: 'month'
        },
        annually: {
            price: 19,
            per: 'month',
            total: 228
        }
    }

    return (
        <div className="p-6 md:p-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">Find the perfect plan</h1>
                <p className="mt-4 text-lg text-text-secondary">Start learning and level up your AI skills today. Cancel anytime.</p>
            </div>

            {/* Toggle */}
            <div className="flex justify-center items-center space-x-4 mb-10">
                <span className={`font-medium ${billingCycle === 'monthly' ? 'text-primary' : 'text-text-secondary'}`}>Monthly</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={billingCycle === 'annually'} onChange={() => setBillingCycle(b => b === 'monthly' ? 'annually' : 'monthly')} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
                <span className={`font-medium ${billingCycle === 'annually' ? 'text-primary' : 'text-text-secondary'}`}>
                    Annually <span className="text-secondary font-semibold">(Save 20%)</span>
                </span>
            </div>

            {/* Pricing Cards */}
            <div className="bg-surface rounded-xl shadow-lg border border-border p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Features List */}
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary mb-2">
                           {billingCycle === 'annually' ? "Annual Plan" : "Monthly Plan"}
                        </h2>
                        <p className="text-text-secondary mb-6">All the features you need to become an AI power user.</p>
                        <ul className="space-y-4">
                            {features.map(feature => (
                                <li key={feature} className="flex items-center text-text-primary">
                                    <CheckIcon />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="bg-background/50 rounded-lg p-6 text-center border border-border">
                        <p className="text-text-secondary">
                          {billingCycle === 'annually' ? "Billed annually" : "Billed monthly"}
                        </p>
                        <p className="my-4">
                            <span className="text-5xl font-extrabold text-text-primary">${plans[billingCycle].price}</span>
                            <span className="text-text-secondary">/month</span>
                        </p>
                         {billingCycle === 'annually' && (
                             <p className="text-sm text-text-secondary -mt-2 mb-6">Total of ${plans.annually.total} per year</p>
                         )}
                        <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-md transition-colors text-lg">
                            Get Started
                        </button>
                        <p className="text-xs text-text-secondary mt-4">14-day money-back guarantee.</p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
                 <h2 className="text-3xl font-bold text-center text-text-primary mb-10">Frequently Asked Questions</h2>
                 <div className="max-w-3xl mx-auto space-y-6">
                     {faqs.map(faq => (
                         <div key={faq.q} className="border-b border-border pb-4">
                            <h3 className="font-semibold text-text-primary">{faq.q}</h3>
                            <p className="text-text-secondary mt-2">{faq.a}</p>
                         </div>
                     ))}
                 </div>
            </div>

        </div>
    );
};

export default PricingPage;
