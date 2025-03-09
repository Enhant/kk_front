import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const useStyles = makeStyles({
  main: {
    textAlign: "center",
    marginTop: 13,
    display: "block",
    textDecoration: "none",
  },
  name: {
    fontSize: 13,
    color: "white",
  },
  icon: {
    width: 45,
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SliderMenuElem: React.FC<{ name: string; icon: any; path: string }> = ({
  name,
  icon,
  path,
}) => {
  const styles = useStyles();
  return ( 
    <Link href={path} className={styles.main}>
      <img src={icon} className={styles.icon} />
      <Grid className={styles.name}>{name}</Grid>
    </Link>
  );
};

export default SliderMenuElem;
