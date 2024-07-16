"use client";
import React from 'react';
import Image from 'next/image';
import { people01,people02,people03 } from '@/assets';

const TeamMembers = () => {
    const teamMembers = [
        {
            
            name: "Liam James",
            email: "liamjames@example.com",
            phoneNumber: "+91 1234567890",
            address: "mumbai inida",
            score: "100K"
        },
        {
            
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            phoneNumber: "+91 1234567890",
            address: "delhi inida",
            score: "90K"
        },
        {
            
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            phoneNumber: "+91 1234567890",
            address: "gujrat india",
            score: "85K"
        },
        {
            
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            phoneNumber: "+91 1234567890",
            address: "pune india",
            score: "80K"
        },
        {
           
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            phoneNumber: "+91 1234567890",
            address: "kolkata india",
            score: "75K"
        },
    ];

    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-4">Monthly Update</h1>
            <p className="text-gray-600 mb-8 text-lg">
                see top members of the month and their performance
            </p>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-8 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Username</th>
                            <th className="px-8 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Phone number</th>
                            <th className="px-8 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Address</th>
                            <th className="px-8 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">count</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {teamMembers.map((member, index) => (
                            <tr key={index}>
                                <td className="px-8 py-6 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-14 w-14">
                                            <Image
                                                className="h-14 w-14 rounded-full"
                                                src={people01}
                                                alt={member.name}
                                                width={56}
                                                height={56}
                                            />
                                        </div>
                                        <div className="ml-6">
                                            <div className="text-lg font-medium text-gray-900">{member.name}</div>
                                            <div className="text-base text-gray-500">{member.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6 whitespace-nowrap text-base text-gray-500">
                                    {member.phoneNumber}
                                </td>
                                <td className="px-8 py-6 whitespace-nowrap text-base text-gray-500">
                                    {member.address}
                                </td>
                                <td className="px-8 py-6 whitespace-nowrap text-base text-gray-500">
                                    {member.score}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeamMembers;