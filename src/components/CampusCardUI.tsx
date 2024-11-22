import React from 'react';
import { CreditCard } from 'lucide-react';
import { Card, CardHeader, CardTitle } from './ui/card';

interface CampusCardProps {
  name: string;
  acceptsCard: boolean;
}

const CampusCardUI: React.FC<CampusCardProps> = ({ name, acceptsCard }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <span>{name}</span>
            <div className={`flex items-center space-x-2 ${
              acceptsCard ? 'text-green-600' : 'text-red-600'
            }`}>
              <CreditCard className="h-5 w-5" />
              <span className="text-sm font-medium">
                {acceptsCard ? 'Accepts Campus Card' : 'No Campus Card'}
              </span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CampusCardUI; 