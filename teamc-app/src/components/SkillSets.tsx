import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import React from "react";

type SkillsetsProps = {
  skillSet: string[];
};

const SkillSets = (skillsetsProps: SkillsetsProps) => {
  return (
    <Typography variant="body2">
      {skillsetsProps.skillSet.map((skill, index) => (
        <Chip
          key={index}
          label={skill}
          color="primary"
          style={{ margin: "4px" }}
        />
      ))}
    </Typography>
  );
};

export default SkillSets;
