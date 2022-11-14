import { Container, Row, Col } from "react-bootstrap";
import styles from "./FeedBackCard.module.scss";

export const FeedBackCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={styles.proj_imgbx}></div>
      <img src={imgUrl.src}></img>
      <div className={styles.proj_txtx}>
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </Col>
  );
};

// export default FeedBackCard;
