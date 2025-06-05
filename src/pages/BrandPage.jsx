import React from 'react';

const brandsData = [
    { name: 'Alps Blockchain', logoUrl: '/brands/Alps.png' },
    { name: 'Brand Beta', logoUrl: '/brands/AlpineFresh.png' },
    { name: 'Client Gamma', logoUrl: '/brands/Happn.png' },
    { name: 'Partner Delta', logoUrl: '/brands/mthree.png' },
    { name: 'Company Epsilon', logoUrl: '/brands/portalone.jpeg' },
    { name: 'Company Epsilon', logoUrl: '/brands/Rival Club.png' },
    { name: 'Company Epsilon', logoUrl: '/brands/truecaller.png' },
    { name: 'Company Epsilon', logoUrl: '/brands/Linen Chest.png' },
    { name: 'Company Epsilon', logoUrl: '/brands/upily.jpeg' },
    // Add more brands
];

const BrandPage = () => {
    return (
        <section id="clients" className="content-section page-padding"> {/* Using "clients" as id for nav */}
            <h2>Trusted By Leading Brands</h2> {/* Or "Our Clients", "We've Worked With" etc. */}
            <div className="brands-container">
                {brandsData.map((brand) => (
                    <div key={brand.name} className="brand-item">
                        <a href={brand.link} target="_blank" rel="noopener noreferrer" aria-label={brand.name}>
                            <img src={brand.logoUrl} alt={`${brand.name} logo`} className="brand-logo" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandPage;