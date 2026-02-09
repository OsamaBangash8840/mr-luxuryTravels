import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import React, { Fragment } from 'react';
import { Typography } from '@/components/common';
import { useLocale } from '@/contexts/LocaleContext';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { FiCheck } from 'react-icons/fi';
import { IoIosArrowDown } from "react-icons/io";


export const LanguageDropdown = (): React.ReactElement => {
  const { locale, setLocale } = useLocale();

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    // Update document direction for RTL/LTR support
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLocale;
  };

  return (
    <div className="relative">
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="flex gap-2 items-center cursor-pointer px-5 py-3 border border-primary rounded-[20px] transition-colors">
          <Typography variant="navLink" className="hidden sm:inline">
            {localeNames[locale]}
          </Typography>
          <IoIosArrowDown className="text-primary" />
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
          <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right bg-white shadow-lg focus:outline-none py-2 z-50 rounded-lg border border-gray-200">
            <div className="px-1">
              {locales.map((loc) => (
                <MenuItem key={loc}>
                  {({ active }) => (
                    <button
                      onClick={() => handleLanguageChange(loc)}
                      className={`
                        group w-full items-center py-2 px-3 flex justify-between gap-x-2 
                        ${active ? 'bg-gray-100' : ''} 
                        transition-colors rounded-md
                      `}
                    >
                      <Typography
                        variant="navLink"
                        className={`${locale === loc ? 'text-primary font-medium' : 'text-textSecondary'}`}
                      >
                        {localeNames[loc]}
                      </Typography>
                      {locale === loc && (
                        <FiCheck className="text-primary" />
                      )}
                    </button>
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
