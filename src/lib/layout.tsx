// Layout.tsx
import { CartProvider } from "../state/Context";
import { ReactNode } from 'react';


interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    );
}

export default Layout;