
import React from 'react';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import EyeIcon from 'mdi-react/EyeIcon';
import WCIcon from '@material-ui/icons/WC';
import PetsIcon from '@material-ui/icons/Pets';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import GroupIcon from '@material-ui/icons/Group';
import HangerIcon from 'mdi-react/HangerIcon';
import WaterPumpIcon from 'mdi-react/WaterPumpIcon';
import LockIcon from 'mdi-react/LockIcon';
import ShowerHeadIcon from 'mdi-react/ShowerHeadIcon';
import BriefcaseDownloadIcon from 'mdi-react/BriefcaseDownloadIcon';
import BabyIcon from 'mdi-react/BabyIcon';
import CarIcon from 'mdi-react/CarIcon';
import BikeIcon from 'mdi-react/BikeIcon';

export const availableFilters = [
  { name: 'Wheelchair Friendly', propName: 'wheelchairFriendly', icon: <AccessibleForwardIcon /> },
  { name: 'Buggy Friendly', propName: 'buggyFriendly', icon: <ChildFriendlyIcon /> },
  { name: 'Visually Impaired Friendly', propName: 'visuallyImpairedFriendly', icon: <EyeIcon /> },
  { name: 'Toilets', propName: 'toilets', icon: <WCIcon /> },
  { name: 'Dogs Allowed', propName: 'dogsAllowed', icon: <PetsIcon /> },
  { name: 'Cafe', propName: 'cafe', icon: <LocalCafeIcon /> },
  { name: 'Post Run Coffee', propName: 'postRunCoffee', icon: <GroupIcon /> },
  { name: 'Drinking Fountain', propName: 'drinkingFountain', icon: <WaterPumpIcon /> },
  { name: 'Changing Rooms', propName: 'changingRooms', icon: <HangerIcon /> },
  { name: 'Lockers', propName: 'lockers', icon: <LockIcon /> },
  { name: 'Showers', propName: 'showers', icon: <ShowerHeadIcon /> },
  { name: 'Bag Drop', propName: 'bagDrop', icon: <BriefcaseDownloadIcon /> },
  { name: 'Baby Changing Facilities', propName: 'babyChangingFacilities', icon: <BabyIcon /> },
  { name: 'Car Parking', propName: 'carParking', icon: <CarIcon /> },
  { name: 'Cycle Parking', propName: 'cycleParking', icon: <BikeIcon /> },
];