interface MenuItem {
    name: string;
    price: number;
    description: string;
    largePrice?: number;
    imageUrl?: string;
}

export interface Restaurant {
    id: number;
    name: string;
    cuisine: string[];
    address: string;
    nearestUniversity: string;
    acceptsCampusCard: boolean;
    distance: string;
    rating: number;
    menuItems: MenuItem[];
    delivery: {
        doordash?: boolean;
        ubereats?: boolean;
        grubhub?: boolean;
        inhouse?: boolean;
    };
}