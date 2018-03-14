import {StackNavigator} from 'react-navigation';

import JobDescription from './Recruiters/JobRegistration';
import PartnerList from './Recruiters/PartnerList';
import JobHistory from './Recruiters/JobHistory';
import JobReport from './Recruiters/JobReport';

import Confirmation from './Partners/Confirmation';

export const RecruiterStack = StackNavigator({
    DescScreen: {
        screen: JobDescription
    },
    PartnersScreen: {
        screen: PartnerList
    },
    HistoryScreen: {
        screen: JobHistory
    },
    ReportScreen: {
        screen: JobReport
    }
},{
    initialRouteName:'PartnersScreen'
});

export const PartnerStack = StackNavigator({
    PartnerScreen: {
        screen: PartnerList
    },
    ConfirmationScreen: {
        screen: Confirmation
    }
},{
    initialRouteName: 'ConfirmationScreen'
});

export const RootStack = StackNavigator({
    Partner: {
        screen: PartnerStack
    },
    Recruiter: {
        screen: RecruiterStack
    },
},{
    initialRouteName: 'Recruiter',
    headerMode: 'none'
});