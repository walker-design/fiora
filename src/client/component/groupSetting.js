import React from 'react';
import '../style/groupSetting.scss';

import { connect } from 'react-redux';
import ui from '../action/ui';
import FloatPanel from './floatPanel';

class GroupSetting extends React.Component {
    render () {
        let { show } = this.props;
        return (
            <FloatPanel onClose={ this.props.closeGroupSetting } show={ show }>
                <div className="group-info">
                    <div>
                        <span>群名称：</span>
                        <span>Fiora</span>
                        <span>{ '< 修改' }</span>
                    </div>
                    <div>
                        <span>群主：</span>
                        <span>碎碎酱</span>
                    </div>
                    <div>
                        <span>群成员：</span>
                        <span>3人</span>
                    </div>
                    <div className="userList">
                        <div>
                            <img src={ require('../image/avatar.gif') }/>
                            <span>碎碎酱</span>
                        </div>
                        <div>
                            <img src={ require('../image/avatar.gif') }/>
                            <span>碎碎酱</span>
                        </div>
                    </div>
                </div>
            </FloatPanel>
        );
    }
}

export default connect(
    state => ({
        show: state.ui.showGroupSetting,
    }),
    () => ({
        closeGroupSetting: ui.closeGroupSetting,
    })
)(GroupSetting);