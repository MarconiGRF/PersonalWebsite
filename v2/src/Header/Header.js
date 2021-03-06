import React from 'react';
import { Info } from '../Constants/Constants'
import '../App.css';
import logo from '../Resources/logo.jpg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {}
        }

        this.init(props);
    }

    init(props) {
        if (props.currentLanguage === 'pt') {
            this.state.info = Info.pt.common;
        }
        else {
            this.state.info = Info.en.common;
        }
    }

    componentWillReceiveProps(newProps) {
        this.init(newProps);
    }

    render() {
        return (
            <header className="header flex">
                <div className="pp">
                    <img className="logo-adeq" src={logo} alt="" />
                </div>
                <div className="description">
                    <h1 className="header-name">{this.state.info.name}</h1>
                    <h3 className="subdescription">{this.state.info.gradinfo}</h3>
                </div>
            </header>
        )
    }
}

export default Header