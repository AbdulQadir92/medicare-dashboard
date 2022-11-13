import { Link } from "react-router-dom";
import { NotificationsStyled, Notification, Bottom } from "../../styles/components/navbar/Notifications.styled";


const Notifications = ({ notifications }) => {
    return (
        <NotificationsStyled id="notifications" ref={notifications}>
            <h3>Notifications</h3>
            <div>
                <Notification>
                    <div>An Appoinment has been booked</div>
                    <div>
                        <span>Just Now</span>
                    </div>
                </Notification>
                <Notification>
                    <div>You have received an Email</div>
                    <div>
                        <span>5 hours</span>
                    </div>
                </Notification>
                <Notification>
                    <div>You have received an Email</div>
                    <div>
                        <span>3 days</span>
                    </div>
                </Notification>
            </div>
            <Bottom>
                <h3>
                    <Link to="#">See All</Link>
                </h3>
            </Bottom>
        </NotificationsStyled>
    )
}

export default Notifications