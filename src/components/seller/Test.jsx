import React, { useState } from "react";

const Sell = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessName: "",
        businessNumber: "",
        email: "",
        password: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Data:", formData);
        // Make API call to submit formData
    };

    return (
        <div className="flex items-center min-h-screen bg-gray-100 text-base">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
                {step === 1 && (
                    <>
                        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                            Enter Business Details
                        </h1>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Business Name</label>
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Business Number</label>
                            <input
                                type="text"
                                name="businessNumber"
                                value={formData.businessNumber}
                                onChange={handleChange}
                                className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleNextStep}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                        >
                            Continue
                        </button>
                    </>
                )}
                {step === 2 && (
                    <>
                        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                            Enter Business Address
                        </h1>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
            <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                required
            />
        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                            <input
                                type="text"
                                name="addressLine2"
                                value={formData.addressLine2}
                                onChange={handleChange}
                                className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={handlePreviousStep}
                                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default Sell;
