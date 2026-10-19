import { useState } from 'react';
import Scatter from '../components/Scatter';
import { useLang } from '../i18n/LanguageContext';
import PastaCurtain from '../components/menu/PastaCurtain';
import CategoryTabs from '../components/menu/CategoryTabs';
import DishCard from '../components/menu/DishCard';
import SimpleList from '../components/menu/SimpleList';
import MenuWheel from '../components/menu/MenuWheel';
import patronAzul from '../assets/patrones/patron-azul-vertical.jpg';
import menuDelDiaImage from '../assets/platos/menudeldia.png';
import { rigatoni, albahaca, tornillo } from '../assets/figuritas';
import {
  CATEGORIES,
  ENTRANTES,
  FOCACCIAS,
  ENSALADAS,
  PASTAS,
  POSTRES,
  CAFES,
  BEBIDAS_SUAVES,
  ICE_TEA,
  CERVEZAS,
  COPAS,
  SPRITZ,
  COCTELERIA,
  DESAYUNOS,
  DESAYUNOS_HORARIO,
} from '../data/menu';

const DECO = [
  { src: rigatoni, top: '4%', left: '3%', size: 160, rotate: -12, hideMobile: true },
  { src: albahaca, bottom: '6%', right: '3%', size: 150, rotate: 14, hideMobile: true },
  { src: tornillo, top: '8%', right: '4%', size: 110, rotate: 18, hideMobile: true },
];

function DishGrid({ items }) {
  return (
    <div className="menu-grid">
      {items.map((dish) => (
        <DishCard key={dish.name} dish={dish} />
      ))}
    </div>
  );
}

function SubHeading({ children }) {
  return <h3 className="menu-subheading">{children}</h3>;
}

export default function ElMenu() {
  const { t } = useLang();
  const [curtainDone, setCurtainDone] = useState(false);
  const [active, setActive] = useState('entrantes');

  return (
    <>
      {!curtainDone && <PastaCurtain onDone={() => setCurtainDone(true)} />}

      <section
        className="el-menu-hero section-pattern"
        style={{ backgroundImage: `url(${patronAzul})` }}
      >
        <Scatter items={DECO} />
        <div className="container el-menu-hero__inner">
          <h1 className="el-menu-hero__title">la carta</h1>
          <p className="el-menu-hero__note">
            todo lo que hacemos, con nombre, precio y la verdad de lo que lleva.
            ALWAYSSSS al dente.
          </p>
        </div>
      </section>

      <div className="menu-tabs-bar">
        <div className="container">
          <CategoryTabs categories={CATEGORIES} active={active} onChange={setActive} />
        </div>
      </div>

      <section className="menu-panel">
        <div className="container">
          {active === 'entrantes' && <DishGrid items={ENTRANTES} />}

          {active === 'alguito-mas' && (
            <>
              <SubHeading>Focaccia</SubHeading>
              <DishGrid items={FOCACCIAS} />
              <SubHeading>Ensaladas</SubHeading>
              <DishGrid items={ENSALADAS} />
            </>
          )}

          {active === 'pastas' && <DishGrid items={PASTAS} />}

          {active === 'postres' && (
            <>
              <DishGrid items={POSTRES} />
              <SubHeading>Cafés e infusiones</SubHeading>
              <SimpleList rows={CAFES} />
            </>
          )}

          {active === 'bebidas' && (
            <>
              <SubHeading>Sin / con alcohol suave</SubHeading>
              <SimpleList rows={BEBIDAS_SUAVES} />
              <SubHeading>Ice Tea</SubHeading>
              <SimpleList rows={ICE_TEA} />
              <SubHeading>Cerveza</SubHeading>
              <SimpleList rows={CERVEZAS} />
              <SubHeading>Copas</SubHeading>
              <SimpleList rows={COPAS} />
              <SubHeading>Spritz</SubHeading>
              <SimpleList rows={SPRITZ} />
              <SubHeading>Coctelería</SubHeading>
              <DishGrid items={COCTELERIA} />
            </>
          )}

          {active === 'menu-del-dia' && (
            <div className="menu-del-dia-tab">
              <img
                src={menuDelDiaImage}
                alt={t('menuDia.alt')}
                className="menu-del-dia-tab__image"
              />
            </div>
          )}

          {active === 'desayunos' && (
            <>
              <SubHeading>Desayunos</SubHeading>
              <p className="menu-note">{DESAYUNOS_HORARIO}</p>
              <DishGrid items={DESAYUNOS} />
            </>
          )}
        </div>
      </section>

      <MenuWheel />
    </>
  );
}
