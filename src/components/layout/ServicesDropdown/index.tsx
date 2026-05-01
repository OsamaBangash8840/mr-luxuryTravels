import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import React, { Fragment } from 'react';
import { Typography } from '@/components/common';
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

interface ServiceItem {
  name: string;
  path: string;
}

const services: ServiceItem[] = [
  { name: 'Luxury Travel Planning', path: '/services' },
  { name: 'Private Jet Charters', path: '/services' },
  { name: 'Yacht Rentals', path: '/services' },
  { name: 'Lifestyle', path: '/services' },
  { name: 'VIP Experiences', path: '/services' },
  { name: 'Concierge Services', path: '/services' },
];

interface ServicesDropdownProps {
  onItemClick?: () => void;
}

export const ServicesDropdown = ({ onItemClick }: ServicesDropdownProps): React.ReactElement => {
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <div className="relative">
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="flex gap-1 items-center cursor-pointer transition-colors group">
          <Link to="/services" className="flex items-center">
            <Typography 
              variant="navLink" 
              className={isServicesActive ? "text-primary font-semibold" : "text-textPrimary"}
            >
              Services
            </Typography>
          </Link>
          <IoIosArrowDown 
            className={`transition-transform group-hover:rotate-180 ${isServicesActive ? "text-primary" : "text-textPrimary"}`} 
          />
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute left-0 mt-2 w-56 origin-top-left bg-white focus:outline-none py-2 z-50 rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] border border-r border-b border-t border-primary">
            <div className="px-1">
              {services.map((service) => (
                <MenuItem key={service.path}>
                  {({ active }) => (
                    <Link
                      to={service.path}
                      onClick={onItemClick}
                      className={`
                        group w-full items-center py-2 px-3 flex justify-between gap-x-2 
                        ${active ? 'bg-gray-100' : ''} 
                        transition-colors rounded-md
                      `}
                    >
                      <Typography
                        variant="navLink"
                        className={`${location.pathname === service.path ? 'text-primary font-medium' : 'text-primary'}`}
                      >
                        {service.name}
                      </Typography>
                    </Link>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};
