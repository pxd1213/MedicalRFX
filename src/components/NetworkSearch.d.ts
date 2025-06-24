import React from 'react';
import { Consultant, RegisteredBody, Company } from '../types';

interface NetworkSearchProps {
  consultants: Consultant[];
  registeredBodies: RegisteredBody[];
  companies: Company[];
}

declare const NetworkSearch: React.FC<NetworkSearchProps>;

export default NetworkSearch;
