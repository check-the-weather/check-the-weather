 import Routes from "./Routes";

import { ReactComponent as OverviewIcon } from 'components/icons/overview.svg'
import { ReactComponent as CommunityIcon } from 'components/icons/community.svg'
import { ReactComponent as SignoutIcon } from 'components/icons/signout.svg'


 function getTabs(selectedTab, logout) {
  return [
    {
      id: 'Overview',
      isSelected: selectedTab === 'Overview',
      to: Routes.overview().link(),
      'aria-label': 'Overview',
      'aria-controls': 'Overview',
      svg: <OverviewIcon />,
    },
    {
      id: 'Community',
      isSelected: selectedTab === 'Community',
      to: Routes.community().link(),
      'aria-label': 'Community',
      'aria-controls': 'Community',
      svg: <CommunityIcon />,
    },
    {
      id: 'Divider',
      isDivider: true,
      isSelected: false,
    },
    {
      id: 'Sign out',
      isSelected: false,
      onClick: logout,
      'aria-label': 'Sign out',
      svg: <SignoutIcon />,
    },
  ];
}

export default getTabs;
