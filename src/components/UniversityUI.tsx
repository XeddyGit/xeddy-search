import React from 'react';
import { School } from 'lucide-react';
import { Card, CardHeader, CardTitle } from './ui/card';

interface UniversityProps {
  name: string;
}

const UniversityUI: React.FC<UniversityProps> = ({ name }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center space-x-2">
            <School className="h-5 w-5 text-blue-600" />
            <span>{name}</span>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default UniversityUI; 