 import Routes from "./Routes";

 import OverviewIcon from 'components/icons/overview.svg'
 
 function getTabs(selectedTab, logout) {
  return [
    {
      id: 'Overview',
      isSelected: selectedTab === 'Overview',
      to: Routes.dashboard().link(),
      'aria-label': 'Overview',
      'aria-controls': 'Overview',
      svg: OverviewIcon,
    },
    {
      id: 'Favourites',
      isSelected: selectedTab === 'Favourites',
      to: Routes.dashboard().link(),
      'aria-label': 'Favourites',
      'aria-controls': 'Favourites',
      svg: OverviewIcon,
    },
    {
      id: 'Community',
      isSelected: selectedTab === 'Community',
      to: Routes.dashboard().link(),
      'aria-label': 'Community',
      'aria-controls': 'Community',
      svg: OverviewIcon,
    },
    {
      id: 'Divider',
      isDivider: true,
      isSelected: false,
      svg: '',
    },
    {
      id: 'Sign out',
      isSelected: false,
      onClick: logout,
      'aria-label': 'Sign out',
      svg: OverviewIcon,
    },
  ];
}

export default getTabs;