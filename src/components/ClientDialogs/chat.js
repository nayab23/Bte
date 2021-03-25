import React, { Component } from 'react';
import styles from './ClientDialogs.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import search from '../app_assets/img/Final-ICONS_SVG-17-Search.svg';
import hirenow from '../app_assets/img/Final-ICONS_SVG_22-Hire_Now.113017d7.svg';
import invoice from '../app_assets/img/Final-ICONS_SVG_12-Invoice.svg';
import logo from '../app_assets/img/logo.png';
import messageSend from '../app_assets/img/message send.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Chat extends Component {
  render() {
        return (
          <div className="container container-fluid-small">
            <main className="main-content main-content--dashboard">
              <Tabs className="chat-row">
                <div data-test="col" id="left-pane" className="col  border-right ">
                  <div data-test="row" className="row">
                    <div data-test="col" className="col-12" style={{ padding: "2vh" }}>
                      <div className="message-box-header message-search-bar">
                        <input className="message-search-input" placeholder="Search" />
                        <img src="/static/media/Search_Icon.124ea3bf.svg" alt="" /></div>
                    </div>
                  </div>
                  <div data-test="row" className="row" style={{ borderTop: "1.01005px solid rgb(234, 234, 234)", marginTop: "-4px" }}>
                    <div data-test="col" className="col" style={{ padding: "0px" }}>
                      <div className="chat-list-he">
                        <TabList className="ui fluid vertical tabular menu">
                        <Tab className="item" style={{padding: "0"}}></Tab>
                          <Tab className="item" >
                          <div data-test="row" className="row">
                            <div data-test="col" className="col-2" style={{ paddingLeft: "0px" }}>
                              <div className="avatar"
                                style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                              </div>
                            </div>
                            <div data-test="col" className="col-10" style={{ paddingRight: "0px" }}>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-box-header">
                                    <div>
                                      <div className="message-left-title">David Forest</div>
                                    </div>
                                    <div>
                                      <div className="message-left-date">April 30, 2020</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-left-preview">Hello, how are you?</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </Tab>
                          <Tab className="item">
                          <div data-test="row" className="row">
                            <div data-test="col" className="col-2" style={{ paddingLeft: "0px" }}>
                              <div className="avatar"
                                style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                              </div>
                            </div>
                            <div data-test="col" className="col-10" style={{ paddingRight: "0px" }}>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-box-header">
                                    <div>
                                      <div className="message-left-title">James Doe</div>
                                    </div>
                                    <div>
                                      <div className="message-left-date">2 days ago</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-left-preview">Hello, how are you?</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </Tab>
                          <Tab className="item">
                          <div data-test="row" className="row">
                            <div data-test="col" className="col-2" style={{ paddingLeft: "0px" }}>
                              <div className="avatar"
                                style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                              </div>
                            </div>
                            <div data-test="col" className="col-10" style={{ paddingRight: "0px" }}>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-box-header">
                                    <div>
                                      <div className="message-left-title">Alex Hill</div>
                                    </div>
                                    <div>
                                      <div className="message-left-date">July 03, 2020</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-left-preview">Hello, how are you?</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </Tab>
                          <Tab className="item">
                          <div data-test="row" className="row">
                            <div data-test="col" className="col-2" style={{ paddingLeft: "0px" }}>
                              <div className="avatar"
                                style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                              </div>
                            </div>
                            <div data-test="col" className="col-10" style={{ paddingRight: "0px" }}>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-box-header">
                                    <div>
                                      <div className="message-left-title">Shane Dawn</div>
                                    </div>
                                    <div>
                                      <div className="message-left-date">Yesterday</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-left-preview">Hello, how are you?</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </Tab>
                          <Tab className="item">
                          <div data-test="row" className="row">
                            <div data-test="col" className="col-2" style={{ paddingLeft: "0px" }}>
                              <div className="avatar"
                                style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                              </div>
                            </div>
                            <div data-test="col" className="col-10" style={{ paddingRight: "0px" }}>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-box-header">
                                    <div>
                                      <div className="message-left-title">James Doe</div>
                                    </div>
                                    <div>
                                      <div className="message-left-date">2 days ago</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-left-preview">Hello, how are you?</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </Tab>
                          <Tab className="item">
                          <div data-test="row" className="row">
                            <div data-test="col" className="col-2" style={{ paddingLeft: "0px" }}>
                              <div className="avatar"
                                style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                              </div>
                            </div>
                            <div data-test="col" className="col-10" style={{ paddingRight: "0px" }}>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-box-header">
                                    <div>
                                      <div className="message-left-title">David Forest</div>
                                    </div>
                                    <div>
                                      <div className="message-left-date">April 30, 2020</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-left-preview">Hello, how are you?</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </Tab>
                          <Tab className="item">
                          <div data-test="row" className="row">
                            <div data-test="col" className="col-2" style={{ paddingLeft: "0px" }}>
                              <div className="avatar"
                                style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                              </div>
                            </div>
                            <div data-test="col" className="col-10" style={{ paddingRight: "0px" }}>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-box-header">
                                    <div>
                                      <div className="message-left-title">Alex Hill</div>
                                    </div>
                                    <div>
                                      <div className="message-left-date">July 03, 2020</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-test="row" className="row">
                                <div data-test="col" className="col">
                                  <div className="message-left-preview">Hello, how are you?</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </Tab>
                        </TabList>
                      </div>
                    </div>
                  </div>
                </div>
                {/* message div */}
                <div data-test="col" id="right-pane" className="col-8  message-thread-main " style={{background: "#ffffff"}}>
                <div style={{height: "61vh"}}>
                <TabPanel className="chta-tab-panel" style={{height: "61vh"}}>
                <div className="row chat-empty-body">
                    <img src={logo} className="chat-expert-logo" alt=""/><br />
                    <p className="heading">Click user to chat......</p>
                </div>
                </TabPanel>
                <TabPanel className="chta-tab-panel">
                  <div data-test="row" className="row border-bottom"  style={{padding: "2.8vh"}}>
                    <div data-test="col" className="col message-box-header">
                      <div className="flex-center">
                        <div className="back-button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                        </svg>&nbsp;&nbsp;</div>
                        <div className="message-box-title">David Forest</div>
                      </div>
                      <div>
                        <img className="message-box-header-icon" src="/static/media/trash_1.943ffc98.svg" alt="" />
                        <img className="message-box-header-icon" src="/static/media/hide_1.651753df.svg" alt="" />
                        <Link to="/client-dashboard/hiring" ><img className="message-box-header-icon" src={hirenow} alt="" /></Link>
                        </div>
                    </div>
                  </div>
                  <div data-test="row" className="row"  style={{height: "46vh"}}>
                  <div className="chat-message-box-threads">
                  <div className="chatScroll">
                  <div style={{width: "100%", display: "flex", justifyContent: "flex-end", height: "auto"}}>
                    <div className="chat-rows">
                      <div className="talk-bubble tri-right left-in" style={{marginRight: "30px", marginLeft: "10px"}}>
                        <div className="talktext their-msg text-thread">
                          <p>hi</p>
                        </div>
                      </div><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOKSURBVHgB7ZlLSFRRGMf/596ZsocEUdEDS6WgIChykWAzTphE9FhlLSIIynVQiyAKEoMWtgrKkIheUGHY0khnHE0rKBMqF6HkhGYLCUxB8zH39L8RQaDmfOf4iPyB3rkz986c3/nO4zvnAnPMMcd/gYJlcnJyFqanp4cDASfX87x1/AmXf92A16W1epeW1vmyurp9CJaxJpKXl7c6LW3eJa1xgKdLJvju74BuAZzyWCx2F5awIlJQENnFr7pDiVVIjfe8bx+FPsEQY5FIJHLYcdQDCFEKXzwPO+vq6j7AAAcGUCKTEldggB9FyjwsKipyYYCRCCVu8LAC5mzp6ek5CAPEIozGRh4KYAlWSjEMEIs4jnMCdsnds2f9fAgRiyjlhWGXRUNDa1dCiEjE75jspFthndE1ECISYcdczpgEYBmt3XQIEYkEg0H/PuvpDREPwSKRgYGBfh6SsIzWegBCRCJNTU2+yGdYJhAIfIMQkYg/o7P+xLU3HsyWl0OISEQpfZT/N8I6+jSEiEQ4GX7FlKAXQIhIJJnUT/1fhWWUUi0QIhKJx+PtbF71sAwr6DGEiFMUz1NlPFhpYv6ahJnCXlZQHELEE1AikWjLzMwaYSF2w5xXXFidhwFG6xHyHBZgNF7DECORvr6+NyxGLwzhjP4RhhiJNDc3j7AQN2GI67o1MMS0abEQwXswQtVFo9GZjYhPbW1tC4fiOMQky2EBYxGfZBIlEKHaYrH6SljAisiv8T/lEYyRtCLhY0XER2vvCVKE9yRgCeNVXn5+fohJZIjF2s9cKRep0coi3BoeHq5qbGw06vBikVAotI0Loauc2bfDyrJXP+LWaTFbqWheEjetYNAtpoQfAUtrd3XQcXAOQlLOtfxNtIyMLUe4M3iKpwthETbNrOzszK6OjkQrUiSl2uQSd4frOhWczTdhStHXOdGW1tTUdE/2jkmJhMPhjEDAvcyXhzB9JDg8X4hG47cnc/FfRfgQ5yQ7YSnDLt48M0M/Gx31jjc0NLRNdNW4In4zYue7xks2Y2o241KlSimnhHnZ27E+/KOAhYWFGzxvtJARKOKIFMEshGuXVsfRZb29/ZXMvn9vSf0UYR/YwFS6YrYWfiw44HQyQmf4/PG+f67YhE5yKL3I14vx76FZ+WVLly4762ZnZ73gG+IHLDOM36LyBgcH107Vrvo0o49Zy35nmjmR2cYPjTwSahUt1MQAAAAASUVORK5CYII="
                        className="message-avatar" style={{marginRight: "10px"}}/>
                    </div>
                  </div>
                  <div style={{width: "100%", display: "flex", justifyContent: "flex-end", height: "auto"}}>
                    <div className="chat-rows">
                      <div className="talk-bubble tri-right left-in" style={{marginRight: "30px", marginLeft: "10px"}}>
                        <div className="talktext their-msg text-thread">
                          <p>i'm mark</p>
                        </div>
                      </div><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOKSURBVHgB7ZlLSFRRGMf/596ZsocEUdEDS6WgIChykWAzTphE9FhlLSIIynVQiyAKEoMWtgrKkIheUGHY0khnHE0rKBMqF6HkhGYLCUxB8zH39L8RQaDmfOf4iPyB3rkz986c3/nO4zvnAnPMMcd/gYJlcnJyFqanp4cDASfX87x1/AmXf92A16W1epeW1vmyurp9CJaxJpKXl7c6LW3eJa1xgKdLJvju74BuAZzyWCx2F5awIlJQENnFr7pDiVVIjfe8bx+FPsEQY5FIJHLYcdQDCFEKXzwPO+vq6j7AAAcGUCKTEldggB9FyjwsKipyYYCRCCVu8LAC5mzp6ek5CAPEIozGRh4KYAlWSjEMEIs4jnMCdsnds2f9fAgRiyjlhWGXRUNDa1dCiEjE75jspFthndE1ECISYcdczpgEYBmt3XQIEYkEg0H/PuvpDREPwSKRgYGBfh6SsIzWegBCRCJNTU2+yGdYJhAIfIMQkYg/o7P+xLU3HsyWl0OISEQpfZT/N8I6+jSEiEQ4GX7FlKAXQIhIJJnUT/1fhWWUUi0QIhKJx+PtbF71sAwr6DGEiFMUz1NlPFhpYv6ahJnCXlZQHELEE1AikWjLzMwaYSF2w5xXXFidhwFG6xHyHBZgNF7DECORvr6+NyxGLwzhjP4RhhiJNDc3j7AQN2GI67o1MMS0abEQwXswQtVFo9GZjYhPbW1tC4fiOMQky2EBYxGfZBIlEKHaYrH6SljAisiv8T/lEYyRtCLhY0XER2vvCVKE9yRgCeNVXn5+fohJZIjF2s9cKRep0coi3BoeHq5qbGw06vBikVAotI0Loauc2bfDyrJXP+LWaTFbqWheEjetYNAtpoQfAUtrd3XQcXAOQlLOtfxNtIyMLUe4M3iKpwthETbNrOzszK6OjkQrUiSl2uQSd4frOhWczTdhStHXOdGW1tTUdE/2jkmJhMPhjEDAvcyXhzB9JDg8X4hG47cnc/FfRfgQ5yQ7YSnDLt48M0M/Gx31jjc0NLRNdNW4In4zYue7xks2Y2o241KlSimnhHnZ27E+/KOAhYWFGzxvtJARKOKIFMEshGuXVsfRZb29/ZXMvn9vSf0UYR/YwFS6YrYWfiw44HQyQmf4/PG+f67YhE5yKL3I14vx76FZ+WVLly4762ZnZ73gG+IHLDOM36LyBgcH107Vrvo0o49Zy35nmjmR2cYPjTwSahUt1MQAAAAASUVORK5CYII="
                        className="message-avatar" style={{marginRight: "10px"}}/>
                    </div>
                  </div>
                  <div style={{width: "100%", display: "flex", justifyContent: "flex-start", paddingLeft: "1vh"}}>
                    <div className="chat-rows"><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOKSURBVHgB7ZlLSFRRGMf/596ZsocEUdEDS6WgIChykWAzTphE9FhlLSIIynVQiyAKEoMWtgrKkIheUGHY0khnHE0rKBMqF6HkhGYLCUxB8zH39L8RQaDmfOf4iPyB3rkz986c3/nO4zvnAnPMMcd/gYJlcnJyFqanp4cDASfX87x1/AmXf92A16W1epeW1vmyurp9CJaxJpKXl7c6LW3eJa1xgKdLJvju74BuAZzyWCx2F5awIlJQENnFr7pDiVVIjfe8bx+FPsEQY5FIJHLYcdQDCFEKXzwPO+vq6j7AAAcGUCKTEldggB9FyjwsKipyYYCRCCVu8LAC5mzp6ek5CAPEIozGRh4KYAlWSjEMEIs4jnMCdsnds2f9fAgRiyjlhWGXRUNDa1dCiEjE75jspFthndE1ECISYcdczpgEYBmt3XQIEYkEg0H/PuvpDREPwSKRgYGBfh6SsIzWegBCRCJNTU2+yGdYJhAIfIMQkYg/o7P+xLU3HsyWl0OISEQpfZT/N8I6+jSEiEQ4GX7FlKAXQIhIJJnUT/1fhWWUUi0QIhKJx+PtbF71sAwr6DGEiFMUz1NlPFhpYv6ahJnCXlZQHELEE1AikWjLzMwaYSF2w5xXXFidhwFG6xHyHBZgNF7DECORvr6+NyxGLwzhjP4RhhiJNDc3j7AQN2GI67o1MMS0abEQwXswQtVFo9GZjYhPbW1tC4fiOMQky2EBYxGfZBIlEKHaYrH6SljAisiv8T/lEYyRtCLhY0XER2vvCVKE9yRgCeNVXn5+fohJZIjF2s9cKRep0coi3BoeHq5qbGw06vBikVAotI0Loauc2bfDyrJXP+LWaTFbqWheEjetYNAtpoQfAUtrd3XQcXAOQlLOtfxNtIyMLUe4M3iKpwthETbNrOzszK6OjkQrUiSl2uQSd4frOhWczTdhStHXOdGW1tTUdE/2jkmJhMPhjEDAvcyXhzB9JDg8X4hG47cnc/FfRfgQ5yQ7YSnDLt48M0M/Gx31jjc0NLRNdNW4In4zYue7xks2Y2o241KlSimnhHnZ27E+/KOAhYWFGzxvtJARKOKIFMEshGuXVsfRZb29/ZXMvn9vSf0UYR/YwFS6YrYWfiw44HQyQmf4/PG+f67YhE5yKL3I14vx76FZ+WVLly4762ZnZ73gG+IHLDOM36LyBgcH107Vrvo0o49Zy35nmjmR2cYPjTwSahUt1MQAAAAASUVORK5CYII="
                        className="message-avatar"/>
                      <div className="talk-bubble tri-right right-in" style={{marginRight: "10px", marginLeft: "30px"}}>
                        <div className="talktext my-msg  text-thread">
                          <p>hi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{width: "100%", display: "flex", justifyContent: "flex-start", paddingLeft: "1vh"}}>
                    <div className="chat-rows"><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOKSURBVHgB7ZlLSFRRGMf/596ZsocEUdEDS6WgIChykWAzTphE9FhlLSIIynVQiyAKEoMWtgrKkIheUGHY0khnHE0rKBMqF6HkhGYLCUxB8zH39L8RQaDmfOf4iPyB3rkz986c3/nO4zvnAnPMMcd/gYJlcnJyFqanp4cDASfX87x1/AmXf92A16W1epeW1vmyurp9CJaxJpKXl7c6LW3eJa1xgKdLJvju74BuAZzyWCx2F5awIlJQENnFr7pDiVVIjfe8bx+FPsEQY5FIJHLYcdQDCFEKXzwPO+vq6j7AAAcGUCKTEldggB9FyjwsKipyYYCRCCVu8LAC5mzp6ek5CAPEIozGRh4KYAlWSjEMEIs4jnMCdsnds2f9fAgRiyjlhWGXRUNDa1dCiEjE75jspFthndE1ECISYcdczpgEYBmt3XQIEYkEg0H/PuvpDREPwSKRgYGBfh6SsIzWegBCRCJNTU2+yGdYJhAIfIMQkYg/o7P+xLU3HsyWl0OISEQpfZT/N8I6+jSEiEQ4GX7FlKAXQIhIJJnUT/1fhWWUUi0QIhKJx+PtbF71sAwr6DGEiFMUz1NlPFhpYv6ahJnCXlZQHELEE1AikWjLzMwaYSF2w5xXXFidhwFG6xHyHBZgNF7DECORvr6+NyxGLwzhjP4RhhiJNDc3j7AQN2GI67o1MMS0abEQwXswQtVFo9GZjYhPbW1tC4fiOMQky2EBYxGfZBIlEKHaYrH6SljAisiv8T/lEYyRtCLhY0XER2vvCVKE9yRgCeNVXn5+fohJZIjF2s9cKRep0coi3BoeHq5qbGw06vBikVAotI0Loauc2bfDyrJXP+LWaTFbqWheEjetYNAtpoQfAUtrd3XQcXAOQlLOtfxNtIyMLUe4M3iKpwthETbNrOzszK6OjkQrUiSl2uQSd4frOhWczTdhStHXOdGW1tTUdE/2jkmJhMPhjEDAvcyXhzB9JDg8X4hG47cnc/FfRfgQ5yQ7YSnDLt48M0M/Gx31jjc0NLRNdNW4In4zYue7xks2Y2o241KlSimnhHnZ27E+/KOAhYWFGzxvtJARKOKIFMEshGuXVsfRZb29/ZXMvn9vSf0UYR/YwFS6YrYWfiw44HQyQmf4/PG+f67YhE5yKL3I14vx76FZ+WVLly4762ZnZ73gG+IHLDOM36LyBgcH107Vrvo0o49Zy35nmjmR2cYPjTwSahUt1MQAAAAASUVORK5CYII="
                        className="message-avatar"/>
                      <div className="talk-bubble tri-right right-in" style={{marginRight: "10px", marginLeft: "30px"}}>
                        <div className="talktext my-msg  text-thread">
                          <p>how can i help you mark</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{width: "100%", display: "flex", justifyContent: "flex-end", height: "auto"}}>
                    <div className="chat-rows">
                      <div className="talk-bubble tri-right left-in" style={{marginRight: "30p", marginLeft: "10px"}}>
                        <div className="talktext their-msg text-thread">
                          <p>i need a fully functional responsive website with all the required stuff.</p>
                        </div>
                      </div><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOKSURBVHgB7ZlLSFRRGMf/596ZsocEUdEDS6WgIChykWAzTphE9FhlLSIIynVQiyAKEoMWtgrKkIheUGHY0khnHE0rKBMqF6HkhGYLCUxB8zH39L8RQaDmfOf4iPyB3rkz986c3/nO4zvnAnPMMcd/gYJlcnJyFqanp4cDASfX87x1/AmXf92A16W1epeW1vmyurp9CJaxJpKXl7c6LW3eJa1xgKdLJvju74BuAZzyWCx2F5awIlJQENnFr7pDiVVIjfe8bx+FPsEQY5FIJHLYcdQDCFEKXzwPO+vq6j7AAAcGUCKTEldggB9FyjwsKipyYYCRCCVu8LAC5mzp6ek5CAPEIozGRh4KYAlWSjEMEIs4jnMCdsnds2f9fAgRiyjlhWGXRUNDa1dCiEjE75jspFthndE1ECISYcdczpgEYBmt3XQIEYkEg0H/PuvpDREPwSKRgYGBfh6SsIzWegBCRCJNTU2+yGdYJhAIfIMQkYg/o7P+xLU3HsyWl0OISEQpfZT/N8I6+jSEiEQ4GX7FlKAXQIhIJJnUT/1fhWWUUi0QIhKJx+PtbF71sAwr6DGEiFMUz1NlPFhpYv6ahJnCXlZQHELEE1AikWjLzMwaYSF2w5xXXFidhwFG6xHyHBZgNF7DECORvr6+NyxGLwzhjP4RhhiJNDc3j7AQN2GI67o1MMS0abEQwXswQtVFo9GZjYhPbW1tC4fiOMQky2EBYxGfZBIlEKHaYrH6SljAisiv8T/lEYyRtCLhY0XER2vvCVKE9yRgCeNVXn5+fohJZIjF2s9cKRep0coi3BoeHq5qbGw06vBikVAotI0Loauc2bfDyrJXP+LWaTFbqWheEjetYNAtpoQfAUtrd3XQcXAOQlLOtfxNtIyMLUe4M3iKpwthETbNrOzszK6OjkQrUiSl2uQSd4frOhWczTdhStHXOdGW1tTUdE/2jkmJhMPhjEDAvcyXhzB9JDg8X4hG47cnc/FfRfgQ5yQ7YSnDLt48M0M/Gx31jjc0NLRNdNW4In4zYue7xks2Y2o241KlSimnhHnZ27E+/KOAhYWFGzxvtJARKOKIFMEshGuXVsfRZb29/ZXMvn9vSf0UYR/YwFS6YrYWfiw44HQyQmf4/PG+f67YhE5yKL3I14vx76FZ+WVLly4762ZnZ73gG+IHLDOM36LyBgcH107Vrvo0o49Zy35nmjmR2cYPjTwSahUt1MQAAAAASUVORK5CYII="
                        className="message-avatar" style={{marginRight: "10px"}}/>
                    </div>
                  </div>
                  <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <p className="no-more-messages">No more messages</p>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div data-test="row" className="row">
                  <div className="type-message-box flex-center">
                    <input placeholder="Your Message" className="type-message-input"/>
                    <img src={messageSend} className="message-send" alt="message send"/>
                  </div>
                  </div>
                  </TabPanel>
                  <TabPanel className="chta-tab-panel">
                    <div data-test="row" className="row border-bottom" style={{padding: "2.8vh"}}>
                      <div data-test="col" className="col message-box-header">
                        <div className="flex-center">
                          <div className="back-button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                          </svg>&nbsp;&nbsp;</div>
                          <div className="message-box-title">James Doe</div>
                        </div>
                        <div>
                          <img className="message-box-header-icon" src="/static/media/trash_1.943ffc98.svg" alt="" />
                          <img className="message-box-header-icon" src="/static/media/hide_1.651753df.svg" alt="" />
                          <Link to="/client-dashboard/hiring" ><img className="message-box-header-icon" src={hirenow} alt="" /></Link>
                          </div>
                      </div>
                    </div>
                    <div data-test="row" className="row"  style={{height: "46vh"}}>
                    <div className="chat-message-box-threads">
                    <div className="chatScroll">
                  
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <p className="no-more-messages">No more messages</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div data-test="row" className="row">
                    <div className="type-message-box flex-center">
                      <input placeholder="Your Message" className="type-message-input"/>
                      <img src={messageSend} className="message-send" alt="message send"/>
                    </div>
                    </div>
                    </TabPanel>
                    <TabPanel className="chta-tab-panel">
                    <div data-test="row" className="row border-bottom" style={{padding: "2.8vh"}}>
                      <div data-test="col" className="col message-box-header">
                        <div className="flex-center">
                          <div className="back-button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                          </svg>&nbsp;&nbsp;</div>
                          <div className="message-box-title">Alex Hill</div>
                        </div>
                        <div>
                          <img className="message-box-header-icon" src="/static/media/trash_1.943ffc98.svg" alt="" />
                          <img className="message-box-header-icon" src="/static/media/hide_1.651753df.svg" alt="" />
                          <Link to="/client-dashboard/hiring" ><img className="message-box-header-icon" src={hirenow} alt="" /></Link>
                         </div>
                      </div>
                    </div>
                    <div data-test="row" className="row"  style={{height: "46vh"}}>
                    <div className="chat-message-box-threads">
                    <div className="chatScroll">
                  
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <p className="no-more-messages">No more messages</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div data-test="row" className="row">
                    <div className="type-message-box flex-center">
                      <input placeholder="Your Message" className="type-message-input"/>
                      <img src={messageSend} className="message-send" alt="message send"/>
                    </div>
                    </div>
                    </TabPanel>
                    <TabPanel className="chta-tab-panel">
                    <div data-test="row" className="row border-bottom" style={{padding: "2.8vh"}}>
                      <div data-test="col" className="col message-box-header">
                        <div className="flex-center">
                          <div className="back-button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                          </svg>&nbsp;&nbsp;</div>
                          <div className="message-box-title">Shane Dawn</div>
                        </div>
                        <div>
                          <img className="message-box-header-icon" src="/static/media/trash_1.943ffc98.svg" alt="" />
                          <img className="message-box-header-icon" src="/static/media/hide_1.651753df.svg" alt="" />
                          <Link to="/client-dashboard/hiring" ><img className="message-box-header-icon" src={hirenow} alt="" /></Link>
                         </div>
                      </div>
                    </div>
                    <div data-test="row" className="row"  style={{height: "46vh"}}>
                    <div className="chat-message-box-threads">
                    <div className="chatScroll">
                  
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <p className="no-more-messages">No more messages</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div data-test="row" className="row">
                    <div className="type-message-box flex-center">
                      <input placeholder="Your Message" className="type-message-input"/>
                      <img src={messageSend} className="message-send" alt="message send"/>
                    </div>
                    </div>
                    </TabPanel>
                    <TabPanel className="chta-tab-panel">
                    <div data-test="row" className="row border-bottom" style={{padding: "2.8vh"}}>
                      <div data-test="col" className="col message-box-header">
                        <div className="flex-center">
                          <div className="back-button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                          </svg>&nbsp;&nbsp;</div>
                          <div className="message-box-title">James Doe</div>
                        </div>
                        <div>
                          <img className="message-box-header-icon" src="/static/media/trash_1.943ffc98.svg" alt="" />
                          <img className="message-box-header-icon" src="/static/media/hide_1.651753df.svg" alt="" />
                          <Link to="/client-dashboard/hiring" ><img className="message-box-header-icon" src={hirenow} alt="" /></Link>
                         </div>
                      </div>
                    </div>
                    <div data-test="row" className="row"  style={{height: "46vh"}}>
                    <div className="chat-message-box-threads">
                    <div className="chatScroll">
                  
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <p className="no-more-messages">No more messages</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div data-test="row" className="row">
                    <div className="type-message-box flex-center">
                      <input placeholder="Your Message" className="type-message-input"/>
                      <img src={messageSend} className="message-send" alt="message send"/>
                    </div>
                    </div>
                    </TabPanel>
                    <TabPanel className="chta-tab-panel">
                    <div data-test="row" className="row border-bottom" style={{padding: "2.8vh"}}>
                      <div data-test="col" className="col message-box-header">
                        <div className="flex-center">
                          <div className="back-button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                          </svg>&nbsp;&nbsp;</div>
                          <div className="message-box-title">David Forest</div>
                        </div>
                        <div>
                          <img className="message-box-header-icon" src="/static/media/trash_1.943ffc98.svg" alt="" />
                          <img className="message-box-header-icon" src="/static/media/hide_1.651753df.svg" alt="" />
                          <Link to="/client-dashboard/hiring" ><img className="message-box-header-icon" src={hirenow} alt="" /></Link>
                         </div>
                      </div>
                    </div>
                    <div data-test="row" className="row"  style={{height: "46vh"}}>
                    <div className="chat-message-box-threads">
                    <div className="chatScroll">
                  
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <p className="no-more-messages">No more messages</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div data-test="row" className="row">
                    <div className="type-message-box flex-center">
                      <input placeholder="Your Message" className="type-message-input"/>
                      <img src={messageSend} className="message-send" alt="message send"/>
                    </div>
                    </div>
                    </TabPanel>
                    <TabPanel className="chta-tab-panel">
                    <div data-test="row" className="row border-bottom" style={{padding: "2.8vh"}}>
                      <div data-test="col" className="col message-box-header">
                        <div className="flex-center">
                          <div className="back-button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                          </svg>&nbsp;&nbsp;</div>
                          <div className="message-box-title">Alex Hill</div>
                        </div>
                        <div>
                          <img className="message-box-header-icon" src="/static/media/trash_1.943ffc98.svg" alt="" />
                          <img className="message-box-header-icon" src="/static/media/hide_1.651753df.svg" alt="" />
                          <Link to="/client-dashboard/hiring" ><img className="message-box-header-icon" src={hirenow} alt="" /></Link>
                         </div>
                      </div>
                    </div>
                    <div data-test="row" className="row"  style={{height: "46vh"}}>
                    <div className="chat-message-box-threads">
                    <div className="chatScroll">
                  
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <p className="no-more-messages">No more messages</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div data-test="row" className="row">
                    <div className="type-message-box flex-center">
                      <input placeholder="Your Message" className="type-message-input"/>
                      <img src={messageSend} className="message-send" alt="message send"/>
                    </div>
                    </div>
                    </TabPanel>
                  </div>
                  </div>
              </Tabs>
              
            {/* audio video call nav */}
            <nav className="container-float">
              <a href="#" className="buttons" id="screen_share_ptp_start" data-to_uuid="126" data-username="Expert2"
                data-to_username="Expert Two" data-to_pool="451" data-to_ticket=""
                data-tooltip="Share Your Sceen"
              ></a>

              <a href="#" className="buttons" id="audio_call_connect" data-to_uuid="126" data-username="Expert2"
                data-to_username="Expert Two" data-to_pool="451" data-to_ticket=""
                data-tooltip="Audio Call"
              ></a>

              <a href="#" className="buttons" id="video_call_connect" data-to_uuid="126" data-username="Expert2"
                data-to_username="Expert Two" data-to_pool="451" data-to_ticket=""
                data-tooltip="Video Call"
              ></a>

              <a className="buttons" href="#"></a>
            </nav>

            <audio id="outgoing" controlsList="nodownload">
              <source src="/tune.ogg" type="audio/ogg" />
              <source src="/tune.mp3" type="audio/mpeg" />
            </audio>
            <audio id="callertune" controlsList="nodownload">
              <source src="/tune.ogg" type="audio/ogg" />
              <source src="/tune.mp3" type="audio/mpeg" />
            </audio>
            {/* <!-- Caller modal START --> */}
            <div className="ui modal ticket-posted-modal" id="video_call_Modal">
              <div className="content">
                <div className="ticket-posted-modal__subtitle">
                  <img src="/phone-pulse.gif"
                    style={{ width: "100px", float: "left", display: "inline-block" }} />
                  <h5 className="modal-title " id="exampleModalLabel" style={{ fontSize: "15px" }}>Outgoing Call To <strong
                    id="outcaller"></strong></h5>
                </div>
                <button type="button" className="button js-modal-close" id="closeCall" style={{ display: "inline-block" }}> Close
              </button>
                <button type="button" id="cancelCallmodel" className="button js-modal-close"
                  style={{ color: "#ffffff", display: "inline-block" }}> Cancel Call </button>
              </div>
            </div>
            {/* <!-- End Caller modal START --> */}


            {/* <!-- Caller modal START --> */}
            <div className="ui modal ticket-posted-modal" id="incomingcall">
              <div className="content">
                <div className="ticket-posted-modal__subtitle">
                  <img src="https://dev.backtoexperts.com/phone-pulse.gif"
                    style={{ width: "100px", float: "left", display: "inline-block" }} />
                  <h5 className="modal-title " id="exampleModalLabel" style={{ fontSize: "15px" }}>Incoming Call from <strong
                    id="receivecaller"></strong></h5>
                </div>
                <button type="button" className="button js-modal-close" id="rejectcall" style={{ display: "inline-block" }}> Decline
                  Call</button>
                <button type="button" id="answercall" className="button js-modal-close"
                  style={{ color: "#ffffff", display: "inline-block" }}> Answer Call </button>
              </div>
            </div>
            {/* <!-- End Caller modal START --> */}




            {/* <!-- Modal screen share sender --> */}
            <div className="ui modal ticket-posted-modal" id="screensender">
              <div className="content">
                <div className="ticket-posted-modal__subtitle">
                  <img src="https://dev.backtoexperts.com/Full_Screen.png"
                    style={{ width: "100px", float: "left", display: "inline-block" }} />
                  <h5 className="modal-title " id="exampleModalLabel" style={{ fontSize: "15px" }}>Do you want to sharing your
                      screen with <strong id="screen_sender"></strong></h5>
                </div>
                <button type="button" className="button js-modal-close" id="rejectscreensender" style={{ display: "inline-block" }}
                >Cancel</button>
                <button type="button" id="acceptscreensender" className="button js-modal-close"
                  style={{ color: "#ffffff", display: "inline-block" }} >Share</button>
              </div>
            </div>
            {/* <!-- End Modal  screen share sender--> */}


            {/* <!-- Modal screen share receiver --> */}
            <div className="ui modal ticket-posted-modal" id="screenrequest">
              <div className="content">
                <div className="ticket-posted-modal__subtitle">
                  <input type="hidden" id="urldata" />
                  <img src="https://dev.backtoexperts.com/Exit_Full_Screen.png"
                    style={{ width: "100px", float: "left", display: "inline-block" }} />
                  <h5 className="modal-title " id="exampleModalLabel" style={{ fontSize: "15px" }}>Screen sharing request from
                      <strong id="fullname"></strong></h5>
                </div>
                <button type="button" className="button js-modal-close" id="rejectscreenreceiver" style={{ display: "inline-block" }}
                > Reject</button>
                <button type="button" id="acceptscreenreceiver" className="button js-modal-close"
                  style={{ color: "#ffffff", display: "inline-block" }} >Accept</button>
              </div>
            </div>
            {/* <!-- End Modal screen share receiver--> */}
          </main>
          </div>
         
        );
    }
}

export default Chat;