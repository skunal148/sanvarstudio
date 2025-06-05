import React from 'react';

const brandsData = [
    { name: 'Alps Blockchain', logoUrl: '/brands/Alps.png' },
    { name: 'Alpine Fresh', logoUrl: '/brands/AlpineFresh.png' },
    { name: 'Happn', logoUrl: '/brands/Happn.png' },
    { name: 'Mthree', logoUrl: '/brands/mthree.png' },
    { name: 'Portal One', logoUrl: '/brands/portalone.jpeg' },
    { name: 'Rival Club', logoUrl: '/brands/Rival Club.png' },
    { name: 'TrueCaller', logoUrl: '/brands/truecaller.png' },
    { name: 'Linen Chest', logoUrl: '/brands/Linen Chest.png' },
    { name: 'Upily', logoUrl: '/brands/upily.jpeg' },
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