// Interface for a property listing
export interface Property {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
}

// Interface for user props (example if you have a user list)
export interface UserProps {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
}

// Optional: For layout components with children
export interface LayoutProps {
  children: React.ReactNode;
}
