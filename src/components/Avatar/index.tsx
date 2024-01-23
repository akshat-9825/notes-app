import styles from "./avatar.module.scss";

const Avatar = ({ name }: { name: string }) => {
  return <div className={styles.avatar}>{name[0]}</div>;
};

export default Avatar;
