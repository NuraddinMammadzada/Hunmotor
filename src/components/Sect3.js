import React from 'react';
import { ReactComponent as CarIcon } from './styles/car.svg';
import { ReactComponent as TruckIcon } from './styles/2.svg';
import { ReactComponent as GearIcon } from './styles/3.svg';
import { ReactComponent as TrophyIcon } from './styles/4.svg';
import './styles/Sect3.css';

const infoItems = [
  {
    id: 1,
    icon: <CarIcon />,
    title: 'Sərnişin və yüngül kommersiya avtomobili',
    description: 'Sərnişin və yüngül kommersiya avtomobilləri üzrə 11 markaya xidmət edirik.',
  },
  {
    id: 2,
    icon: <TruckIcon />,
    title: 'Ağır nəqliyyat vasitələri',

    description: 'Ağır nəqliyyat vasitələri üzrə 8 markaya xidmət edirik.',
  },
  {
    id: 3,
    icon: <GearIcon />,
    title: 'Davamlı inkişaf',
    description: 'Fərqli nəqliyyat vasitələrində məhsul tədarükünə diqqət yetiririk.',
  },
  {
    id: 4,
    icon: <TrophyIcon />,
    title: 'Minlərlə məhsul çeşidi',
    description: 'Zəmanətli məhsullar Müştəri məmnuniyyəti',
  },
];

const InfoSection = () => {
  return (
    <section className="info-container">
      <h2 className="info-title">Ehtiyat hissələrindəki keyfiyyət ünvanı</h2>
      <div className="info-grid">

        {infoItems.map((item) => (
          <div className="info-card" key={item.id}>
            <div className=''></div>
            <div className="icon-wrapper">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
