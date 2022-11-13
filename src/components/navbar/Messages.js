import { MessagesStyled, Message, Bottom, Body, Name, Time } from "../../styles/components/navbar/Messages.styled";
import { Link } from 'react-router-dom';
import client1 from '../../images/navbar/messages/client1.jpg';
import client2 from '../../images/navbar/messages/client2.jpg';
import client3 from '../../images/navbar/messages/client3.jpg';


const Messages = ({ messages }) => {
    return (
        <MessagesStyled id="messages" ref={messages}>
            <h3>Messages</h3>
            <div>
                <Message>
                    <div>
                        <img src={client1} alt="..." width="35" height="35" />
                        <Body>
                            <div>
                                <Name>John</Name>
                                <Time>2 mins</Time>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </Body>
                    </div>
                </Message>
                <Message>
                    <div>
                        <img src={client2} alt="..." width="35" height="35" />
                        <Body>
                            <div>
                                <Name>Paolo Braun</Name>
                                <Time>10 mins</Time>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </Body>
                    </div>
                </Message>
                <Message>
                    <div>
                        <img src={client3} alt="..." width="35" height="35" />
                        <Body>
                            <div>
                                <Name>Rosamond Stehr</Name>
                                <Time>1 hour</Time>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </Body>
                    </div>
                </Message>
            </div>
            <Bottom>
                <h3>
                    <Link to="#">See All</Link>
                </h3>
            </Bottom>
        </MessagesStyled>
    )
}

export default Messages