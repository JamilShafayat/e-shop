import React from 'react';
import { useSelector } from 'react-redux';
import OurTeam from './OurTeam';

function OurTeamContainer() {
    const teamMembers = useSelector((state) => state.teamMembers);
    return <OurTeam teamMembers={teamMembers} />;
}

export default OurTeamContainer;