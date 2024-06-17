"use client"

import React from 'react';
import { IconCircleCheckFilled } from '@tabler/icons-react';

const CustomToast = ({ message, onDismiss }) => {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-start space-x-2">
      <IconCircleCheckFilled/>
      {/* <CheckCircleIcon className="h-6 w-6 text-green-500" /> */}
      <div className="flex-1">
        <p className="font-bold">Order completed</p>
        <p className="text-sm">{message}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button className="text-green-700 hover:underline text-sm">View status</button>
        <button onClick={onDismiss} className="text-green-700 hover:underline text-sm">Dismiss</button>
      </div>
    </div>
  );
};

export default CustomToast;
