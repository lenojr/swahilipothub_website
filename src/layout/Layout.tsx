import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Swahili Pothub</h1>
                {/* Add navigation or other header content here */}
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Swahili Pothub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;