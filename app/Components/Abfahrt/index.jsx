// @flow
import './index.scss';
import { type Abfahrt as AbfahrtType } from 'types/abfahrten';
import { connect } from 'react-redux';
import { setDetail } from 'actions/abfahrten';
import AbfahrtContext from './AbfahrtContext';
import End from './End';
import Mid from './Mid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Start from './Start';

type Props = {
  abfahrt: AbfahrtType,
  detail: boolean,
  setDetail: typeof setDetail,
};

class Abfahrt extends React.PureComponent<Props> {
  setDetail = () => {
    this.props.setDetail(this.props.abfahrt.id);
  };
  render() {
    const { abfahrt, detail } = this.props;

    return (
      <Paper onClick={this.setDetail} className="Abfahrt">
        <div className="Abfahrt__entry">
          <AbfahrtContext.Provider value={{ abfahrt, detail }}>
            <Start />
            <Mid />
            <End />
          </AbfahrtContext.Provider>
        </div>
      </Paper>
    );
  }
}

export default connect(
  null,
  {
    setDetail,
  }
)(Abfahrt);