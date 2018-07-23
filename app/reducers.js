/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

import globalReducer from 'containers/App/reducer'
import reportReducer from 'containers/ReportPage/reducer'
import authReducer from 'containers/Auth/reducer'
import profileReducer from 'containers/ProfilePage/reducer'
import flashMessageReducer from 'containers/FlashMessage/reducer'
import memberReducer from 'containers/MemberPage/reducer'
import statisticReducer from 'containers/StatisticPage/reducer'
import messageReducer from 'containers/Message/reducer'
import reportFilterReducer from 'containers/ReportFilter/reducer'

import { context as globalContext } from 'containers/App/constants'
import { context as reportpageContext } from 'containers/ReportPage/constants'
import { context as authpageContext } from 'containers/Auth/constants'
import { context as profilepageContext } from 'containers/ProfilePage/constants'
import { context as flashMessageContext } from 'containers/FlashMessage/constants'
import { context as memberpageContext } from 'containers/MemberPage/constants'
import { context as statisticpageContext } from 'containers/StatisticPage/constants'
import { context as messagepageContext } from 'containers/Message/constants'
import { context as reportfilterContext } from 'containers/ReportFilter/constants'

const reducer = combineReducers({
  [authpageContext]: authReducer,
  [profilepageContext]: profileReducer,
  [flashMessageContext]: flashMessageReducer,
  [reportfilterContext]: reportFilterReducer,
  [messagepageContext]: messageReducer,
  [memberpageContext]: memberReducer,
  [statisticpageContext]: statisticReducer,
  [reportpageContext]: reportReducer,
  [globalContext]: globalReducer,
})

export default reducer;
