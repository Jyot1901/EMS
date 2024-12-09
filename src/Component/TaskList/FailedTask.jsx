import React from 'react';

const FailedTask = ({ data }) => {
    return (
        <div className="p-5 h-full flex-shrink-0 w-[300px] bg-red-600 rounded-xl text-white">
            <div className="flex justify-between items-center">
                <h3 className="bg-purple-700 px-3 py-1 rounded text-sm">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>
            <div className="mt-2">
                <button className="w-full bg-gray-800 py-2 rounded text-white">
                    Failed
                </button>
            </div>
        </div>
    );
};

export default FailedTask;