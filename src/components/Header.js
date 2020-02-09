import React, { Component } from 'react';
import { Link } from 'gatsby'
import Scroll from './Scroll';
import WT from '../assets/images/WT.jpg';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
      currentPage: '',
      mobile: false
    };
  }
  componentDidMount() {
    window.location.href.includes('contact') && this.setState({ currentPage: 'contactPage' })
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleMenu = value => this.setState({ openMenu: value });
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 100) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };
  checkIfMobileIsTrue = () => {
    const { openMenu } = this.state;
    if (window.innerWidth < 992) {
      this.toggleMenu(!openMenu)
    }
  }

  render() {
    const { openMenu, visibilityClass, mobile, currentPage } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          {currentPage === '' ?
            <a className="navbar-brand" href="#page-top">
              <img src={WT} className="img-fluid" alt="" />
            </a>
            : <Link to={"/#page-top"}>
              <img src={WT} className="img-fluid" alt="" /></Link>
          }
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${openMenu && mobile ? '' : 'collapsed'}`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu{' '}
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto" style={{
              textAlign: openMenu ? 'center' : 'initial'
            }}>
              <li className="nav-item">
                {
                  currentPage === '' ?
                    <Scroll
                      onClick={_ => mobile && this.toggleMenu(!openMenu)}
                      type="id"
                      callback={this.checkIfMobileIsTrue}
                      element="services"
                    >
                      <a className="nav-link" href="#services">
                        Services
                    </a>
                    </Scroll>
                    : <Link to={"/#services"}>Services</Link>
                }
              </li>
              <li className="nav-item">
                {currentPage === '' ?
                  <Scroll
                    onClick={_ => mobile && this.toggleMenu(!openMenu)}
                    type="id"
                    callback={this.checkIfMobileIsTrue}
                    element="about"
                  >
                    <a className="nav-link" href="#about">
                      About
                  </a>
                  </Scroll>
                  : <Link to={"/#about"}>
                    About</Link>}
              </li>
              <li className="nav-item">
                {currentPage === '' ?
                  <Scroll
                    onClick={_ => mobile && this.toggleMenu(!openMenu)}
                    type="id"
                    callback={this.checkIfMobileIsTrue}
                    element="meettheteam"
                  >
                    <a className="nav-link" href="#meettheteam">
                      Meet the team
                  </a>
                  </Scroll>
                  : <Link to={"/#meettheteam"}>
                    Meet the team</Link>}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    );
  }
}
