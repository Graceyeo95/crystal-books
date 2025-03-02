import { motion } from 'framer-motion';
import SignIn from './SignIn';

type mobileNavProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  navLinks: { name: string; link: string; icon: JSX.Element }[];
};

const MobileNav = ({
  toggle,
  setToggle,
  setActive,
  navLinks,
}: mobileNavProps) => {
  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: toggle ? 0 : '-100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`flex flex-col p-12 h-screen w-full z-40 bg-orange absolute top-0 right-0`}
    >
      <div className='mx-auto flex justify-center'>
        <SignIn />
      </div>
      <ul className='list-none flex lg:hidden pt-[160px] items-center w-full flex-col gap-y-10'>
        {navLinks.map(({ name, link }) => (
          <li
            key={name}
            className='text-white font-poppins font-medium cursor-pointer text-[30px]'
            onClick={() => {
              setToggle(!toggle);
              setActive(name);
            }}
          >
            <a href={`#${link}`}>{name}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNav;
