'use client'
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

export default function Deposit() {
    const [amount, setAmount] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

        // Create a preview URL
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
        setPreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append('amount', amount);
        formData.append('receipt', selectedFile);

        try {
        console.log("Posting a deposit with params:", {selectedFile, amount});

        const response = await fetch('http://localhost:5000/deposit', {
            method: 'POST',
            body: formData,
          });

        if (response.ok) {
            setMessage('Deposit submitted successfully.');
            setAmount('');
            setSelectedFile(null);
            setPreview(null);
        } else {
            setMessage('Error submitting deposit.');
        }
     } catch (error) {
        setMessage('Error:', error);
     } finally {
        setIsLoading(false);
     }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <main className="max-w-2xl mx-auto mt-8">
                <div className="mb-4">
                    <a href="/account" className="text-[#A18249]">Account</a> / <span className="text-gray-800">Deposit</span>
                </div>

                <h2 className="text-3xl font-semibold mb-4">Deposit</h2>
                <p className="text-gray-700 mb-6">
                    Please deposit money to the bank account below and upload the deposit receipt as proof. We will review your deposit within 24 hours.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-gray-700 font-semibold">Amount</label>
                        <input
                            type='number'
                            id="amount"
                            name="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] 
                            focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal mt-3"
                            placeholder="birr"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="receipt" className="block text-gray-700 font-semibold">Upload Deposit Receipt</label>
                        <input
                            type="file"
                            id="receipt"
                            name="receipt"
                            onChange={handleFileChange}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] 
                            focus:border-none h-14 placeholder:text-[#A18249] p-4 text-base font-normal leading-normal mt-3"
                        />
                    </div>

                    {preview && (
                        <div className="mb-4">
                            <img src={preview} alt="Deposit Receipt" className="rounded border" />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#019863] text-white rounded-2xl hover:bg-green-700"
                        disabled={isLoading}
                    >
                        {isLoading ? <ClipLoader size={20} color="#fff" /> : 'Submit'}
                    </button>
                </form>
            </main>
        </div>
    );
}
