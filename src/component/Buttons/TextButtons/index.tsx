import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  color?: string;
  hoverColor: string;
  id?: string;
  redirectLink: string;
  type?: string;
}

const TextButton = ({
  title,
  color,
  hoverColor,
  id,
  redirectLink,
  type
}: Props): JSX.Element => {
  return (
    <>
        <Link to={redirectLink} style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              color: color || "#000",
              fontSize: "16px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                color: hoverColor,
              },
            }}
            component="span"  
          >
            {title}
          </Typography>
        </Link>
    </>
  );
};

export default TextButton;
