import styles from "./avatar.module.scss";

const Avatar = ({ name, color }: { name: string; color: string }) => {
  const nameArr = name.split(" ");
  const avatarName =
    nameArr.length > 1 ? nameArr[0][0] + nameArr[1][0] : nameArr[0][0];

  return (
    <div style={{ backgroundColor: color }} className={styles.avatar}>
      {avatarName}
    </div>
  );
};

export default Avatar;
