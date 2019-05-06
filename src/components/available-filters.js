
import React from 'react';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import EyeIcon from 'mdi-react/EyeIcon';
import WcIcon from '@material-ui/icons/Wc';
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
  { name: 'Wheelchair Friendly', propName: 'wheelchairFriendly', icon: props => <AccessibleForwardIcon {...props} /> },
  { name: 'Buggy Friendly', propName: 'buggyFriendly', icon: props => <ChildFriendlyIcon {...props} /> },
  { name: 'Visually Impaired Friendly', propName: 'visuallyImpairedFriendly', icon: props => <EyeIcon {...props} /> },
  { name: 'Toilets', propName: 'toilets', icon: props => <WcIcon {...props} /> },
  { name: 'Dogs Allowed', propName: 'dogsAllowed', icon: props => <PetsIcon {...props} /> },
  { name: 'Cafe', propName: 'cafe', icon: props => <LocalCafeIcon {...props} /> },
  { name: 'Post Run Coffee', propName: 'postRunCoffee', icon: props => <GroupIcon {...props} /> },
  { name: 'Drinking Fountain', propName: 'drinkingFountain', icon: props => <WaterPumpIcon {...props} /> },
  { name: 'Changing Rooms', propName: 'changingRooms', icon: props => <HangerIcon {...props} /> },
  { name: 'Lockers', propName: 'lockers', icon: props => <LockIcon {...props} /> },
  { name: 'Showers', propName: 'showers', icon: props => <ShowerHeadIcon {...props} /> },
  { name: 'Bag Drop', propName: 'bagDrop', icon: props => <BriefcaseDownloadIcon {...props} /> },
  { name: 'Baby Changing Facilities', propName: 'babyChangingFacilities', icon: props => <BabyIcon {...props} /> },
  { name: 'Car Parking', propName: 'carParking', icon: props => <CarIcon {...props} /> },
  { name: 'Cycle Parking', propName: 'cycleParking', icon: props => <BikeIcon {...props} /> },
];