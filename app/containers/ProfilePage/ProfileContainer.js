import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/Spinner'
import isEmpty from 'lodash/isEmpty';
import { connect } from "react-redux";
import styled from 'styled-components'
import SideBar from '../../components/SideBar'
import ProfileForm from "../../components/ProfileForm";
import { getUserProfile, updateProfile } from './actions'
import { addFlashMessage } from '../FlashMessage/actions'
import { selectAuthLoading, selectUser } from "../Auth/selectors";
import { selectProfileLoading, selectProfile } from "./selectors";

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
`;

class ProfileContainer extends Component {

  static propTypes = {
    user: PropTypes.object,
    profile: PropTypes.object,
    getProfile: PropTypes.func,
    updateProfile: PropTypes.func
  };

  componentDidMount() {
    const {getProfile, user} = this.props;
    getProfile(user.id);
  }

  render() {
    const {updateProfile, profile, loading, addFlashMessage} = this.props;
    return (
      <Wrapper>
        <div className="row">
          <div className="col-md-4">
            <SideBar/>
          </div>
          {loading && isEmpty(profile) ? (
            <Spinner/>
          ) : (
            <div className="col-md-8">
              <div className="shadow-sm">
                <ProfileForm
                  profile={profile}
                  addFlashMessage={addFlashMessage}
                  updateProfile={updateProfile}
                />
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    );
  }
}

export const mapStateToProps = state => ({
  profile: selectProfile(state),
  user: selectUser(state),
  loading: selectProfileLoading(state),
  authLoading: selectAuthLoading(state)
});

export const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(getUserProfile(id)),
  updateProfile: payload => dispatch(updateProfile(payload)),
  addFlashMessage: message => dispatch(addFlashMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
